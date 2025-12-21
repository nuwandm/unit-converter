'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ConverterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Converter error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Converter Error
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error.message || 'Failed to load the converter. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()}>
            Try again
          </Button>
          <Link href="/">
            <Button variant="outline">
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
