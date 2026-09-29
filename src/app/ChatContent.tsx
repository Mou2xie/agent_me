'use client';

import Image from 'next/image';
import { useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import { DefaultChatTransport } from 'ai';
import { useSearchParams } from 'next/navigation'

export default function ChatContent() {

    // Get the search params from the URL
    const searchParams = useSearchParams();
    const question = searchParams.get('q');

    // State to hold the input value
    const [input, setInput] = useState(question || '');

    // Initialize the chat hook with the default transport
    const { messages, sendMessage, status } = useChat({
        transport: new DefaultChatTransport({
            api: '/api/chat',
        })
    });

    // Determine the page state based on the messages and status
    const isDefault = messages.length === 0;
    const isLoading = status === 'submitted' || status === 'streaming';

    // Keep the message list pinned to the bottom while the user is already there
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isPinnedToBottomRef = useRef(true);

    const scrollToBottom = () => {
        const container = scrollContainerRef.current;
        if (container) container.scrollTop = container.scrollHeight;
    };

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const distanceFromBottom = container.scrollHeight - container.scrollTop - container.clientHeight;
        isPinnedToBottomRef.current = distanceFromBottom < 40;
    };

    useEffect(() => {
        if (isPinnedToBottomRef.current) scrollToBottom();
    }, [messages, isLoading]);

    const handleQuickQuestion = (question: string) => {
        isPinnedToBottomRef.current = true;
        sendMessage({ text: question });
    };

    return (
        <div className={` h-screen flex flex-col mx-5 lg:max-w-3xl lg:mx-auto ${isDefault ? 'justify-center gap-5' : 'justify-start'}`}>

            {isDefault ? (
                // default state
                <>
                    <div className=' flex justify-center items-center gap-5'>
                        <Image src="/avatar.svg" alt="avatar" width={300} height={300} className=' lg:hidden w-[80px] h-[80px]' />
                        <Image src="/hero.png" alt="Logo" width={300} height={300} className=' hidden lg:block lg:w-[250px] lg:h-[250px] rounded-2xl' />
                        <div className=' lg:mt-10 space-y-1'>
                            <h1 className=' text-3xl lg:text-5xl font-anton text-text-highlight '>Hello, my friend</h1>
                            <p className=' lg:text-xl'>I'm digital version of Yongjie Xie, glad to chat with you.</p>
                        </div>
                    </div>
                    <div className=' flex gap-3 mt-3 text-accent-green text flex-wrap'>
                        <button type="button" onClick={() => handleQuickQuestion('Do a brief introduction about yourself.')} className=' px-3 border border-accent-green rounded-full hover:bg-[#243626] hover:cursor-pointer'>Brief Intro </button>
                        <button type="button" onClick={() => handleQuickQuestion('Tell me about your personal traits.')} className=' px-3 border border-accent-green rounded-full hover:bg-[#243626] hover:cursor-pointer'>Personal Traits</button>
                        <button type="button" onClick={() => handleQuickQuestion('Tell me about your PM and tech background and how you transitioned between roles.')} className=' px-3 border border-accent-green rounded-full hover:bg-[#243626] hover:cursor-pointer'>PM & Tech Background</button>
                        <button type="button" onClick={() => handleQuickQuestion('Showcase all your projects and do a brief description of each of them')} className=' px-3 border border-accent-green rounded-full hover:bg-[#243626] hover:cursor-pointer'>Showcase Projects</button>
                        <button type="button" onClick={() => handleQuickQuestion('What is your tech stack and key technical skills?')} className=' px-3 border border-accent-green rounded-full hover:bg-[#243626] hover:cursor-pointer'>Key Technical Skills</button>
                    </div>
                </>
            ) :
                // chat list
                <div ref={scrollContainerRef} onScroll={handleScroll} className=' grow pt-24 overflow-y-auto no-scrollbar '>
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
                    {isLoading && (
                        <div className=' flex gap-2 my-3'>
                            <div className=' w-2 h-2 bg-accent-green rounded-full animate-bounce'></div>
                            <div className=' w-2 h-2 bg-accent-green rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></div>
                            <div className=' w-2 h-2 bg-accent-green rounded-full animate-bounce' style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    )}
                </div>
            }

            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.trim()) return;
                    isPinnedToBottomRef.current = true;
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
