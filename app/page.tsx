import { GenericCard } from '@/components/genericCard';
import { AvatarIcon } from '@radix-ui/react-icons';

export default function DashboardPage() {
  return (
    <main className='flex min-h-screen flex-col  p-6'>
      <div className='flex items-center justify-between'>
        <h1>Fitness & Health Dashboard</h1> <AvatarIcon className='w-8 h-8' />
      </div>
      <div className='p-4 md:p-6 space-y-4'>
        {/* KPI Cards Row */}
        <div className='grid grid-cols-2  lg:grid-cols-4 gap-4'>
          <GenericCard title="Today's Steps" description='+12% from yesterday'>
            <div className='md:text-2xl font-bold '>8,432</div>
          </GenericCard>
          <GenericCard title="Today's Steps" description='+12% from yesterday'>
            <div className='md:text-2xl font-bold '>8,432</div>
          </GenericCard>
          <GenericCard title="Today's Steps" description='+12% from yesterday'>
            <div className='md:text-2xl font-bold '>8,432</div>
          </GenericCard>
          <GenericCard title="Today's Steps" description='+12% from yesterday'>
            <div className='md:text-2xl font-bold '>8,432</div>
          </GenericCard>
        </div>

        {/* Charts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {/* Example Chart 1 */}
          <GenericCard title='Step Activity' className='col-span-1'>
            <div className=''>Chart</div>
          </GenericCard>

          {/* Example Chart 2 - With description */}
          <GenericCard
            title='Heart Rate'
            description='Last 7 days average'
            className='col-span-1 md:col-span-2 lg:col-span-1'
          >
            <div className=''>Chart</div>
          </GenericCard>

          {/* Add remaining charts */}
        </div>
      </div>
    </main>
  );
}
