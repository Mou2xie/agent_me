import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import { getSystemPrompt } from "./getSystemPrompt";
import { knowledgeReader } from "./tools/knowledgeReader";

// Initialize model
const model = new ChatOpenAI({
    model: 'deepseek/deepseek-v4-flash-0731',
    apiKey: process.env.OPENROUTER_API_KEY,
    configuration: {
        baseURL: 'https://openrouter.ai/api/v1'
    }
});

// Initialize agent with model, system prompt, and tools
export const agent = createAgent({
    model,
    systemPrompt: await getSystemPrompt(),
    tools: [knowledgeReader],
})
