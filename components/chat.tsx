import { useState } from 'react';
import { useRouter } from 'next/navigation';

import axios from 'axios';
import { ChatCompletionMessage } from 'openai/resources/index.mjs';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: 'Prompt is required',
  }),
});

const Chat = () => {
  const router = useRouter();
  const [conversation, setConversation] = useState<ChatCompletionMessage[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessage = {
        role: 'user',
        content: values.prompt,
      };
      const newMessages = [...conversation, userMessage];

      const response = await axios.post('/api/chat-buddy', {
        messages: newMessages,
      });

      setConversation((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[500px] h-[650px] ml-[100px] mr-[70px] bg-white rounded-[20px] border-black border-[1px] border-solid">
      <div className="bg-[#D2BBA0] w-full h-[35px] py-[6px] rounded-[20px] rounded-bl rounded-br">
        <h1 className="text-black text-[15px] font-andika text-center align-middle">
          Chat Buddy: A Virtual Friend
        </h1>
      </div>
      <div className="flex-grow overflow-y-scroll w-full">
        <div className="flex flex-col space-y-2 p-4">
          <div className="flex items-center rounded-xl rounded-tr py-[7px] px-3 font-delius max-w-[80%] self-start bg-[#E2E2E2]">
            <p className="text-sm">Tell me about your day!</p>
          </div>
          {conversation.map((message) => {
            return (
              <div
                key={message.content}
                className={cn(
                  'flex items-center rounded-xl rounded-tr py-[7px] px-3 font-delius max-w-[80%]',
                  message.role === 'user'
                    ? 'self-end bg-[#DE9BC3]'
                    : 'self-start bg-[#E2E2E2]'
                )}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Form {...form}>
        <form
          className="focus-within:shadow-sm flex items-center p-2 w-full gap-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            name="prompt"
            render={({ field }) => (
              <FormItem className="flex flex-grow">
                <FormControl className="m-0 p-0">
                  <Input
                    className="w-full px-3 shrink-[0] rounded-[50px] bg-[#E2E2E2] bg-opacity-20 font-delius border-black border-[1px] border-solid outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    autoComplete="off"
                    disabled={isLoading}
                    placeholder="Type response here..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            className="bg-[#D2BBA0] hover:bg-[#bda589] rounded-[50px] text-[15px] text-black font-delius w-[75px]"
            disabled={isLoading}
          >
            SEND
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Chat;
