import { FitnessData } from '@/types';
import { findByDate, formatDate } from '@/lib/utils';
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
      date: '2025-04-08',
      zones: [
        { name: 'Resting', value: 300, minBpm: 50, maxBpm: 70 },
        { name: 'Fat Burn', value: 15, minBpm: 70, maxBpm: 120 },
        { name: 'Cardio', value: 95, minBpm: 120, maxBpm: 150 },
        { name: 'Peak', value: 40, minBpm: 150, maxBpm: 200 },
      ],
      avgRestingHR: 62,
    },
    {
      date: today,
      zones: [
        { name: 'Resting', value: 220, minBpm: 50, maxBpm: 70 },
        { name: 'Fat Burn', value: 100, minBpm: 70, maxBpm: 120 },
        { name: 'Cardio', value: 65, minBpm: 120, maxBpm: 150 },
        { name: 'Peak', value: 40, minBpm: 150, maxBpm: 200 },
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
      targets: { cardio: 30, strength: 60, yoga: 20 },
    },
  ],

  calories: [
    { date: '2025-04-01', consumed: 2200, burned: 1900, unit: 'kcal' },
    { date: '2025-04-02', consumed: 1800, burned: 2100, unit: 'kcal' },
    { date: today, consumed: 1800, burned: 2100, unit: 'kcal' },
  ],

  hydration: [
    { date: '2025-04-01', current: 1.8, goal: 2.5, unit: 'liters' },
    { date: '2025-04-02', current: 2.2, goal: 2.5, unit: 'liters' },
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
  const random = Math.random();

  // Return mock data with 10% chance of error
  if (random > 0.9) {
    throw new Error('Failed to fetch fitness data');
  }

  return fitnessData;
}

// Get only KPI-related data
export async function getKpiData() {
  const data = await getFitnessData();
  const today = new Date().toISOString().split('T')[0];

  return {
    steps: {
      current: findByDate(data.steps, today),
      last: data.steps[data.steps.length - 2],
    },
    heartRate: {
      current: findByDate(data.heartRateData, today),
      last: data.heartRateData[data.heartRateData.length - 2],
    },
    hydration: findByDate(data.hydration, today),
    calories: findByDate(data.calories, today),
  };
}

// Get data for charts
export async function getChartsData() {
  const data = await getFitnessData();
  const today = new Date().toISOString().split('T')[0];
  const heartRateData = data.heartRateData;

  return {
    stepsData: data.steps.map((item) => ({
      date: formatDate(item.date),
      steps: item.steps,
    })),

    avgRestingHRData: heartRateData.map((item) => ({
      date: formatDate(item.date),
      avgRestingHR: item.avgRestingHR,
    })),
    currentHeartHealth: findByDate(heartRateData, today),
    sleepData: data.sleepQuality.map((item) => {
      const transformed = {
        date: formatDate(item.date),
        awake: 0,
        light: 0,
        deep: 0,
        rem: 0,
      };

      item.stages.forEach((stageObj) => {
        transformed[stageObj.stage] = stageObj.minutes;
      });
      return transformed;
    }),
    weightData: data.weightTrend.map((item) => ({
      date: formatDate(item.date),
      value: item.value,
      unit: item.unit,
    })),
    vo2MaxData: data.vo2max.map((item) => ({
      ...item,
      date: formatDate(item.date),
    })),
    currentWorkout: findByDate(data.workouts, today),
    sleepEfficiency: findByDate(data.sleepQuality, today),
    bodyFat: data.bodyFat,
  };
}

// Alternative: Get specific chart data
export async function getChartData<T extends keyof FitnessData>(
  chart: T
): Promise<FitnessData[T]> {
  await sleep(300);
  return fitnessData[chart];
}
