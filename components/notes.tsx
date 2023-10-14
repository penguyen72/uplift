'use client';

import { motion } from 'framer-motion';

interface NotesProps {
  title: string;
}

const Notes = ({ title }: NotesProps) => {
  return (
    <motion.div
      className="flex 
                 items-center 
                 justify-center 
                 bg-[#D2BBA0] 
                 rounded-md 
                 py-[40px] 
                 px-[60px] 
                 md:py-[80px] 
                 md:px-[120px]
                 hover:cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-2xl whitespace-nowrap">{title}</p>
    </motion.div>
  );
};

export default Notes;
