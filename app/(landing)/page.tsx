import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
      <div className="snap-start w-screen h-screen flex items-center justify-center">
        <h1>Page 5</h1>
      </div>
      <div className="snap-start w-screen h-screen flex bg-[#FFEEE2] items-center justify-center">
        <h1>Page 2</h1>
      </div>
      <div className="snap-start w-screen h-screen flex bg-[#F2EFC7] items-center justify-center">
        <h1>Page 3</h1>
      </div>
    </div>
  );
}
