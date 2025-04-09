'use client';

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
        <XAxis
          dataKey='date'
          tick={{ fontSize: 'clamp(0.5rem, 2vw, 0.75rem)' }}
          interval={0}
          minTickGap={0}
          angle={-45}
          textAnchor='end'
        />
        {/* Left Y-axis handles netCalories & workoutMinutes */}
        <YAxis
          yAxisId='left'
          label={{
            value: 'Calories / Workout (min)',
            angle: -90,
            textAnchor: 'middle',
            // position: 'insideLeft',
            dx: -10,
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
          }}
          tick={{ fontSize: 8 }}
          interval={0}
          // width={40}
        />
        {/* Right Y-axis for weight */}
        <YAxis
          yAxisId='right'
          orientation='right'
          label={{
            value: 'Weight (kg)',
            angle: 90,
            textAnchor: 'middle',
            dx: 10,
            fontSize: 'clamp(0.75rem, 2vw, 1rem)',
          }}
          tick={{ fontSize: 8 }}
          interval={0}
          width={40}
        />
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
          stroke='#8884d8'
          fill='#8884d8'
          name='Calorie Balance'
        />
        {/* Bar chart for workout minutes */}
        <Bar
          yAxisId='left'
          dataKey='workoutMinutes'
          barSize={20}
          fill='#413ea0'
          name='Workout Minutes'
        />
        {/* Line chart for weight with secondary axis */}
        <Line
          yAxisId='right'
          type='monotone'
          dataKey='weight'
          stroke='#ff7300'
          name='Weight'
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
