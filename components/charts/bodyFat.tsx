'use client';

import { ResponsiveContainer, Treemap, Tooltip } from 'recharts';

export const BodyFatChart = ({
  data,
}: {
  data: {
    name: string;
    value: number;
  }[];
}) => {
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
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: 4,
            fontSize: 'clamp(0.75rem, 1vw, 1rem)',
            padding: 'clamp(4px, 1vw, 8px)',
          }}
          formatter={(value: number, name: string, props: any) => ` ${value}%`}
        />
      </Treemap>
    </ResponsiveContainer>
  );
};
