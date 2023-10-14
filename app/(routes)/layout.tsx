'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-end py-2 px-3 h-[56px]">
        <Button variant="link" onClick={() => router.push('/home')}>
          Home
        </Button>
        <Button variant="link" onClick={() => router.push('/library')}>
          Library
        </Button>
        <Button variant="link" onClick={() => router.push('/my-board')}>
          MyBoard
        </Button>
        <Button variant="link" onClick={() => router.push('/mindful-minutes')}>
          Mindful Minutes
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
      {children}
    </div>
  );
};

export default Layout;
