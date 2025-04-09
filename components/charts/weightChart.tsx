'use client';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
} from 'recharts';

export const WeightChart = ({
  data,
}: {
  data: {
    date: string;
    value: number;
    unit: string;
  }[];
}) => {
  const isMobile = useIsMobile(768);
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 10 : 20 }}
      >
        <defs>
          <linearGradient id='weightColor' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
          </linearGradient>
        </defs>
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
        <Area
          type='monotone'
          dataKey='value'
          stroke='#8884d8'
          fill='url(#weightColor)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
