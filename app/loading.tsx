import { HeaderSkeleton } from '@/components/skeletons/headerSkeleton';
import { KpiSkeleton } from '@/components/skeletons/kpiSkeleton';
import { ChartSkeleton } from '@/components/skeletons/chartSkeleton';

export default function Loading() {
  return (
    <main className='flex gap-4 min-h-screen flex-col'>
      <HeaderSkeleton />

      <div className='flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full'>
        {/* KPI Row */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8'>
          {[...Array(4)].map((_, i) => (
            <KpiSkeleton key={i} />
          ))}
        </div>

        {/* Charts Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
          {[...Array(10)].map((_, i) => (
            <ChartSkeleton key={i} />
          ))}
        </div>
      </div>
    </main>
  );
}
