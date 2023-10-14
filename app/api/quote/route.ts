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
    'Hey Chat, if I say "self care tips," then I want you to provide me a self care tip. If I say "pick me up" then I want you to tell me a joke. Do not repeat jokes. For other responses, you are only allowed to give me a quote and who said the quote. I will give you a word or phrase, and you need to generate a positive, uplifting quote that relates to what I say.  I want you to give the quote in the format "quote" - speaker. Only include the quote if the speaker is unknown. If the speaker is unknown, then send me just the "quote". This does not apply to self care tips or pick me up. For these just send me a tip with no quote, do not send any additional text or explanation for these responses.',
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { message } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 });
    }

    if (!message) {
      return new NextResponse('Message are required', { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [instructionMessage, message],
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    return new NextResponse('Internal error', { status: 500 });
  }
}
