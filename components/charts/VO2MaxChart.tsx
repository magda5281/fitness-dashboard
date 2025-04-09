'use client';

import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { VO2Max } from '@/types';
import { use } from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
} from 'recharts';

export const VO2MaxChart = ({ data }: { data: VO2Max }) => {
  const isMobile = useIsMobile(768);
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ScatterChart
        margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 10 : 20 }}
      >
        <XAxis
          dataKey='date'
          name='Date'
          tick={{ fontSize: 'clamp(0.5rem, 2vw, 0.75rem)' }}
          interval={0}
          minTickGap={0}
          angle={-45}
          textAnchor='end'
        />
        <YAxis
          dataKey='value'
          name='VO2 Max'
          tick={{ fontSize: 8 }}
          interval={0}
          width={40}
        />

        {/* ZAxis can be used to vary the size of the dots,
            but here we set a static range if you don’t need it */}
        <ZAxis range={[60, 400]} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            fontSize: 'clamp(0.75rem, 1vw, 1rem)',
            padding: 'clamp(4px, 1vw, 8px)',
            color: '#333',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
          formatter={(value: number, name: string) => [`${value} `, name]}
        />

        <Scatter name='VO2 Max' data={data} fill='#8884d8' shape='diamond' />
      </ScatterChart>
    </ResponsiveContainer>
  );
};
