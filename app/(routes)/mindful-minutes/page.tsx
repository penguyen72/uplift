"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-[#FFEEE2] w-screen h-[calc(100vh-56px)] flex items-center justify-center">
      <div className="bg-[#D9D9D9] flex flex-col items-center justify-center rounded-full w-[500px] h-[500px]">
        <div className="text-[#000000] mt-[60px] font-delius flex text-[50px]">
          Mindful Minutes
        </div>
        <button
          className="bg-[#6F9FE7] hover:bg-[#448FFF] text-black font-delius text-[30px] h-[54px] w-[180px] border-black border-2 border-solid rounded-[20px] mt-[50px]"
          onClick={() => router.push("/mindful-minutes/reflection")}
        >
          Begin
        </button>
      </div>
    </div>
  );
}
