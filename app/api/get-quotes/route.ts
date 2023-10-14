import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const quotes = await prismadb.quotes.findMany({
      where: {
        userId: userId,
      },
    });

    return NextResponse.json({ success: true, quotes: quotes });
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
