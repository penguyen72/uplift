import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-screen h-screen items-center justify-center">
        <h1>Page 1</h1>
      </div>
      <div className="flex flex-col w-screen h-screen bg-[#FFEEE2] items-center justify-center">
        <h1>Page 2</h1>
      </div>
      <div className="flex flex-col w-screen h-screen bg-[#F2EFC7] items-center justify-center">
        <h1>Page 3</h1>
      </div>
    </div>
  );
}
