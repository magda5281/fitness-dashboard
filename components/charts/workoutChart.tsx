'use client';

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from 'recharts';

import type { Workout } from '@/types';

export const DailyWorkoutChart = ({ data }: { data: Workout | undefined }) => {
  // Select the day you want to display—for example, the first day.

  // Calculate the percentage of the target achieved for each workout type.
  // We cap the value at 100 (i.e. 100%) for gauge purposes.
  if (!data) {
    return <div>No workout data available </div>;
  }
  const radialData = [
    {
      name: 'Cardio',
      value: Math.min((data?.cardio / data?.targets.cardio) * 100, 100),
      fill: '#8884d8',
    },
    {
      name: 'Strength',
      value: Math.min((data.strength / data.targets.strength) * 100, 100),
      fill: '#82ca9d',
    },
    {
      name: 'Yoga',
      value: Math.min((data.yoga / data.targets.yoga) * 100, 100),
      fill: '#ffc658',
    },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadialBarChart
        cx='50%'
        cy='50%'
        innerRadius='30%'
        outerRadius='100%'
        data={radialData}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          minAngle={15}
          background
          clockWise
          dataKey='value'
          label={{
            fontSize: 'clamp(0.5rem, 2vw, 0.75rem)',
            position: 'insideStart',
            fill: '#000',
            formatter: (value: number) => `${value.toFixed(0)} %`,
          }}
        />
        <Legend
          iconSize={10}
          wrapperStyle={{
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            padding: 'clamp(4px, 2vw, 8px)',
          }}
        />
        <Tooltip
          contentStyle={{
            fontSize: 'clamp(0.75rem, 1vw, 1rem)',
            padding: 'clamp(4px, 1vw, 8px)',
            color: '#333',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
          formatter={(value: number, name: string, props: any) => {
            return [`${value.toFixed(0)} % `, `${props?.payload?.name} `];
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
