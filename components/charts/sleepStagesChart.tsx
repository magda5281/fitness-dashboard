'use client';

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';

type SleepData = {
  date: string;
  awake: number;
  light: number;
  deep: number;
  rem: number;
}[];

export const SleepStagesChart = ({ data }: { data: SleepData }) => {
  // Array of sleep stage keys
  const sleepStages = ['awake', 'light', 'deep', 'rem'];

  // Map each stage key to a color
  const colorMap: { [key: string]: string } = {
    awake: '#ffc658',
    light: '#8884d8',
    deep: '#82ca9d',
    rem: '#d0ed57',
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 10 }}>
        <XAxis
          dataKey='date'
          tick={{ fontSize: 'clamp(0.5rem, 2vw, 0.75rem)' }}
          interval={0}
          minTickGap={0}
        />
        <YAxis tick={{ fontSize: 8 }} interval={0} width={40} />
        <Tooltip
          contentStyle={{
            fontSize: 'clamp(0.75rem, 1vw, 1rem)',
            padding: 'clamp(4px, 1vw, 8px)',
            color: '#333',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
        />
        <Legend
          wrapperStyle={{
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            padding: 'clamp(4px, 2vw, 8px)',
          }}
        />
        {/* Dynamically render Bar elements for each sleep stage */}
        {sleepStages.map((stage) => (
          <Bar
            key={stage}
            dataKey={stage}
            stackId='sleep'
            fill={colorMap[stage]}
            label={{
              position: 'middle',
              fontSize: 'clamp(0.5rem, 2vw, 0.75rem)',
              formatter: (value: number) => `${value} min`,
              fill: 'text-black',
            }}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};
