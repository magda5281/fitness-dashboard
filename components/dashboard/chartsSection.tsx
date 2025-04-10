import { CaloriesWorkoutWeight } from '../charts/caloriesWorkoutWeight';
import { GenericCard } from '../genericCard';
import { LazyChart } from '../charts/lazyLoading';
import {
  BodyFat,
  HeartRateZone,
  StepsData,
  VO2Max,
  WeightTrend,
  Workout,
} from '@/types';
import { ScrollArea } from '@radix-ui/react-scroll-area';

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
  currentWorkout?: Workout;
  sleepEfficiency:
    | {
        date: string;
        startTime: string;
        endTime: string;
        stages: {
          stage: 'awake' | 'light' | 'deep' | 'rem';
          minutes: number;
        }[];
        metrics: {
          type: 'duration' | 'efficiency' | 'latency';
          value: number;
          unit: string;
          ideal?: number;
        }[];
      }
    | undefined;
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
    <ScrollArea className='max-h-[calc(100vh-350px)] overflow-y-auto w-full rounded-lg border shadow-2xl'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 p-2 md:p-4'>
        <GenericCard
          title='Daily workout'
          description='% of achieved target'
          className='col-span-1 '
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='DailyWorkoutChart' data={currentWorkout} />
          </div>
        </GenericCard>
        <GenericCard
          title='Sleep efficiency'
          description='How well did you sleep?'
          className='col-span-1 '
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='SleepEfficiency' data={sleepEfficiency?.metrics} />
          </div>
        </GenericCard>
        <GenericCard
          title='Current heart rate'
          description='Time in each HR zone'
          className='col-span-1'
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart
              name='HeartRateChart'
              data={currentHeartHealth?.zones ?? []}
            />
          </div>
        </GenericCard>
        <GenericCard title='Step activity' className='col-span-1 lg:col-span-2'>
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='StepsChart' data={stepsData} />
          </div>
        </GenericCard>
        <GenericCard
          title='Average resting heart rate'
          description='Heart Rate Over Time'
          className='col-span-1'
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='AvgRestingHRChart' data={avgRestingHRData ?? []} />
          </div>
        </GenericCard>
        <GenericCard
          title='Sleep stages'
          description='The length of REM or Deep sleep?'
          className='col-span-1'
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='SleepStagesChart' data={sleepData} />
          </div>
        </GenericCard>
        <GenericCard
          title='Weight trend'
          description='Body weight over time'
          className='col-span-1'
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='WeightChart' data={weightData} />
          </div>
        </GenericCard>
        <GenericCard
          title='VO2 Max trend'
          description='VO2 Max over time'
          className='col-span-1'
        >
          <div className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px]'>
            <LazyChart name='VO2MaxChart' data={vo2MaxData} />
          </div>
        </GenericCard>
        <GenericCard
          title='Calories vs workout vs weight'
          description=''
          className='col-span-1 lg:col-span-2'
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
            <LazyChart name='BodyFatChart' data={bodyFat} />
          </div>
        </GenericCard>
      </div>
    </ScrollArea>
  );
};
