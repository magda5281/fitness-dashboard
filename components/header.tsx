import { AvatarIcon } from '@radix-ui/react-icons';

export const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-[var(--data-green)] text-white p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border-b'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
          Fitness & Health Dashboard
        </h1>
        <AvatarIcon className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10' />
      </div>
    </div>
  );
};
