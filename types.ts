// 1. Steps
export type StepsData = {
  date: string; // ISO format
  steps: number;
}[];

// 2. Heart Rate Zones
export type HeartRateZone = {
  name: string;
  value: number; // minutes in zone
  minBpm: number;
  maxBpm: number;
}[];

// 3. Sleep Quality

export type SleepData = {
  date: string;
  startTime: string; // "23:15"
  endTime: string; // "07:30"
  stages: {
    stage: 'awake' | 'light' | 'deep' | 'rem';
    minutes: number;
  }[];
  metrics: {
    type: 'duration' | 'efficiency' | 'latency';
    value: number;
    unit: string;
    ideal?: number;
  }[];
}[];

// 4. Weight Trend
export type WeightTrend = {
  date: string; // ISO format
  value: number;
  unit: string;
}[];
// 5. Workouts
export type Workouts = {
  period: string; // "YYYY-MM-DD/YYYY-MM-DD"
  cardio: number;
  strength: number;
  yoga: number;
  unit: string;
}[];
// 6. Calories
export type Calories = {
  date: string; // ISO format
  consumed: number; // kcal
  burned: number; // kcal
  unit: string; // kcal
}[];
// 7. Hydration
export type Hydration = {
  date: string; // ISO format
  current: number; // liters
  goal: number; // liters
  unit: string; // liters
}[];
// 8. VO2 Max
export type VO2Max = {
  date: string; // ISO format
  value: number; // ml/kg/min
  unit: string; // ml/kg/min
  workout: string; // workout type
}[];
// 9. Body Fat
export type BodyFat = {
  date: string; // ISO format
  region: string; // body region
  value: number; // percentage
  unit: string; // percentage
}[];
// 10. Activity Distribution
export type ActivityDistribution = {
  name: string; // activity type
  unit?: string; // optional unit
  children: Array<{
    name: string; // sub-activity type
    value?: number; // optional value
    children?: Array<{
      name: string; // sub-sub-activity type
      value: number; // value
    }>;
  }>;
}[];
// 11. Fitness Data

export type FitnessData = {
  steps: StepsData;

  heartRateData: {
    date: string;
    zones: HeartRateZone;
    avgRestingHR: number;
  }[];
  sleepQuality: SleepData;

  weightTrend: WeightTrend;

  workouts: Workouts;

  calories: Calories;

  hydration: Hydration;

  vo2max: VO2Max;

  bodyFat: BodyFat;

  activityDistribution: ActivityDistribution;
};
