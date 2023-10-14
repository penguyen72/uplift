'use client';

import Card from '@/components/card';

export default function Page() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-56px)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100vh-56px)] md:h-auto justify-center items-center">
        <Card title="Motivation" type="quote" />
        <Card title="Positivity" type="quote" />
        <Card title="Confidence" type="quote" />
        <Card title="Pick Me Up" type="joke" />
        <Card title="Hope" type="quote" />
        <Card title="Self Care Tips" type="tip" />
      </div>
    </div>
  );
}
