'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { FaUser } from 'react-icons/fa';
import { ExitIcon } from '@radix-ui/react-icons';
import { SettingsIcon } from 'lucide-react';
import Link from 'next/link';

export const UserButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label='User menu'>
        <Avatar className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12'>
          <AvatarImage src={''} alt='User avatar' />
          <AvatarFallback className='bg-radial from-violet-200 to-violet-500'>
            <FaUser className='text-white' />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-auto '>
        {/* <LogoutButton> to implement logout action */}
        <DropdownMenuItem>
          <ExitIcon className='h-4 w-4 mr-2' />
          Logout
        </DropdownMenuItem>
        {/* </LogoutButton> */}

        <DropdownMenuItem asChild>
          <Link href='/settings' className='flex items-center w-full'>
            <SettingsIcon className='h-4 w-4 mr-2' />
            Settings
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
