import dynamic from 'next/dynamic';
import { ChartSkeleton } from './skeletons/chartSkeleton';
import React from 'react';
import type { StepsData } from '@/types';

// Define a type alias for your chart components.
type ChartComponents = {
  StepsChart: React.FC<{ data: StepsData }>;
  // Add additional charts here as needed.
};

// Use an explicit type assertion so that TS knows the dynamically imported
// component is a React.FC<{ data: StepsData }>.
// Note: We chain a `.then(mod => mod.default)` so that we're returning the default export.
const chartComponents: ChartComponents = {
  StepsChart: dynamic(
    () => import('./charts/stepsChart').then((mod) => mod.default),
    { loading: () => <ChartSkeleton /> }
  ) as React.FC<{ data: StepsData }>,
  // You can add additional charts in a similar way:
  // DailyWorkoutChart: dynamic(
  //   () =>
  //     import('./charts/workoutChart').then((mod) => mod.DailyWorkoutChart),
  //   { loading: () => <ChartSkeleton /> }
  // ) as React.FC<{ data: Workout | undefined }>,
};

// Now make LazyChart generic over keys of ChartComponents to infer prop types.
export function LazyChart<K extends keyof ChartComponents>({
  name,
  ...props
}: { name: K } & React.ComponentProps<ChartComponents[K]>) {
  const Chart = chartComponents[name];
  return <Chart {...props} />;
}
