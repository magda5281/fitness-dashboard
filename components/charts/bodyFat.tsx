'use client';

import { CHART_TOOLTIP_STYLES } from '@/lib/constants/chartStyles';
import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';

export default function BodyFatChart({
  data,
}: {
  data: {
    name: string;
    value: number;
  }[];
}) {
  const bodyFatData = [
    {
      name: 'Body Fat',
      children: data,
    },
  ];
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <Treemap
        data={data}
        dataKey='value'
        nameKey='name'
        aspectRatio={4 / 3}
        stroke='#fff'
        fill='#8884d8'
      >
        <Tooltip
          {...CHART_TOOLTIP_STYLES}
          formatter={(value: number, name: string, props: any) => ` ${value}%`}
        />
      </Treemap>
    </ResponsiveContainer>
  );
}
