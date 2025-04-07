// lib/data.ts
export const fitnessData = {
  // 1. Steps (Bar Chart)
  steps: [
    { day: 'Mon', steps: 8432 },
    { day: 'Tue', steps: 7215 },
    { day: 'Wed', steps: 9321 },
    { day: 'Thu', steps: 6543 },
    { day: 'Fri', steps: 8765 },
    { day: 'Sat', steps: 10243 },
    { day: 'Sun', steps: 5432 },
  ],

  // 2. Heart Rate Zones (Pie Chart)
  heartRateZones: [
    { name: 'Resting', value: 320, color: '#8884d8' },
    { name: 'Fat Burn', value: 145, color: '#83a6ed' },
    { name: 'Cardio', value: 85, color: '#8dd1e1' },
    { name: 'Peak', value: 30, color: '#82ca9d' },
  ],

  // 3. Sleep Quality (Radar Chart)
  sleepQuality: [
    { metric: 'Duration', score: 85, fullMark: 100 },
    { metric: 'Deep Sleep', score: 70, fullMark: 100 },
    { metric: 'REM', score: 65, fullMark: 100 },
    { metric: 'Efficiency', score: 90, fullMark: 100 },
    { metric: 'Latency', score: 75, fullMark: 100 },
  ],

  // 4. Weight Trend (Line Chart)
  weightTrend: [
    { date: 'Jan', weight: 165 },
    { date: 'Feb', weight: 163 },
    { date: 'Mar', weight: 161 },
    { date: 'Apr', weight: 159 },
    { date: 'May', weight: 158 },
    { date: 'Jun', weight: 156 },
  ],

  // 5. Workouts (Stacked Bar)
  workouts: [
    { week: 'W1', cardio: 120, strength: 90, yoga: 60 },
    { week: 'W2', cardio: 85, strength: 110, yoga: 45 },
    { week: 'W3', cardio: 105, strength: 95, yoga: 75 },
    { week: 'W4', cardio: 140, strength: 80, yoga: 50 },
  ],

  // 6. Calories (Area Chart)
  calories: [
    { date: 'Mon', consumed: 2200, burned: 1900 },
    { date: 'Tue', consumed: 1800, burned: 2100 },
    { date: 'Wed', consumed: 2400, burned: 2300 },
    { date: 'Thu', consumed: 2100, burned: 1950 },
    { date: 'Fri', consumed: 2500, burned: 2400 },
    { date: 'Sat', consumed: 2800, burned: 2600 },
    { date: 'Sun', consumed: 2000, burned: 1800 },
  ],

  // 7. Hydration (Gauge)
  hydration: {
    current: 1800,
    goal: 2500,
    unit: 'ml',
  },

  // 8. VO2 Max (Scatter Plot)
  vo2max: [
    { date: 'Jan', value: 38, workout: 'Run' },
    { date: 'Feb', value: 40, workout: 'Cycle' },
    { date: 'Mar', value: 42, workout: 'Swim' },
    { date: 'Apr', value: 41, workout: 'Run' },
    { date: 'May', value: 44, workout: 'HIIT' },
  ],

  // 9. Body Fat (Heatmap)
  bodyFat: [
    { month: 'Jan', region: 'Arms', value: 18.5 },
    { month: 'Jan', region: 'Core', value: 22.1 },
    { month: 'Feb', region: 'Arms', value: 17.8 },
    { month: 'Feb', region: 'Core', value: 21.3 },
    // ... more months/regions
  ],

  // 10. Activity Distribution (Sunburst)
  activityDistribution: {
    name: 'Exercise',
    children: [
      {
        name: 'Cardio',
        children: [
          { name: 'Running', value: 65 },
          { name: 'Cycling', value: 35 },
        ],
      },
      {
        name: 'Strength',
        children: [
          { name: 'Upper Body', value: 40 },
          { name: 'Lower Body', value: 60 },
        ],
      },
    ],
  },
};
