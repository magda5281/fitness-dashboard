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
import {
  CHART_TOOLTIP_STYLES,
  CHART_X_AXIS_STYLES,
  CHART_Y_AXIS_STYLES,
} from '@/lib/constants/chartStyles';
export default function AvgRestingHRChart({
  data,
}: {
  data: {
    date: string;
    avgRestingHR: number;
  }[];
}) {
  const isMobile = useIsMobile(768);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: isMobile ? 10 : 20 }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' {...CHART_X_AXIS_STYLES} />
        <YAxis {...CHART_Y_AXIS_STYLES} />
        <Tooltip {...CHART_TOOLTIP_STYLES} />
        <Line
          type='monotone'
          dataKey='avgRestingHR'
          stroke='var(--data-red)'
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
