import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
      <div className="snap-start w-screen h-screen flex items-center justify-center font-andika">
        <h1>Hello my name is liane</h1>
      </div>
      <div className="snap-start w-screen h-screen flex bg-[#FFEEE2] items-center justify-center font">
        <h1 className='font-delius'>Hello my name is Peyton</h1>
      </div>
      <div className="snap-start w-screen h-screen flex bg-[#F2EFC7] items-center justify-center">
        <h1 className='font-jua'>Liane and Peyton together forever</h1>
      </div>
    </div>
  );
}
