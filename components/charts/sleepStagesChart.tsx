'use client';

import {
  CHART_LEGEND_STYLES,
  CHART_TOOLTIP_STYLES,
} from '@/lib/constants/chartStyles';
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
    awake: 'var(--data-yellow)',
    light: 'var(--data-violet)',
    deep: 'var(--data-green)',
    rem: 'var(--data-light-green)',
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
        <Tooltip {...CHART_TOOLTIP_STYLES} />
        <Legend wrapperStyle={{ ...CHART_LEGEND_STYLES.wrapperStyle }} />

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
              fill: 'text-gray-900',
            }}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};
