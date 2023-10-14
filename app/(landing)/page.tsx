'use client';

import NavBar from '@/components/nav-bar';
import { useRouter } from 'next/navigation';
import happyStudents from '../../public/happy-students.json';
import Lottie from 'react-lottie-player';

export default function Home() {
  const router = useRouter();

  return (
    <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
      <div className="snap-start w-screen h-screen">
        <NavBar />
        <div className="flex flex-col h-[calc(100vh-56px)] w-full items-center justify-center">
          <h1 className="font-jua text-[150px] text-[#9F7E69] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            Take What You Need
          </h1>
          <h1 className="font-andika text-[37px] mb-10">
            Brightening Your Day, One Click at a Time
          </h1>
          <button
            className="bg-[#FFEEE2] hover:bg-[#f9a4d6] text-black font-delius text-[30px] h-[56px] w-[242px] border-black border-2 border-solid rounded-[15px]"
            onClick={() => router.push('/library')}
          >
            Get Started
          </button>
        </div>
      </div>

      <div className="snap-start w-screen h-screen flex flex-col lg:flex-row bg-[#FFEEE2] items-center justify-center">
        <div className="flex flex-col items-start justify-center ml-[30px] mr-[70px] w-[936px]">
          <h1 className="font-jua text-[100px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#DE9BC3] ">
            ABOUT US
          </h1>
          <h1 className="font-andika text-base lg:text-[25px]">
            'Take What You Need' offers a diverse collection of inspirational
            quotes, heartwarming jokes, and practical tips across various
            themes. Choose a theme that resonates with you, receive your
            uplifting message, and save your favorites to your personal MyBoard.
            Feeling the need to chat? Our chat buddy is here to listen and
            engage in friendly conversation. Take a break and participate in our
            mindful minutes, reflecting and journaling your thoughts on
            thought-provoking questions.”
          </h1>
        </div>
        <Lottie
          loop
          animationData={happyStudents}
          play
          style={{ width: 500, height: 500 }}
        />
      </div>
      <div className="snap-start w-screen h-screen flex flex-row bg-[#F2EFC7] items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[200px]">
          cute animal will go here
        </div>
<<<<<<< Updated upstream

        <div className= "flex flex-col items-center justify-center w-[500px] h-[650px] ml-[100px] mr-[70px] bg-white rounded-[20px] border-black border-[1px] border-solid">
          <div className="bg-[#D2BBA0] w-full h-[35px] py-[6px] rounded-[20px] rounded-bl rounded-br">
            <h1 className="text-black text-[15px] font-andika text-center align-middle">Chat Buddy: A Virtual Friend</h1>
          </div>
          <div className="flex-grow overflow-y-auto w-full">
            <div className="flex flex-col space-y-2 p-4">
              <div className="flex items-center self-end rounded-xl rounded-tr bg-[#DE9BC3] py-[7px] px-3 text-black font-delius">
                <p>This is a sender message</p>
              </div>
              <div className="flex items-center self-start rounded-xl rounded-tl bg-[#E2E2E2] py-[7px] px-3 font-delius">
                <p>This is a receiver message</p>
              </div>
            </div>
          </div>
          <div className="flex items-center p-2 w-[500px]">
            <input type="text" placeholder="Type your message..." className="w-[415px] h-[50px] px-3 shrink-[0] rounded-[50px] bg-[#E2E2E2] bg-opacity-20  border-black border-[1px] border-solid" />
            <button className="rounded-[10px] w-[60px] ml-[5px] bg-[#D2BBA0] text-center py-[9px] text-[15px] text-black">SEND</button>
          </div>
        </div>
    
        <div className= "flex flex-col items-end w-[500px]">
          <h1 className='font-jua text-[80px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#9F7E69] '>Chat Buddy</h1>
          <h1 className='font-andika text-[25px] text-right'>Whether you want to share your thoughts, seek advice, or just enjoy some light-hearted chatter, our Chat Buddy offers a supportive and understanding presence.</h1>
=======
        <div className="flex flex-col items-center justify-center w-[700px]">
          chatbox is supposed to go here
        </div>
        <div className="flex flex-col items-end w-[500px]">
          <h1 className="font-jua text-[80px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#9F7E69] ">
            Chat Buddy
          </h1>
          <h1 className="font-andika text-[25px] text-right">
            Whether you want to share your thoughts, seek advice, or just enjoy
            some light-hearted chatter, our Chat Buddy offers a supportive and
            understanding presence.
          </h1>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}
