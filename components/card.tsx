'use client';

import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChatCompletionMessage } from 'openai/resources/index.mjs';
import { Fragment, useState } from 'react';
import { Skeleton } from './ui/skeleton';

interface CardProps {
  title: string;
  type: 'quote' | 'tip' | 'joke';
}

const Card = ({ title, type }: CardProps) => {
  const [dirty, setDirty] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [message, setMessage] = useState<ChatCompletionMessage>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const getMessage = async () => {
    setLoading(true);
    try {
      const userMessage: ChatCompletionMessage = {
        role: 'user',
        content: title,
      };

      const response = await axios.post('/api/quote', {
        message: userMessage,
      });

      setMessage(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
      setLoading(false);
      setDirty(true);
    }
  };
  const toggleFlipped = () => {
    setFlipped((prevValue) => !prevValue);
  };

  const handleClick = () => {
    if (!dirty) {
      getMessage();
    }
    toggleFlipped();
  };

  return (
    <motion.div
      className="w-[450px] h-[250px] relative hover:cursor-pointer font-andika"
      onClick={handleClick}
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
            {loading ? (
              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            ) : type === 'quote' ? (
              <div className="flex flex-col gap-2">
                <motion.p
                  className="text-xl italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {message?.content?.split(' - ')[0]}
                </motion.p>
                <motion.p
                  className="text-base italic text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {`- ${message?.content?.split(' - ')[1]}`}
                </motion.p>
              </div>
            ) : (
              <motion.p
                className="text-xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {message?.content}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
