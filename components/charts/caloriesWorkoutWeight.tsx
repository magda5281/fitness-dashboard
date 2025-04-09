'use client';

import {
  CHART_TOOLTIP_STYLES,
  CHART_X_AXIS_STYLES,
  CHART_Y_AXIS_STYLES,
} from '@/lib/constants/chartStyles';
import React from 'react';
import {
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

//mock data
// This data simulates a fitness tracking application, showing daily net calories, workout minutes, and weight.
const data = [
  { date: '01/04/25', netCalories: 300, workoutMinutes: 60, weight: 75 },
  { date: '02/04/25', netCalories: -300, workoutMinutes: 30, weight: 74.5 },
  { date: '03/04/25', netCalories: 0, workoutMinutes: 45, weight: 74.8 },
  { date: '04/04/25', netCalories: 400, workoutMinutes: 50, weight: 74.2 },
  { date: '05/04/25', netCalories: 200, workoutMinutes: 55, weight: 74 },
  { date: '06/04/25', netCalories: 200, workoutMinutes: 40, weight: 73.8 },
  { date: '07/04/25', netCalories: -100, workoutMinutes: 35, weight: 73.5 },
];

export const CaloriesWorkoutWeight = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ComposedChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          bottom: 30,
          left: 0,
        }}
      >
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='date' {...CHART_X_AXIS_STYLES} />

        <YAxis
          yAxisId='left'
          label={{
            value: 'Calories / Workout (min)',
            angle: -90,
            textAnchor: 'middle',
            dx: -10,
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
          }}
          tickSize={1}
          {...CHART_Y_AXIS_STYLES}
        />

        <YAxis
          yAxisId='right'
          orientation='right'
          tickSize={1}
          label={{
            value: 'Weight (kg)',
            angle: 90,
            textAnchor: 'middle',
            dx: 10,
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
          }}
          {...CHART_Y_AXIS_STYLES}
        />
        <Tooltip {...CHART_TOOLTIP_STYLES} />
        <Legend
          wrapperStyle={{
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
            bottom: 0,
          }}
        />
        {/* Area chart for net calories */}
        <Area
          yAxisId='left'
          type='monotone'
          dataKey='netCalories'
          stroke='var(--data-violet)'
          fill='var(--data-violet)'
          name='Calorie Balance'
        />
        {/* Bar chart for workout minutes */}
        <Bar
          yAxisId='left'
          dataKey='workoutMinutes'
          fill='var(--data-green)'
          name='Workout Minutes'
        />
        {/* Line chart for weight with secondary axis */}
        <Line
          yAxisId='right'
          type='monotone'
          dataKey='weight'
          stroke='var(--data-red)'
          fill='var(--data-red)'
          strokeWidth={2}
          name='Weight'
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
