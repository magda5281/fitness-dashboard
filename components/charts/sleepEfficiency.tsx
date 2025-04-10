'use client';

import { CHART_LEGEND_STYLES } from '@/lib/constants/chartStyles';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function SleepEfficiency({
  data,
}: {
  data:
    | {
        type: 'duration' | 'efficiency' | 'latency';
        value: number;
        unit: string;
        ideal?: number;
      }[]
    | undefined;
}) {
  // Custom tick renderer for displaying type and unit together
  const renderCustomTick = (props: any) => {
    const { x, y, payload, index } = props;
    // Get the corresponding unit from the data array
    // Make sure `data` is available in this scope (from props)
    const unit = data ? data[index]?.unit : '';
    const type = data ? data[index]?.type : '';

    return (
      <text
        x={x}
        y={type !== 'duration' ? y + 12 : y}
        textAnchor='middle'
        fill='#333'
        className='text-xs md:text-base'
      >
        {payload.value} ({unit})
      </text>
    );
  };

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey='type'
          tick={renderCustomTick}
          axisLine={false}
          tickLine={false}
        />
        <Radar
          name='Actual'
          dataKey='value'
          stroke='var(--data-violet)'
          fill='var(--data-violet)'
          fillOpacity={0.6}
        />
        <Radar
          name='Ideal'
          dataKey='ideal'
          stroke='var(--data-green)'
          fill='var(--data-green)'
          fillOpacity={0.3}
        />
        <Legend wrapperStyle={{ ...CHART_LEGEND_STYLES.wrapperStyle }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
