import { AvgRestingHRChart } from './charts/avgRestingHRChart';
import { BodyFatChart } from './charts/bodyFat';
import { CaloriesWorkoutWeight } from './charts/caloriesWorkoutWeight';
import { HeartRateChart } from './charts/heartRateChart';
import { SleepEfficiency } from './charts/sleepEfficiency';
import { SleepStagesChart } from './charts/sleepStagesChart';
import { StepsChart } from './charts/stepsChart';
import { VO2MaxChart } from './charts/VO2MaxChart';
import { WeightChart } from './charts/weightChart';
import { DailyWorkoutChart } from './charts/workoutChart';
import { GenericCard } from './genericCard';

import {
  BodyFat,
  HeartRateZone,
  StepsData,
  VO2Max,
  WeightTrend,
} from '@/types';

interface ChartsSectionProps {
  stepsData: StepsData;
  sleepData: {
    date: string;
    awake: number;
    light: number;
    deep: number;
    rem: number;
  }[];
  weightData: WeightTrend;
  vo2MaxData: VO2Max;
  currentWorkout: any;
  sleepEfficiency: any;
  bodyFat: BodyFat;
  avgRestingHRData: { date: string; avgRestingHR: number }[];
  currentHeartHealth:
    | {
        date: string;
        zones: HeartRateZone;
        avgRestingHR: number;
      }
    | undefined;
}
export const ChartsSection = ({
  stepsData,
  avgRestingHRData,
  sleepData,
  weightData,
  vo2MaxData,
  currentWorkout,
  sleepEfficiency,
  bodyFat,
  currentHeartHealth,
}: ChartsSectionProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
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
          <SleepStagesChart data={sleepData} />
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
          <BodyFatChart data={bodyFat} />
        </div>
      </GenericCard>
    </div>
  );
};
