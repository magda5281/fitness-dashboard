import { StepsChart } from '@/components/charts/stepsChart';
import { HeartRateChart } from '@/components/charts/heartRateChart';
import { GenericCard } from '@/components/genericCard';
import { getFitnessData } from '@/lib/data';
import { findByDate, formatDate } from '@/lib/utils';
import { AvatarIcon } from '@radix-ui/react-icons';
import { Droplet, Flame, Footprints, Heart } from 'lucide-react';
import { SleepEfficiency } from '@/components/charts/sleepEfficiency';
import { AvgRestingHRChart } from '@/components/charts/avgRestingHRChart';
import { SleepStagesChart } from '@/components/charts/sleepStagesChart';
import { WeightChart } from '@/components/charts/weightChart';
import { DailyWorkoutChart } from '@/components/charts/workoutChart';
import { VO2MaxChart } from '@/components/charts/VO2MaxChart';
import { CaloriesWorkoutWeight } from '@/components/charts/caloriesWorkoutWeight';
import { BodyFatChart } from '@/components/charts/bodyFat';

export default async function DashboardPage() {
  const fitnessData = await getFitnessData();
  const today = new Date().toISOString().split('T')[0];
  const currentSteps = findByDate(fitnessData.steps, today);
  const lastSteps = currentSteps
    ? fitnessData.steps[fitnessData.steps.length - 2]
    : null;
  const stepsData = fitnessData.steps.map((item) => ({
    date: formatDate(item.date),
    steps: item.steps,
  }));
  const heartRateData = fitnessData.heartRateData;
  const currentHeartHealth = findByDate(heartRateData, today);
  const recentHeartHealth = currentHeartHealth
    ? fitnessData.heartRateData[heartRateData.length - 2]
    : null;

  const avgRestingHRData = heartRateData.map((item) => ({
    date: formatDate(item.date),
    avgRestingHR: item.avgRestingHR,
  }));

  const hydration = findByDate(fitnessData.hydration, today);
  const calories = findByDate(fitnessData.calories, today);
  const sleepData = fitnessData.sleepQuality;
  const sleepEfficiency = findByDate(sleepData, today);
  const sleepStagesData = sleepData.map((item) => {
    // Start with default values
    const transformed = {
      date: formatDate(item.date),
      awake: 0,
      light: 0,
      deep: 0,
      rem: 0,
    };

    // Iterate over each stage and assign its minutes
    item.stages.forEach((stageObj) => {
      transformed[stageObj.stage] = stageObj.minutes;
    });

    return transformed;
  });
  const currentWorkout = findByDate(fitnessData.workouts, today);

  const weightData = fitnessData.weightTrend.map((item) => ({
    date: formatDate(item.date),
    value: item.value,
    unit: item.unit,
  }));

  const vo2MaxData = fitnessData.vo2max.map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));

  const bodyFat = fitnessData.bodyFat;
  console.log('bodyFat', bodyFat);
  //which is
  //  bodyFat: [
  //  { name: 'Arms', size: 18.5 },
  //         { name: 'Chest', size: 20.0 },
  //         { name: 'Core', size: 22.1 },
  //         { name: 'Legs', size: 15.0 },
  //         { name: 'Back', size: 16.3 },
  // ],
  //the above needs to be made into

  const bodyFatData = [
    {
      name: 'Body Fat',
      children: [
        { name: 'Arms', size: 18.5 },
        { name: 'Chest', size: 20.0 },
        { name: 'Core', size: 22.1 },
        { name: 'Legs', size: 15.0 },
        { name: 'Back', size: 16.3 },
      ],
    },
  ];

  return (
    <main className='flex gap-4 min-h-screen flex-col  '>
      <div className='sticky top-0 z-50 bg-background p-4 md:p-6 lg:p-8 border-b'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-xl'>Fitness & Health Dashboard</h1>
          <AvatarIcon className='w-8 h-8' />
        </div>
      </div>

      <div className='flex-1 overflow-auto p-4 md:p-6 lg:p-8'>
        {/* KPI Cards Row */}
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6 mb-4'>
          <GenericCard
            title='Steps'
            description={`${
              (currentSteps?.steps ?? 0) - (lastSteps?.steps ?? 0)
            } vs yesterday`}
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Footprints /> {currentSteps?.steps.toLocaleString() ?? 0}
            </div>
          </GenericCard>
          <GenericCard
            title='Heart health'
            description={`${
              (currentHeartHealth?.avgRestingHR ?? 0) -
              (recentHeartHealth?.avgRestingHR ?? 0)
            } Bpm vs yesterday`}
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Heart color='red' />
              {currentHeartHealth?.avgRestingHR ?? 0} Bpm
            </div>
          </GenericCard>
          <GenericCard
            title='Hydration'
            description={` ${(
              (hydration?.goal ?? 3) - (hydration?.current ?? 0)
            ).toLocaleString()} ${hydration?.unit ?? ''} to go`}
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Droplet color='blue' />
              {`${hydration?.current} ${hydration?.unit}`}
            </div>
          </GenericCard>
          <GenericCard title='Calories intake' description='Consumed vs Burned'>
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Flame color='orange' />
              {`${(calories?.consumed ?? 0) - (calories?.burned ?? 0)} ${
                calories?.unit ?? ''
              }`}
            </div>
          </GenericCard>
        </div>

        {/* Charts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
          <GenericCard title='Step Activity' className='col-span-1'>
            <div className='h-[200px] md:h-[300px]'>
              <StepsChart data={stepsData} />
            </div>
          </GenericCard>
          <GenericCard
            title='Current heart rate'
            description='Time in each HR zone'
            className='col-span-1'
          >
            <div className=' h-[200px] md:h-[300px]'>
              <HeartRateChart data={currentHeartHealth?.zones ?? []} />
            </div>
          </GenericCard>
          <GenericCard
            title='Average resting heart rate'
            description='Heart Rate Over Time'
            className='col-span-1'
          >
            <div className=' h-[200px] md:h-[300px]'>
              <AvgRestingHRChart data={avgRestingHRData ?? []} />
            </div>
          </GenericCard>
          <GenericCard
            title='Sleep efficiency'
            description='How well did you sleep?'
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <SleepEfficiency data={sleepEfficiency?.metrics} />
            </div>
          </GenericCard>
          <GenericCard
            title='Sleep stages'
            description='The length of REM or Deep sleep?'
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <SleepStagesChart data={sleepStagesData} />
            </div>
          </GenericCard>
          <GenericCard
            title='Weight trend'
            description='Body weight over time'
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <WeightChart data={weightData} />
            </div>
          </GenericCard>
          <GenericCard
            title='Daily workout'
            description='% of  achieved target'
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <DailyWorkoutChart data={currentWorkout} />
            </div>
          </GenericCard>
          <GenericCard
            title='VO2 Max trend'
            description='VO2 Max over time'
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <VO2MaxChart data={vo2MaxData} />
            </div>
          </GenericCard>
          <GenericCard
            title='Calories vs workout vs weight'
            description=''
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <CaloriesWorkoutWeight />
            </div>
          </GenericCard>
          <GenericCard
            title='Body fat percentage'
            description=''
            className='col-span-1'
          >
            <div className='h-[200px] md:h-[300px]'>
              <BodyFatChart data={bodyFatData} />
            </div>
          </GenericCard>
        </div>
      </div>
    </main>
  );
}
