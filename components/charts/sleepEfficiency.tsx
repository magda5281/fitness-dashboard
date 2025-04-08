'use client';

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export const SleepEfficiency = ({
  data,
}: {
  data: {
    type: 'duration' | 'efficiency' | 'latency';
    value: number;
    unit: string;
    ideal?: number;
  }[];
}) => {
  // Custom tick renderer for displaying type and unit together
  const renderCustomTick = (props: any) => {
    const { x, y, payload, index } = props;
    // Get the corresponding unit from the data array
    // Make sure `data` is available in this scope (from props)
    const unit = data[index]?.unit || '';
    const type = data[index]?.type || '';
    console.log(type);
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
          stroke='#8884d8'
          fill='#8884d8'
          fillOpacity={0.6}
        />
        <Radar
          name='Ideal'
          dataKey='ideal'
          stroke='#82ca9d'
          fill='#82ca9d'
          fillOpacity={0.3}
        />
        <Legend
          wrapperStyle={{
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            padding: 'clamp(4px, 2vw, 8px)',
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
