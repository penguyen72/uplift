'use client';

import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-end py-2 px-3">
        <Button variant="link" onClick={() => router.push('/')}>
          Home
        </Button>
        <Button variant="link" onClick={() => router.push('/sign-in')}>
          Log In
        </Button>
        <Button variant="link" onClick={() => router.push('/sign-up')}>
          Sign up
        </Button>
      </div>
      {children}
    </div>
  );
};

export default Layout;
