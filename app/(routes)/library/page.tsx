'use client';

import Notes from '@/components/notes';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-56px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100vh-56px)] md:h-auto justify-center items-center">
        <Notes title="Motivation" />
        <Notes title="Positivity" />
        <Notes title="Confidence" />
        <Notes title="Pick Me Up" />
        <Notes title="Strength" />
        <Notes title="Healing" />
      </div>
    </div>
  );
}
