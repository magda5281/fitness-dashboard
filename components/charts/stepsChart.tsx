'use client';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { formatDate } from '@/lib/utils';
import type { StepsData } from '@/types';
import { useEffect, useState } from 'react';
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
  const formattedData = data.map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        data={formattedData}
        margin={{ top: 10, right: 0, left: 0, bottom: isMobile ? 10 : 20 }}
        layout='horizontal'
      >
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
        <Bar dataKey='steps' fill='#8884d8' radius={[4, 4, 0, 0]}>
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
