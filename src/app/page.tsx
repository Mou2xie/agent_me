'use client';

import Image from 'next/image';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function Chat() {

  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();

  return (
    <div className={` h-screen flex flex-col ${messages.length === 0 ? 'justify-center' : 'justify-start'} ${messages.length > 0 ? 'pt-10' : ''}  lg:max-w-3xl lg:mx-auto ${messages.length > 0 ? '' : 'gap-5'}`}>

      {messages.length === 0 ? (
        <div className=' flex items-center gap-5'>
          <Image src="/avatar.svg" alt="avatar" width={300} height={300} className=' lg:hidden w-[80px] h-[80px]' />
          <Image src="/me.png" alt="Logo" width={300} height={300} className=' hidden lg:block lg:w-[250px] lg:h-[250px]' />
          <div className=' lg:mt-20 space-y-1'>
            <h1 className=' text-3xl lg:text-5xl font-anton text-text-highlight '>Hello, my friend</h1>
            <p className=' lg:text-xl'>I'm digital agent of Yong Xie, glad to chat with you.</p>
          </div>
        </div>
      ) :
        <div className=' grow'>
          {
            messages.map(message => (
              <div className={`flex ${message.role === 'user' ? ' justify-end' : ''}`} key={message.id}>
                <div className={`my-3 p-3 rounded-2xl ${message.role === 'user' ? ' text-right bg-stone-900' : ''}`}>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return <div key={`${message.id}-${i}`}>{part.text}</div>;
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
          sendMessage({ text: input });
          setInput('');
        }}
        className=' relative mb-10'
      >
        <input
          className=" bg-stone-900 w-full px-4 py-4 rounded-2xl focus:outline-none"
          value={input}
          placeholder="What do you want to know?"
          onChange={e => setInput(e.currentTarget.value)}
        />
        <button type="submit" className=' absolute right-4 top-1/2 -translate-y-1/2 hover:scale-110 transition-all hover:cursor-pointer '>
          <Image src="/send-icon.svg" alt="send" width={25} height={25} />
        </button>
      </form>
    </div>
  );
}