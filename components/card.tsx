'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  const [flipped, setFlipped] = useState(false);
  const toggleFlipped = () => {
    setFlipped((prevValue) => !prevValue);
  };

  return (
    <motion.div
      className="w-[450px] h-[250px] relative hover:cursor-pointer"
      onClick={toggleFlipped}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {!flipped ? (
          <motion.div
            key="front"
            className="flex w-full h-full items-center justify-center absolute p-4 rounded-xl"
            initial={{ rotateY: -180, backgroundColor: '#D2BBA0' }}
            exit={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ backgroundColor: '#9F7E69' }}
          >
            <motion.p
              className="text-2xl whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {title}
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            className="flex w-full h-full items-center justify-center bg-[#D2BBA0] absolute p-4 rounded-xl"
            initial={{ rotateY: 180, backgroundColor: '#D2BBA0' }}
            exit={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ backgroundColor: '#9F7E69' }}
          >
            <motion.p
              className="text-2xl whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              "You are hot" - Peyton Nguyen
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
