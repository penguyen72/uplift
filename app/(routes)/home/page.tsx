import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
