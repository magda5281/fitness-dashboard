import { Skeleton } from '@/components/ui/skeleton';

export function KpiSkeleton() {
  return (
    <div className='p-3 sm:p-4 md:p-5 gap-2 md:gap-4 rounded-lg bg-muted'>
      <div className='space-y-2'>
        <Skeleton className='h-5 w-3/4' />
        <Skeleton className='h-4 w-full' />
      </div>
      <div className='flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-4'>
        <Skeleton className='h-6 w-6 rounded-full' />
        <Skeleton className='h-8 w-20' />
      </div>
    </div>
  );
}
