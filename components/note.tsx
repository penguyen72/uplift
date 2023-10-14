'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Fragment, useState } from 'react';

interface NoteProps {
  title: string;
}

const Note = ({ title }: NoteProps) => {
  return (
    <motion.div className="relative" whileHover={{ scale: 1.05 }}>
      <div className="w-[60px] h-[20px] bg-white absolute -top-[10px] left-[50px] rounded-sm"></div>
      <div className="flex items-center justify-center w-[160px] h-[160px] bg-[#D2BBA0] rounded-md">
        <p>Quote #{title}</p>
      </div>
    </motion.div>
  );
};

export default Note;
