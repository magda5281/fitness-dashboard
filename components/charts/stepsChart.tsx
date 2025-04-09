'use client';
import {
  CHART_TOOLTIP_STYLES,
  CHART_X_AXIS_STYLES,
  CHART_Y_AXIS_STYLES,
} from '@/lib/constants/chartStyles';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import type { StepsData } from '@/types';

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from 'recharts';

export function StepsChart({ data }: { data: StepsData }) {
  const isMobile = useIsMobile(768);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: isMobile ? 10 : 20 }}
        layout='horizontal'
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' {...CHART_X_AXIS_STYLES} />
        <YAxis {...CHART_Y_AXIS_STYLES} />
        <Tooltip {...CHART_TOOLTIP_STYLES} />
        <Bar dataKey='steps' fill='var(--data-green)' radius={[4, 4, 0, 0]}>
          <LabelList
            dataKey='steps'
            position='top'
            fontSize='clamp(0.5rem, 2vw, 0.75rem)'
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
