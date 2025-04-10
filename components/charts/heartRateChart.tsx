'use client';

import {
  CHART_LEGEND_STYLES,
  CHART_TOOLTIP_STYLES,
} from '@/lib/constants/chartStyles';
import { HeartRateZone } from '@/types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

export default function HeartRateChart({ data }: { data: HeartRateZone }) {
  const COLORS = [
    'var(--data-blue)',
    'var(--data-green)',
    'var(--data-yellow)',
    'var(--data-red)',
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <PieChart>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          labelLine={false}
          outerRadius='100%'
          fill='#8884d8'
          dataKey='value'
          label={renderCustomizedLabel}
        >
          {data?.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [
            `${value} min`,
            `${name} (${data.find((z) => z.name === name)?.minBpm}-${
              data.find((z) => z.name === name)?.maxBpm
            }bpm)`,
          ]}
          {...CHART_TOOLTIP_STYLES}
        />
        <Legend
          layout='vertical'
          verticalAlign='middle'
          align='right'
          iconType='circle'
          iconSize={10}
          wrapperStyle={{ ...CHART_LEGEND_STYLES.wrapperStyle }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
