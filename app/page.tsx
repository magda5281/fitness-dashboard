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

  return (
    <main className='flex gap-4 min-h-screen flex-col'>
      <div className='sticky top-0 z-50 bg-[var(--data-green)] text-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border-b'>
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
          <h1 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
            Fitness & Health Dashboard
          </h1>
          <AvatarIcon className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10' />
        </div>
      </div>

      <div className='flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8'>
          <GenericCard
            title='Steps'
            description={`${
              (currentSteps?.steps ?? 0) - (lastSteps?.steps ?? 0)
            } vs yesterday`}
            className=' bg-green-50'
          >
            <div className='text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
              <Footprints className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
              {currentSteps?.steps.toLocaleString() ?? 0}
            </div>
          </GenericCard>
          <GenericCard
            title='Heart health'
            description={`${
              (currentHeartHealth?.avgRestingHR ?? 0) -
              (recentHeartHealth?.avgRestingHR ?? 0)
            } Bpm vs yesterday`}
            className='bg-pink-50'
          >
            <div className='text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
              <Heart
                color='red'
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
              />
              {currentHeartHealth?.avgRestingHR ?? 0} Bpm
            </div>
          </GenericCard>
          <GenericCard
            title='Hydration'
            description={` ${(
              (hydration?.goal ?? 3) - (hydration?.current ?? 0)
            ).toLocaleString()} ${hydration?.unit ?? ''} to go`}
            className=' bg-blue-50'
          >
            <div className='text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
              <Droplet
                color='blue'
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
              />
              {`${hydration?.current} ${hydration?.unit}`}
            </div>
          </GenericCard>
          <GenericCard
            title='Calories intake'
            description='Consumed vs Burned'
            className=' bg-orange-50'
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Flame
                color='orange'
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
              />
              {`${(calories?.consumed ?? 0) - (calories?.burned ?? 0)} ${
                calories?.unit ?? ''
              }`}
            </div>
          </GenericCard>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
          {/* Charts */}
          <GenericCard
            title='Daily workout'
            description='% of achieved target'
            className='col-span-1 '
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <DailyWorkoutChart data={currentWorkout} />
            </div>
          </GenericCard>

          <GenericCard
            title='Sleep efficiency'
            description='How well did you sleep?'
            className='col-span-1 '
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <SleepEfficiency data={sleepEfficiency?.metrics} />
            </div>
          </GenericCard>
          <GenericCard
            title='Current heart rate'
            description='Time in each HR zone'
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <HeartRateChart data={currentHeartHealth?.zones ?? []} />
            </div>
          </GenericCard>

          <GenericCard title='Step activity' className='col-span-1'>
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <StepsChart data={stepsData} />
            </div>
          </GenericCard>

          <GenericCard
            title='Average resting heart rate'
            description='Heart Rate Over Time'
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <AvgRestingHRChart data={avgRestingHRData ?? []} />
            </div>
          </GenericCard>

          <GenericCard
            title='Sleep stages'
            description='The length of REM or Deep sleep?'
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <SleepStagesChart data={sleepStagesData} />
            </div>
          </GenericCard>
          <GenericCard
            title='Weight trend'
            description='Body weight over time'
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <WeightChart data={weightData} />
            </div>
          </GenericCard>

          <GenericCard
            title='VO2 Max trend'
            description='VO2 Max over time'
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <VO2MaxChart data={vo2MaxData} />
            </div>
          </GenericCard>
          <GenericCard
            title='Calories vs workout vs weight'
            description=''
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <CaloriesWorkoutWeight />
            </div>
          </GenericCard>
          <GenericCard
            title='Body fat '
            description='Percentage per body area'
            className='col-span-1'
          >
            <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
              <BodyFatChart data={fitnessData.bodyFat} />
            </div>
          </GenericCard>
        </div>
      </div>
    </main>
  );
}
