import { StepsChart } from '@/components/charts/stepsChart';
import { HeartRateChart } from '@/components/charts/heartRateChart';
import { GenericCard } from '@/components/genericCard';
import { getChartsData, getFitnessData, getKpiData } from '@/lib/data';
import { findByDate, formatDate } from '@/lib/utils';
import { SleepEfficiency } from '@/components/charts/sleepEfficiency';
import { AvgRestingHRChart } from '@/components/charts/avgRestingHRChart';
import { SleepStagesChart } from '@/components/charts/sleepStagesChart';
import { WeightChart } from '@/components/charts/weightChart';
import { DailyWorkoutChart } from '@/components/charts/workoutChart';
import { VO2MaxChart } from '@/components/charts/VO2MaxChart';
import { CaloriesWorkoutWeight } from '@/components/charts/caloriesWorkoutWeight';
import { BodyFatChart } from '@/components/charts/bodyFat';
import { KpiRow } from '@/components/kpiRow';
import { ChartsSection } from '@/components/chartsSection';

export default async function DashboardPage() {
  const [kpiData, chartsData] = await Promise.all([
    getKpiData(),
    getChartsData(),
  ]);
  // const fitnessData = await getFitnessData();
  // const today = new Date().toISOString().split('T')[0];
  // const stepsData = fitnessData.steps.map((item) => ({
  //   date: formatDate(item.date),
  //   steps: item.steps,
  // }));
  // const heartRateData = fitnessData.heartRateData;

  // const avgRestingHRData = heartRateData.map((item) => ({
  //   date: formatDate(item.date),
  //   avgRestingHR: item.avgRestingHR,
  // }));

  // const sleepData = fitnessData.sleepQuality;
  // const sleepEfficiency = findByDate(sleepData, today);
  // const sleepStagesData = sleepData.map((item) => {
  //   // Start with default values
  //   const transformed = {
  //     date: formatDate(item.date),
  //     awake: 0,
  //     light: 0,
  //     deep: 0,
  //     rem: 0,
  //   };

  //   // Iterate over each stage and assign its minutes
  //   item.stages.forEach((stageObj) => {
  //     transformed[stageObj.stage] = stageObj.minutes;
  //   });

  //   return transformed;
  // });
  // const currentWorkout = findByDate(fitnessData.workouts, today);

  // const weightData = fitnessData.weightTrend.map((item) => ({
  //   date: formatDate(item.date),
  //   value: item.value,
  //   unit: item.unit,
  // }));

  // const vo2MaxData = fitnessData.vo2max.map((item) => ({
  //   ...item,
  //   date: formatDate(item.date),
  // }));

  return (
    <main className='flex gap-4 min-h-screen flex-col'>
      <div className='flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full'>
        <KpiRow {...kpiData} />
        <ChartsSection {...chartsData} />
      </div>
    </main>
  );
}
