'use client';

import { HeartRateZone } from '@/types';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

export const HeartRateChart = ({ data }: { data: HeartRateZone }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
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
          {data?.map((entry, index) => (
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
          contentStyle={{
            fontSize: 'clamp(0.75rem, 1vw, 1rem)',
            padding: 'clamp(4px, 1vw, 8px)',
            color: '#333',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
          }}
          //itemStyle={{ color: '#666' }} // Individual item text color
        />
        <Legend
          layout='vertical'
          verticalAlign='middle'
          align='right'
          iconType='circle'
          iconSize={10}
          wrapperStyle={{
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            padding: 'clamp(4px, 2vw, 8px)',
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
