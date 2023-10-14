"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Note from "@/components/note";

const notes = [
  { id: "1", title: "Quote #1", subtitle: "Text of Quote 1" },
  { id: "2", title: "Quote #2", subtitle: "Text of Quote 2" },
  { id: "3", title: "Quote #3", subtitle: "Text of Quote 3" },
];

function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <motion.div className="flex items-center h-auto md:h-[calc(100vh-56px)] justify-center overflow-y-scroll px-10 pb-10 pt-5">
      <div className="flex bg-[#9F7E69] h-full p-10 justify-center items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-8">
          {notes.map((item) => (
            <motion.div
              className={`card w-[160px] h-[160px] bg-[#D2BBA0] rounded-md cursor-pointer transform transition-transform duration-500 hover:scale-1.1 ${
                selectedId === item.id ? "card-selected" : ""
              }`}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              initial={{ scale: 1 }}
              animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
              transition={{ duration: 0.3 }}
            >
              <div className="card-content">
                <motion.h2 className="text-[18px] text-center text-delius mt-[25px] p-5 text-black">
                  {item.title}
                </motion.h2>
                <motion.h5 className="text-[15px] text-center mb-1 text-black">
                  {item.subtitle}
                </motion.h5>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedId && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {notes.map(
                  (item) =>
                    item.id === selectedId && (
                      <motion.div
                        className="bg-[#D2BBA0] rounded-lg p-1 shadow-md w-[450px] h-[450px]"
                        layoutId={`card-container-${item.id}`}
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div className="relative">
                          <motion.button
                            className="absolute top-0 right-[15px] text-center text-black"
                            onClick={() => setSelectedId(null)}
                          >
                            <span className="text-2xl">&times;</span>
                          </motion.button>
                          <motion.h2 className="text-[30px] text-center mt-[25px] mb-2 text-black">
                            {item.title}
                          </motion.h2>
                          <motion.h5 className="text-[20px] text-center mt-[30px] mb-1 text-gray-700">
                            {item.subtitle}
                          </motion.h5>
                        </motion.div>
                      </motion.div>
                    )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
