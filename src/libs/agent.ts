import { createAgent } from "langchain";
import { ChatOpenAI } from "@langchain/openai";
import { getSystemPrompt } from "./getSystemPrompt";

// tools
import { getMyBasicInformation } from './tools/getMyBasicInformation';
import { getMyProjectsIndex } from './tools/getMyProjectsIndex';
import { getMySkills } from './tools/getMySkills';
import { getMyWorkExperience } from './tools/getMyWorkExperience';
import { getProjectDetails } from './tools/getProjectDetails';
import { getMyPersonalTraits } from './tools/getMyPersonalTraits';


const model = new ChatOpenAI({
    model: 'google/gemini-3-flash-preview',
    apiKey: process.env.OPENROUTER_API_KEY,
    configuration: {
        baseURL: 'https://openrouter.ai/api/v1'
    }
});

export const agent = createAgent({
    model,
    systemPrompt: getSystemPrompt(),
    tools: [
        getMyBasicInformation,
        getMyProjectsIndex,
        getMySkills,
        getMyWorkExperience,
        getProjectDetails,
        getMyPersonalTraits,
    ],
})