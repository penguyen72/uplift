import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="snap-mandatory snap-y h-screen w-screen overflow-scroll">
      <div className="snap-start w-screen h-screen flex flex-col items-center justify-center">
        <h1 className ="font-jua text-[150px] text-[#9F7E69] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          Take What You Need</h1>
        <h1 className='font-andika text-[37px] mb-10'> Brightening Your Day, One Click at a Time</h1>

        <button className="bg-[#FFEEE2] hover:bg-[#f9a4d6] text-black font-delius text-[30px] h-[56px] w-[242px] border-black border-2 border-solid rounded-[15px]">Get Started</button>
      </div>
      <div className="snap-start w-screen h-screen flex flex-row bg-[#FFEEE2] items-center justify-center">
        <div className= "flex flex-col items-start justify-center ml-[30px] mr-[70px] w-[936px]">
          <h1 className='font-jua text-[100px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#DE9BC3] '>ABOUT US</h1>
          <h1 className='font-andika text-[25px]'>'Take What You Need' offers a diverse collection of inspirational quotes, heartwarming jokes, and practical tips across various themes. Choose a theme that resonates with you, receive your uplifting message, and save your favorites to your personal MyBoard. Feeling the need to chat? Our chat buddy is here to listen and engage in friendly conversation. Take a break and participate in our mindful minutes, reflecting and journaling your thoughts on thought-provoking questions.”</h1>
        </div>
        <div className='w-[600px] items-center justify-center'>cute animation</div>
      </div>
      <div className="snap-start w-screen h-screen flex flex-row bg-[#F2EFC7] items-center justify-center">
        <div className= "flex flex-col items-center justify-center w-[200px]">
          cute animal will go here
        </div>
        <div className= "flex flex-col items-center justify-center w-[700px]">
          chatbox is supposed to go here
        </div>
        <div className= "flex flex-col items-end w-[500px]">
          <h1 className='font-jua text-[80px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-[#9F7E69] '>Chat Buddy</h1>
          <h1 className='font-andika text-[25px] text-right'>Whether you want to share your thoughts, seek advice, or just enjoy some light-hearted chatter, our Chat Buddy offers a supportive and understanding presence.</h1>
        </div>
      </div>
    </div>
  )
}
