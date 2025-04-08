'use client';
import { formatDate } from '@/lib/utils';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
  LabelList,
} from 'recharts';

interface StepsChartProps {
  data: { date: string; steps: number }[];
}

export function StepsChart({ data }: StepsChartProps) {
  const formattedData = data.map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={formattedData}
        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        layout='horizontal'
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis
          dataKey='date'
          tick={{ fontSize: 8 }}
          interval={0}
          minTickGap={0}
          angle={-45} // Rotate labels
          textAnchor='end'
        />
        <YAxis tick={{ fontSize: 8 }} interval={0} width={40} />
        <Tooltip />
        <Bar dataKey='steps' fill='#8884d8' radius={[4, 4, 0, 0]}>
          <LabelList dataKey='steps' position='top' fontSize={8} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
