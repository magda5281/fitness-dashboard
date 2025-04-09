import { FitnessData } from '@/types';
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
const today = new Date().toISOString().split('T')[0];

export const fitnessData: FitnessData = {
  steps: [
    { date: '2025-04-01', steps: 8432 },
    { date: '2025-04-02', steps: 7215 },
    { date: '2025-04-03', steps: 9321 },
    { date: '2025-04-04', steps: 6543 },
    { date: '2025-04-05', steps: 8765 },
    { date: '2025-04-06', steps: 10243 },
    { date: '2025-04-07', steps: 5432 },
    { date: yesterday, steps: 6772 },
    { date: today, steps: 5772 },
  ],

  heartRateData: [
    {
      date: '2025-04-07',
      zones: [
        { name: 'Resting', value: 320, minBpm: 50, maxBpm: 70 },
        { name: 'Fat Burn', value: 145, minBpm: 70, maxBpm: 120 },
        { name: 'Cardio', value: 85, minBpm: 120, maxBpm: 150 },
        { name: 'Peak', value: 30, minBpm: 150, maxBpm: 200 },
      ],
      avgRestingHR: 62,
    },
    {
      date: today,
      zones: [
        { name: 'Resting', value: 320, minBpm: 50, maxBpm: 70 },
        { name: 'Fat Burn', value: 145, minBpm: 70, maxBpm: 120 },
        { name: 'Cardio', value: 85, minBpm: 120, maxBpm: 150 },
        { name: 'Peak', value: 30, minBpm: 150, maxBpm: 200 },
      ],
      avgRestingHR: 55,
    },
  ],

  sleepQuality: [
    {
      date: yesterday,
      startTime: '23:15',
      endTime: '07:30',
      stages: [
        { stage: 'awake', minutes: 15 },
        { stage: 'light', minutes: 300 },
        { stage: 'deep', minutes: 120 },
        { stage: 'rem', minutes: 100 },
      ],
      metrics: [
        { type: 'duration', value: 7.5, unit: 'hrs', ideal: 8 },
        { type: 'efficiency', value: 90, unit: '%', ideal: 85 },
        { type: 'latency', value: 15, unit: 'min', ideal: 20 },
      ],
    },
    {
      date: today,
      startTime: '23:15',
      endTime: '07:30',
      stages: [
        { stage: 'awake', minutes: 15 },
        { stage: 'light', minutes: 300 },
        { stage: 'deep', minutes: 120 },
        { stage: 'rem', minutes: 100 },
      ],
      metrics: [
        { type: 'duration', value: 7.5, unit: 'hrs', ideal: 8 },
        { type: 'efficiency', value: 90, unit: '%', ideal: 85 },
        { type: 'latency', value: 15, unit: 'min', ideal: 20 },
      ],
    },
  ],

  weightTrend: [
    { date: '2025-01-01', value: 75.3, unit: 'kg' },
    { date: '2025-02-01', value: 66.3, unit: 'kg' },
    { date: '2025-03-01', value: 63.3, unit: 'kg' },
    { date: yesterday, value: 74.1, unit: 'kg' },
    { date: today, value: 73.2, unit: 'kg' },
  ],

  workouts: [
    {
      date: '2025-01-07',
      cardio: 120,
      strength: 90,
      yoga: 60,
      unit: 'min',
      targets: { cardio: 60, strength: 45, yoga: 30 },
    },
    {
      date: '2025-01-08',
      cardio: 20,
      strength: 50,
      yoga: 50,
      unit: 'min',
      targets: { cardio: 40, strength: 50, yoga: 60 },
    },
    {
      date: today,
      cardio: 20,
      strength: 50,
      yoga: 50,
      unit: 'min',
      targets: { cardio: 40, strength: 50, yoga: 60 },
    },
  ],

  calories: [
    { date: '2023-06-01', consumed: 2200, burned: 1900, unit: 'kcal' },
    { date: '2023-06-02', consumed: 1800, burned: 2100, unit: 'kcal' },
    { date: today, consumed: 1800, burned: 2100, unit: 'kcal' },
  ],

  hydration: [
    { date: '2023-06-01', current: 1.8, goal: 2.5, unit: 'liters' },
    { date: '2023-06-02', current: 2.2, goal: 2.5, unit: 'liters' },
    { date: today, current: 2.2, goal: 2.5, unit: 'liters' },
  ],

  vo2max: [
    { date: '2023-01-01', value: 38, unit: 'ml/kg/min', workout: 'Run' },
    { date: '2023-02-01', value: 40, unit: 'ml/kg/min', workout: 'Cycle' },
    { date: '2023-03-01', value: 39, unit: 'ml/kg/min', workout: 'Swim' },
    { date: '2023-04-01', value: 41, unit: 'ml/kg/min', workout: 'Run' },
    { date: '2023-05-01', value: 42, unit: 'ml/kg/min', workout: 'Cycle' },
    { date: '2023-06-01', value: 43, unit: 'ml/kg/min', workout: 'Cycle' },
    { date: '2023-07-01', value: 50, unit: 'ml/kg/min', workout: 'Run' },
  ],

  bodyFat: [
    { name: 'Arms', value: 17 },
    { name: 'Chest', value: 15 },
    { name: 'Core', value: 22 },
    { name: 'Legs', value: 16 },
    { name: 'Back', value: 10.3 },
  ],
};

// Simulate network delay (optional)
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFitnessData(): Promise<FitnessData> {
  // Simulate API delay (500ms - 1.5s)
  await sleep(500 + Math.random() * 1000);

  // Return mock data with 10% chance of error
  if (Math.random() > 0.9) {
    throw new Error('Failed to fetch fitness data');
  }

  return fitnessData;
}

// Alternative: Get specific chart data
export async function getChartData<T extends keyof FitnessData>(
  chart: T
): Promise<FitnessData[T]> {
  await sleep(300);
  return fitnessData[chart];
}
