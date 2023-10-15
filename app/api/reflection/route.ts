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
    'Can you give me 5 reflection questions as a list of strings. I want it formatted like such ["question", "question"]. Please just send the list in that format.',
};

export async function POST() {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
