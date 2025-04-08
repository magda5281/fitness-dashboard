'use client';

import { useIsMobile } from '@/lib/hooks/useIsMobile';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  ResponsiveContainer,
} from 'recharts';

export const AvgRestingHRChart = ({
  data,
}: {
  data: {
    date: string;
    avgRestingHR: number;
  }[];
}) => {
  const isMobile = useIsMobile(768);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: isMobile ? 10 : 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='date'
          tick={{ fontSize: 'clamp(0.5rem, 2vw, 0.75rem)' }}
          interval={0}
          minTickGap={0}
          angle={-45}
          textAnchor='end'
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
        <Line type='monotone' dataKey='avgRestingHR' stroke='#8884d8' />
      </LineChart>
    </ResponsiveContainer>
  );
};
