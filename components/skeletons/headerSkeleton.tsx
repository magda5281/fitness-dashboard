import { Skeleton } from '@/components/ui/skeleton';

export function HeaderSkeleton() {
  return (
    <div className='sticky top-0 z-50 bg-[var(--data-green)] text-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border-b'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <Skeleton className='h-8 w-48' />
        <Skeleton className='h-8 w-8 rounded-full' />
      </div>
    </div>
  );
}
