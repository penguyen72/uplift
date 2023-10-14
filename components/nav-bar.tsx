'use client';

import { useRouter } from 'next/navigation';

import { UserButton, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const router = useRouter();
  const { userId } = useAuth();

  if (userId) {
    return (
      <div className="flex items-center justify-end py-2 px-3 h-[56px]">
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
      <div className="flex items-center justify-end h-[56px] py-2 px-3">
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
