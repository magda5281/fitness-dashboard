import { Skeleton } from '@/components/ui/skeleton';

export function ChartSkeleton() {
  return (
    <div className='p-3 sm:p-4 md:p-5 gap-2 md:gap-4 rounded-lg bg-muted'>
      <div className='space-y-2'>
        <Skeleton className='h-5 w-3/4' />
        <Skeleton className='h-4 w-full' />
      </div>
      <Skeleton className='h-[200px] sm:h-[220px] md:h-[260px] lg:h-[300px] mt-4' />
    </div>
  );
}
