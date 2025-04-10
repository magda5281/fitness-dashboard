import { HomeIcon } from 'lucide-react';
import Link from 'next/link';

const SettingsPage = () => {
  return (
    <div className='flex flex-col gap-6 flex-1 overflow-auto p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 max-w-7xl mx-auto w-full'>
      <Link href='/' className='flex items-center w-full'>
        <HomeIcon className='h-4 w-4 mr-2' />⇠ Back to Dashboard
      </Link>
      <h2>Placeholder for Settings Page</h2>
    </div>
  );
};

export default SettingsPage;
