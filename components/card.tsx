"use client";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { useState } from "react";
import { Button } from "./ui/button";

interface CardProps {
  category: string;
  type: "quote" | "tip" | "joke";
}

const Card = ({ category, type }: CardProps) => {
  const [liked, setLiked] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [message, setMessage] = useState<ChatCompletionMessage>();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const getMessage = async () => {
    setLoading(true);
    try {
      const userMessage: ChatCompletionMessage = {
        role: "user",
        content: category,
      };

      const response = await axios.post("/api/quote", {
        message: userMessage,
      });

      setMessage(response.data);
    } catch (error) {
      console.log(error);
    } finally {
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

  const saveQuote = async () => {
    try {
      const response = await axios.post("/api/save-quote", {
        category: category,
        quote: message?.content,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      saveQuote();
    }
  };

  return (
    <motion.div
      className="w-[400px] 2xl:w-[450px] h-[250px] relative hover:cursor-pointer font-andika"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {!flipped ? (
          <motion.div
            key="front"
            className="flex w-full h-full items-center justify-center absolute p-4 rounded-xl"
            initial={{ rotateY: -180, backgroundColor: "#D2BBA0" }}
            exit={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ backgroundColor: "#9F7E69" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                className="rounded-full absolute top-2 left-2 hover:bg-[#ffffff1f]"
                variant="ghost"
                size="icon"
                onClick={handleClick}
              >
                <ArrowLeftRight />
              </Button>
              <motion.p
                className="text-[40px] font-delius whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {category}
              </motion.p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex w-full h-full items-center justify-center bg-[#D2BBA0] absolute p-4 rounded-xl"
            initial={{ rotateY: 180, backgroundColor: "#D2BBA0" }}
            exit={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ backgroundColor: "#9F7E69" }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Button
                className="rounded-full absolute top-2 left-2 hover:bg-[#ffffff1f]"
                variant="ghost"
                size="icon"
                onClick={handleClick}
              >
                <ArrowLeftRight />
              </Button>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Image
                    src="/tiger.png"
                    alt="/tiger.png"
                    width={100}
                    height={100}
                  />
                  <p className="text-lg">Grabbing your quote right now!</p>
                </div>
              ) : type === "quote" ? (
                <div className="flex flex-col gap-2">
                  <motion.p
                    className="text-xl italic font-delius"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {message?.content?.split(" - ")[0]}
                  </motion.p>
                  <motion.p
                    className="text-base italic text-right font-delius"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {`- ${message?.content?.split(" - ")[1]}`}
                  </motion.p>
                </div>
              ) : (
                <motion.p
                  className="text-xl text-center font-delius"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {message?.content}
                </motion.p>
              )}
              <Button
                className="rounded-full absolute bottom-2 right-2 hover:bg-[#ffffff1f]"
                variant="ghost"
                size="icon"
                onClick={handleLike}
              >
                <Heart className={liked ? "text-red-700" : ""} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
