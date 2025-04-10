import { UserButton } from './userButton';

export const Header = () => {
  return (
    <div className='sticky top-0 z-50 bg-[var(--data-green)] text-black p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 border-b'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <h1 className='font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl'>
          Fitness & Health Dashboard
        </h1>
        <UserButton />
      </div>
    </div>
  );
};
