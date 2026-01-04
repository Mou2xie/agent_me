'use client';

import Image from 'next/image';
import { useChat } from '@ai-sdk/react';
import { useMemo, useState } from 'react';
import { DefaultChatTransport } from 'ai';

export default function Chat() {

  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    })
  });
  const isDefault = useMemo(() => messages.length === 0, [messages]);

  return (
    <div className={` h-screen flex flex-col mx-5 lg:max-w-3xl lg:mx-auto ${isDefault ? 'justify-center gap-5' : 'justify-start'}`}>

      {isDefault ? (
        // default state
        <div className=' flex justify-center items-center gap-5'>
          <Image src="/avatar.svg" alt="avatar" width={300} height={300} className=' lg:hidden w-[80px] h-[80px]' />
          <Image src="/hero.png" alt="Logo" width={300} height={300} className=' hidden lg:block lg:w-[250px] lg:h-[250px] rounded-2xl' />
          <div className=' lg:mt-10 space-y-1'>
            <h1 className=' text-3xl lg:text-5xl font-anton text-text-highlight '>Hello, my friend</h1>
            <p className=' lg:text-xl'>I'm digital version of Yong Xie, glad to chat with you.</p>
          </div>
        </div>
      ) :
        // chat list
        <div className=' grow pt-24 overflow-y-auto no-scrollbar '>
          {
            messages.map(({ id, role, parts }) => (
              <div className={`flex ${role === 'user' ? ' justify-end' : ''}`} key={id}>
                <div className={`my-3 p-3 rounded-2xl ${role === 'user' ? ' text-right bg-[#2E7C36] text-text-highlight' : ''}`}>
                  {parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return <p key={`${id}-${i}`} className=' whitespace-pre-wrap'>{part.text}</p>;
                    }
                  })}
                </div>
              </div>
            ))
          }
        </div>
      }

      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.trim()) return;
          sendMessage({ text: input });
          setInput('');
        }}
        className=' relative shrink-0 mb-10 '
      >
        <input
          className=" bg-stone-950 w-full p-4 rounded-2xl focus:outline-none"
          value={input}
          placeholder="Ask away ..."
          onChange={e => setInput(e.currentTarget.value)}
        />
        <button type="submit" className=' absolute right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all hover:cursor-pointer '>
          <Image src="/send-icon.svg" alt="send" width={25} height={25} />
        </button>
      </form>
    </div>
  );
}