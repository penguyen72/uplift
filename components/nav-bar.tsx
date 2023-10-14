'use client';

import { usePathname, useRouter } from 'next/navigation';

import { UserButton, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  if (userId) {
    return (
      <div
        className={cn(
          'flex items-center justify-end py-2 px-4 h-[56px]',
          pathname.includes('mindful-minutes') && 'bg-[#FFEEE2]'
        )}
      >
        <Button variant="link" onClick={() => router.push('/')}>
          <p className="font-delius text-lg">Home</p>
        </Button>
        <Button variant="link" onClick={() => router.push('/library')}>
          <p className="font-delius text-lg">Library</p>
        </Button>
        <Button variant="link" onClick={() => router.push('/my-board')}>
          <p className="font-delius text-lg">MyBoard</p>
        </Button>
        <Button variant="link" onClick={() => router.push('/mindful-minutes')}>
          <p className="font-delius text-lg">Mindful Minutes</p>
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  } else {
    return (
      <div
        className={cn(
          'flex items-center justify-end py-2 px-4 h-[56px]',
          pathname.includes('mindful-minutes') && 'bg-[#FFEEE2]'
        )}
      >
        <Button variant="link" onClick={() => router.push('/')}>
          <p className="font-delius text-lg">Home</p>
        </Button>
        <Button variant="link" onClick={() => router.push('/library')}>
          <p className="font-delius text-lg">Library</p>
        </Button>
        <Button variant="link" onClick={() => router.push('/sign-in')}>
          <p className="font-delius text-lg">Log In</p>
        </Button>
        <Button variant="link" onClick={() => router.push('/sign-up')}>
          <p className="font-delius text-lg">Sign up</p>
        </Button>
      </div>
    );
  }
};

export default NavBar;
