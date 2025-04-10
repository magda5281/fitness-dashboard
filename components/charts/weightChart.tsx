'use client';
import {
  CHART_TOOLTIP_STYLES,
  CHART_X_AXIS_STYLES,
  CHART_Y_AXIS_STYLES,
} from '@/lib/constants/chartStyles';
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

export default function WeightChart({
  data,
}: {
  data: {
    date: string;
    value: number;
    unit: string;
  }[];
}) {
  const isMobile = useIsMobile(768);
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 10 : 20 }}
      >
        <defs>
          <linearGradient id='weightColor' x1='0' y1='0' x2='0' y2='1'>
            <stop
              offset='5%'
              stopColor='var(--data-orange)'
              stopOpacity={0.8}
            />
            <stop offset='95%' stopColor='var(--data-orange)' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' {...CHART_X_AXIS_STYLES} />
        <YAxis {...CHART_Y_AXIS_STYLES} />
        <Tooltip {...CHART_TOOLTIP_STYLES} />
        <Area
          type='monotone'
          dataKey='value'
          stroke='var(--data-orange)'
          fill='url(#weightColor)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
