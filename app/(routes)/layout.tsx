'use client';

import NavBar from '@/components/nav-bar';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    // <AnimatePresence mode="wait">
    //   <motion.div key={pathname}>
    //     <motion.div
    //       className="fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#dbdeba]"
    //       initial={{ x: '100%', width: '100%' }}
    //       animate={{ x: '0%', width: '0%' }}
    //       exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
    //       transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
    //     />
    //     <motion.div
    //       className="fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-[#dac4ac]"
    //       initial={{ x: '100%', width: '100%' }}
    //       animate={{ x: '0%', width: '0%' }}
    //       exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
    //       transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
    //     />
    //     <motion.div
    //       className="fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-[#dbdeba]"
    //       initial={{ x: '100%', width: '100%' }}
    //       animate={{ x: '0%', width: '0%' }}
    //       exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
    //       transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
    //     />
    <div>
      <NavBar />
      {children}
    </div>
    //   </motion.div>
    // </AnimatePresence>
  );
};

export default Layout;
