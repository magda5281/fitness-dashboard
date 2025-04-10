'use client';

import {
  CHART_TOOLTIP_STYLES,
  CHART_X_AXIS_STYLES,
  CHART_Y_AXIS_STYLES,
} from '@/lib/constants/chartStyles';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { VO2Max } from '@/types';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
} from 'recharts';

export default function VO2MaxChart({ data }: { data: VO2Max }) {
  const isMobile = useIsMobile(768);
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ScatterChart
        margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 10 : 20 }}
      >
        <XAxis dataKey='date' name='Date' {...CHART_X_AXIS_STYLES} />
        <YAxis dataKey='value' name='VO2 Max' {...CHART_Y_AXIS_STYLES} />

        {/* ZAxis can be used to vary the size of the dots,
            but here we set a static range if you don’t need it */}
        <ZAxis range={[60, 400]} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          {...CHART_TOOLTIP_STYLES}
          formatter={(value: number, name: string) => [`${value} `, name]}
        />

        <Scatter
          name='VO2 Max'
          data={data}
          fill='var(--data-blue)'
          shape='diamond'
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
