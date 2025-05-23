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

export type HeartRateData = {
  date: string;
  zones: HeartRateZone;
  avgRestingHR: number;
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
export type Workout = {
  date: string;
  cardio: number;
  strength: number;
  yoga: number;
  unit: 'min';
  targets: {
    cardio: number;
    strength: number;
    yoga: number;
  };
};
export type Workouts = Workout[];
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
  name: string;
  value: number; // percentage
}[];

// 10. Fitness Data

export type FitnessData = {
  steps: StepsData;
  heartRateData: HeartRateData;
  sleepQuality: SleepData;
  weightTrend: WeightTrend;
  workouts: Workouts;
  calories: Calories;
  hydration: Hydration;
  vo2max: VO2Max;
  bodyFat: BodyFat;
};
