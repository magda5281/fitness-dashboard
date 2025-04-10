import { Footprints, Heart, Droplet, Flame } from 'lucide-react';
import React from 'react';
import { GenericCard } from '../genericCard';

interface KpiRowProps {
  steps: {
    current?: { steps: number };
    last?: { steps: number };
  };
  heartRate: {
    current?: { avgRestingHR: number };
    last?: { avgRestingHR: number };
  };
  hydration?: { current: number; goal: number; unit: string };
  calories?: { consumed: number; burned: number; unit: string };
}

export const KpiRow = ({
  steps,
  heartRate,
  hydration,
  calories,
}: KpiRowProps) => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8'>
      <GenericCard
        title='Steps'
        description={`${
          (steps.current?.steps ?? 0) - (steps.last?.steps ?? 0)
        } vs yesterday`}
        className=' bg-green-50'
      >
        <div className='text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
          <Footprints className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
          {steps.current?.steps.toLocaleString() ?? 0}
        </div>
      </GenericCard>
      <GenericCard
        title='Heart health'
        description={`${
          (heartRate?.current?.avgRestingHR ?? 0) -
          (heartRate?.last?.avgRestingHR ?? 0)
        } Bpm vs yesterday`}
        className='bg-pink-50'
      >
        <div className='text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
          <Heart color='red' className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
          {heartRate?.current?.avgRestingHR ?? 0} Bpm
        </div>
      </GenericCard>
      <GenericCard
        title='Hydration'
        description={` ${(
          (hydration?.goal ?? 3) - (hydration?.current ?? 0)
        ).toLocaleString()} ${hydration?.unit ?? ''} to go`}
        className=' bg-blue-50'
      >
        <div className='text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center gap-2 sm:gap-3 md:gap-4'>
          <Droplet
            color='blue'
            className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
          />
          {`${hydration?.current} ${hydration?.unit}`}
        </div>
      </GenericCard>
      <GenericCard
        title='Calories intake'
        description='Consumed vs Burned'
        className=' bg-orange-50'
      >
        <div className='md:text-2xl font-bold flex items-center justify-center gap-2 md:gap-4'>
          <Flame
            color='orange'
            className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
          />
          {`${(calories?.consumed ?? 0) - (calories?.burned ?? 0)} ${
            calories?.unit ?? ''
          }`}
        </div>
      </GenericCard>
    </div>
  );
};
