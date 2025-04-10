'use client';

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
} from 'recharts';

import type { Workout } from '@/types';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import {
  CHART_LEGEND_STYLES,
  CHART_TOOLTIP_STYLES,
} from '@/lib/constants/chartStyles';

interface RadialDataItem {
  name: string;
  value: number;
  fill: string;
}

export default function DailyWorkoutChart({
  data,
}: {
  data: Workout | undefined;
}) {
  if (!data) {
    return <div>No workout data available</div>;
  }

  const radialData: RadialDataItem[] = [
    {
      name: 'Cardio',
      value: Math.min((data.cardio / data.targets.cardio) * 100, 100),
      fill: 'var(--data-red)',
    },
    {
      name: 'Strength',
      value: Math.min((data.strength / data.targets.strength) * 100, 100),
      fill: 'var(--data-green)',
    },
    {
      name: 'Yoga',
      value: Math.min((data.yoga / data.targets.yoga) * 100, 100),
      fill: 'var(--data-yellow)',
    },
  ];

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadialBarChart
        cx='50%'
        cy='50%'
        innerRadius='30%'
        outerRadius='100%'
        data={radialData}
        startAngle={90}
        endAngle={-270}
      >
        <RadialBar
          minAngle={15}
          background
          clockWise
          dataKey='value'
          label={{
            fontSize: 'clamp(0.5rem, 2vw, 0.75rem)',
            position: 'insideStart',
            fill: '#000',
            formatter: (value: number) => `${value.toFixed(0)} %`,
          }}
        />
        <Legend
          iconSize={10}
          wrapperStyle={{ ...CHART_LEGEND_STYLES.wrapperStyle }}
        />
        <Tooltip
          {...CHART_TOOLTIP_STYLES}
          formatter={(value: ValueType, name: NameType, entry: any) => {
            // Type assertion since we know our data structure
            const payload = entry.payload as RadialDataItem;
            return [`${Number(value).toFixed(0)} %`, payload.name];
          }}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}
