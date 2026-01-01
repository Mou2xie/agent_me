import { UIMessage, createAgentUIStreamResponse } from "ai";
import { agent } from "@/libs/agent";


export async function POST(req: Request) {

    const { messages }: { messages: UIMessage[] } = await req.json();

    return createAgentUIStreamResponse({
        agent,
        uiMessages: messages,
    });
}

