import { toBaseMessages, toUIMessageStream } from '@ai-sdk/langchain';
import { UIMessage, createUIMessageStreamResponse } from "ai";
import { agent } from "@/libs/agent";

export const maxDuration = 60;

export async function POST(req: Request) {
    const { messages }: { messages: UIMessage[] } = await req.json();

    // Convert AI SDK UIMessages to LangChain messages
    const langchainMessages = await toBaseMessages(messages);

    // Stream the response from the model
    const stream = await agent.stream(
        { messages: langchainMessages },
        { streamMode: ['values', 'messages'] },
    );

    // Convert the LangChain stream to UI message stream
    return createUIMessageStreamResponse({
        stream: toUIMessageStream(stream),
    });

}
