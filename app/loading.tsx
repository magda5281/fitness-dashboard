import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <main className='flex gap-4 min-h-screen flex-col'>
      {/* Header Skeleton */}
      <div className='sticky top-0 z-50 bg-[var(--data-green)] text-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border-b'>
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
          <Skeleton className='h-8 w-48' />
          <Skeleton className='h-8 w-8 rounded-full' />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className='flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full'>
        {/* Stats Grid Skeleton */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8'>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className='p-3 sm:p-4 md:p-5 gap-2 md:gap-4 rounded-lg bg-muted'
            >
              <div className='space-y-2'>
                <Skeleton className='h-5 w-3/4' />
                <Skeleton className='h-4 w-full' />
              </div>
              <div className='flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-4'>
                <Skeleton className='h-6 w-6 rounded-full' />
                <Skeleton className='h-8 w-20' />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Grid Skeleton */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6'>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className='p-3 sm:p-4 md:p-5 gap-2 md:gap-4 rounded-lg bg-muted'
            >
              <div className='space-y-2'>
                <Skeleton className='h-5 w-3/4' />
                <Skeleton className='h-4 w-full' />
              </div>
              <Skeleton className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px] mt-4' />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
