'use client';

import Card from '@/components/card';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-56px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100vh-56px)] md:h-auto justify-center items-center">
        <Card category="Motivation" type="quote" />
        <Card category="Positivity" type="quote" />
        <Card category="Confidence" type="quote" />
        <Card category="Pick Me Up" type="joke" />
        <Card category="Hope" type="quote" />
        <Card category="Self Care Tips" type="tip" />
      </div>
    </div>
  );
}
