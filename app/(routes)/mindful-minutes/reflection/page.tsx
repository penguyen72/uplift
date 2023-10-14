"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFEEE2] w-screen h-[calc(100vh-56px)] flex">
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col align-center w-1/2 ml-[50px]">
          <div className="bg-[#D9D9D9] rounded-full w-[500px] h-[500px] align-center justify-center">
            <div className="text-[#000000] font-delius text-[50px] text-center">
              Mindful Minutes
            </div>
          </div>
        </div>
        <div className="text-delius flex flex-col items-center align-center w-1/2 mr-[50px]">
          <button className="bg-[#6F9FE7] hover:bg-[#448FFF] text-black font-delius text-[30px] h-[54px] w-[180px] border-black border-2 border-solid rounded-[20px]">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
