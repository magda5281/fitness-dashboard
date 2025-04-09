// app/dashboard/error.tsx
'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    // if (process.env.NODE_ENV === 'production') {
    //   Sentry.captureException(error);
    // }
  }, [error]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4 p-4'>
      <h2 className='text-2xl font-bold text-red-500'>
        Failed to load fitness data
      </h2>
      <p className='text-gray-600'>{error.message}</p>
      <button
        onClick={() => reset()}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Try again
      </button>
    </div>
  );
}
