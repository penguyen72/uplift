'use client';

import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie-player';

import happyStudents from '../../public/happy-students.json';

import Chat from '@/components/chat';
import NavBar from '@/components/nav-bar';
import Reveal from '@/components/reveal';
import Image from 'next/image';
import quote from '../../public/quote.svg';

export default function Home() {
  const router = useRouter();

  return (
    <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
      <div className="snap-start w-screen xl:h-screen ">
        <NavBar />

        <div className="flex flex-col h-[calc(100vh-56px)] w-full items-center justify-center">
          <Reveal delay={0.25}>
            <h1 className="font-jua text-5xl md:text-7xl xl:text-9xl text-[#9F7E69] transition-all drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              Take What You Need
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <h1 className="font-andika text-2xl xl:text-4xl mb-10 transition-all">
              Brightening Your Day, One Click at a Time
            </h1>
          </Reveal>
          <Reveal delay={0.45}>
            <button
              className="bg-[#FFEEE2] hover:bg-[#f9a4d6] text-black font-delius text-[30px] h-[56px] w-[242px] border-black border-2 border-solid rounded-[15px]"
              onClick={() => router.push('/library')}
            >
              Get Started
            </button>
          </Reveal>
        </div>
      </div>

      <div className="snap-start w-screen h-auto xl:h-screen py-[80px] flex flex-col lg:flex-row bg-[#FFEEE2] items-center justify-center transition-all">
        <div className="flex flex-col xl:flex-row gap-4 items-center">
          <Reveal delay={0.25}>
            <div className="flex flex-col items-center lg:items-start justify-center ml-[30px] mr-[70px] max-w-[900px] p-[24px] gap-8 transition-all">
              <h1 className="font-jua text-6xl xl:text-8xl drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#DE9BC3] whitespace-nowrap transition-all">
                ABOUT US
              </h1>
              <p className="font-andika text-base lg:text-xl whitespace-normal transition-all">
                &apos;Take What You Need&apos; offers a diverse collection of
                inspirational quotes, heartwarming jokes, and practical tips
                across various themes. Choose a theme that resonates with you,
                receive your uplifting message, and save your favorites to your
                personal MyBoard.
              </p>
              <p className="font-andika text-base lg:text-xl whitespace-normal transition-all">
                Feeling the need to chat? Our chat buddy, Riley, is here to
                listen and engage in friendly conversation. Lastly, take a break
                and participate in our mindful minutes, where you journal your
                thoughts on thought-provoking questions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.7}>
            <Lottie
              loop
              animationData={happyStudents}
              play
              style={{ minWidth: 650, minHeight: 650 }}
            />
          </Reveal>
        </div>
      </div>

      <div className="snap-start w-screen py-[64px] xl:h-screen flex flex-col xl:flex-row bg-[#F2EFC7] items-center justify-center gap-8 px-10">
        <div className="flex flex-col xl:self-end xl:mb-10">
          <Reveal delay={0.5}>
            <Image
              src={quote}
              alt="Picture quote for tiger"
              width={300}
              height={300}
            />
          </Reveal>
          <Reveal delay={0.7}>
            <Image
              src="/tiger.png"
              width={350}
              height={350}
              alt="Picture of tiger"
            />
          </Reveal>
        </div>
        <div className="flex flex-col-reverse xl:flex-row items-center gap-8">
          <Reveal delay={0.4}>
            <Chat />
          </Reveal>
          <Reveal delay={0.6}>
            <div className="flex flex-col items-center xl:items-end w-[500px]">
              <h1 className="font-jua text-[80px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#9F7E69] ">
                Chat Buddy
              </h1>
              <h1 className="font-andika text-[25px] text-center xl:text-right">
                Whether you want to share your thoughts, seek advice, or just
                enjoy some light-hearted chatter, our Chat Buddy, Riley, offers
                a supportive and understanding presence.
              </h1>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
