import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessage } from 'openai/resources/chat/completions.mjs';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: ChatCompletionMessage = {
  role: 'system',
  content:
    'Hey Chat, assume you are my good friend who is hearing about my day. If I am having a bad day, then I want you to cheer me up. If I greet you, I want you to respond with "Hello! How are you doing today?" only. If I ask how are you, then i want you to respond with I am good. If I talk about anything else, say you do not understand.',
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, ...messages],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
