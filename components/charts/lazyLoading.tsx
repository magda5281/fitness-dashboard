'use client';
import dynamic from 'next/dynamic';
import { ChartSkeleton } from '../skeletons/chartSkeleton';
import { ComponentType } from 'react';
import {
  BodyFat,
  HeartRateZone,
  StepsData,
  VO2Max,
  WeightTrend,
  Workout,
} from '@/types';

// Define prop types for each chart
type ChartProps = {
  StepsChart: { data: StepsData };
  DailyWorkoutChart: { data: Workout | undefined };
  HeartRateChart: { data: HeartRateZone };
  SleepEfficiency: {
    data:
      | {
          type: 'duration' | 'efficiency' | 'latency';
          value: number;
          unit: string;
          ideal?: number;
        }[]
      | undefined;
  };
  SleepStagesChart: {
    data: {
      date: string;
      awake: number;
      light: number;
      deep: number;
      rem: number;
    }[];
  };
  AvgRestingHRChart: {
    data: {
      date: string;
      avgRestingHR: number;
    }[];
  };
  WeightChart: { data: WeightTrend };
  VO2MaxChart: { data: VO2Max };
  BodyFatChart: { data: BodyFat };
  // Add other chart props here
};

// Define chart names
type ChartName = keyof ChartProps;

// Define chart components
const chartComponents: {
  [K in ChartName]: ComponentType<ChartProps[K]>;
} = {
  StepsChart: dynamic(() => import('./stepsChart'), {
    loading: () => <ChartSkeleton />,
  }),
  DailyWorkoutChart: dynamic(() => import('./workoutChart'), {
    loading: () => <ChartSkeleton />,
  }),
  HeartRateChart: dynamic(() => import('./heartRateChart'), {
    loading: () => <ChartSkeleton />,
  }),
  SleepEfficiency: dynamic(() => import('./sleepEfficiency'), {
    loading: () => <ChartSkeleton />,
  }),
  SleepStagesChart: dynamic(() => import('./sleepStagesChart'), {
    loading: () => <ChartSkeleton />,
  }),
  AvgRestingHRChart: dynamic(() => import('./avgRestingHRChart'), {
    loading: () => <ChartSkeleton />,
  }),
  WeightChart: dynamic(() => import('./weightChart'), {
    loading: () => <ChartSkeleton />,
  }),
  VO2MaxChart: dynamic(() => import('./VO2MaxChart'), {
    loading: () => <ChartSkeleton />,
  }),
  BodyFatChart: dynamic(() => import('./bodyFat'), {
    loading: () => <ChartSkeleton />,
  }),
};

export function LazyChart<T extends ChartName>({
  name,
  ...props
}: { name: T } & ChartProps[T]) {
  const Chart = chartComponents[name] as ComponentType<ChartProps[T]>;
  return <Chart {...(props as ChartProps[T])} />;
}
