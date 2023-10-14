import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { category, quote } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!quote) {
      return new NextResponse('Quote are required', { status: 400 });
    }

    await prismadb.quotes.create({
      data: {
        userId: userId,
        category: category,
        quote: quote,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
