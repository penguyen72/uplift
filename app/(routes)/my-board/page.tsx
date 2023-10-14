"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Quote } from "@/types";
import axios from "axios";
import Image from "next/image";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [notes, setNotes] = useState<Quote[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getQuotes = async () => {
    try {
      const response = await axios.post("/api/get-quotes");
      setNotes(response.data.quotes);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="flex text-andika items-center h-auto md:h-[calc(100vh-56px)] justify-center overflow-y-scroll px-10 pb-10 pt-5">
      <div className="flex bg-[#9F7E69] h-full w-full p-10 justify-center items-start rounded-sm">
        {!loading && notes.length === 0 && (
          <div className="flex flex-col h-full items-center justify-center">
            <Image src="/tiger.png" alt="/tiger.png" width={400} height={400} />
            <p className="text-2xl font-andika">
              You haven't saved any quotes!
            </p>
          </div>
        )}
        {error && (
          <div className="flex flex-col h-full items-center justify-center">
            <Image src="/tiger.png" alt="/tiger.png" width={400} height={400} />
            <p className="text-2xl font-andika">
              Uh oh! I couldn't get your quotes. Try again later!
            </p>
          </div>
        )}
        {notes.length !== 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-8">
            {notes.map((item, index) => (
              <motion.div
                className="flex items-center justify-center w-[160px] h-[160px] bg-[#D2BBA0] rounded-md cursor-pointer"
                key={item.id}
                layoutId={`${index}`}
                onClick={() => setSelectedIndex(index)}
              >
                <p className="text-center text-[20px] text-andika text-black">
                  {item.category}
                </p>
              </motion.div>
            ))}

            <AnimatePresence mode="wait">
              {selectedIndex !== null && (
                <div className="flex items-center justify-center fixed h-screen w-screen inset-0 bg-black bg-opacity-50">
                  <motion.div
                    key={notes[selectedIndex].id}
                    className="bg-[#D2BBA0] rounded-lg w-[450px] relative px-8 pb-10 pt-4"
                    layoutId={`${selectedIndex}`}
                  >
                    <Button
                      className="rounded-full hover:bg-[#d9c3aa] top-4 right-4 absolute"
                      size="icon"
                      variant="ghost"
                      onClick={() => setSelectedIndex(null)}
                    >
                      <X />
                    </Button>
                    <motion.h2 className="text-[30px] text-center mt-[25px] mb-2 text-black">
                      {notes[selectedIndex].category}
                    </motion.h2>
                    <motion.h5 className="text-[20px] text-center mt-[30px] mb-1 text-gray-700">
                      {notes[selectedIndex].quote}
                    </motion.h5>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
