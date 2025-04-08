import { StepsChart } from '@/components/charts/stepsChart';
import { GenericCard } from '@/components/genericCard';
import { getFitnessData } from '@/lib/data';
import { findByDate } from '@/lib/utils';
import { AvatarIcon } from '@radix-ui/react-icons';
import { Droplet, Flame, Footprints, Heart } from 'lucide-react';

export default async function DashboardPage() {
  const fitnessData = await getFitnessData();
  const today = new Date().toISOString().split('T')[0];
  const currentSteps = findByDate(fitnessData.steps, today);
  const lastSteps = currentSteps
    ? fitnessData.steps[fitnessData.steps.length - 2]
    : null;

  const heartHealth = findByDate(fitnessData.heartRateData, today);
  const recentHearHealth = heartHealth
    ? fitnessData.heartRateData[fitnessData.heartRateData.length - 2]
    : null;
  const hydration = findByDate(fitnessData.hydration, today);
  const calories = findByDate(fitnessData.calories, today);

  return (
    <main className='flex min-h-screen flex-col  p-4 md:p-6 lg:p-8'>
      <div className='flex items-center justify-between'>
        <h1>Fitness & Health Dashboard</h1> <AvatarIcon className='w-8 h-8' />
      </div>
      <div className='p-4 md:p-6 space-y-4'>
        {/* KPI Cards Row */}
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6'>
          <GenericCard
            title='Steps'
            description={`${
              (currentSteps?.steps ?? 0) - (lastSteps?.steps ?? 0)
            } vs yesterday`}
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Footprints /> {currentSteps?.steps.toLocaleString() ?? 0}
            </div>
          </GenericCard>
          <GenericCard
            title='Heart health'
            description={`${
              (heartHealth?.avgRestingHR ?? 0) -
              (recentHearHealth?.avgRestingHR ?? 0)
            } Bpm vs yesterday`}
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Heart color='red' />
              {heartHealth?.avgRestingHR ?? 0} Bpm
            </div>
          </GenericCard>
          <GenericCard
            title='Hydration'
            description={` ${(
              (hydration?.goal ?? 3) - (hydration?.current ?? 0)
            ).toLocaleString()} ${hydration?.unit ?? ''} to go`}
          >
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Droplet color='blue' />
              {`${hydration?.current} ${hydration?.unit}`}
            </div>
          </GenericCard>
          <GenericCard title='Calories intake' description='Consumed vs Burned'>
            <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
              <Flame color='orange' />
              {`${(calories?.consumed ?? 0) - (calories?.burned ?? 0)} ${
                calories?.unit ?? ''
              }`}
            </div>
          </GenericCard>
        </div>

        {/* Charts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Example Chart 1 */}

          <GenericCard title='Step Activity' className='col-span-1'>
            <StepsChart data={fitnessData.steps} />
          </GenericCard>

          {/* Example Chart 2 - With description */}
          <GenericCard
            title='Heart Rate'
            description='Last 7 days average'
            className='col-span-1 '
          >
            <div className=''>Chart</div>
          </GenericCard>

          {/* Add remaining charts */}
        </div>
      </div>
    </main>
  );
}
