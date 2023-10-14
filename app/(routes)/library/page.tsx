'use client';

import Card from '@/components/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-56px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100vh-56px)] md:h-auto justify-center items-center">
        <Card title="Motivation" />
        <Card title="Positivity" />
        <Card title="Confidence" />
        <Card title="Pick Me Up" />
        <Card title="Strength" />
        <Card title="Healing" />
      </div>
    </div>
  );
}
