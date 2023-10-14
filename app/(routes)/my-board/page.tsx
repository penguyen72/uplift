'use client';

import Note from '@/components/note';
import Image from 'next/image';

export default function Home() {
  const notes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <div className="flex items-center h-auto md:h-[calc(100vh-56px)] justify-center overflow-y-scroll px-10 pb-10 pt-5">
      <div className="flex bg-[#9F7E69] h-full p-10 justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-8">
          {notes.map((item) => {
            return <Note key={item} title={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
