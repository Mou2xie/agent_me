import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { ToolLoopAgent } from "ai";
import { getSystemPrompt } from "./getSystemPrompt";

// tools
import { getMyBasicInformation } from './tools/getMyBasicInformation';
import { getMyProjectsIndex } from './tools/getMyProjectsIndex';
import { getMySkills } from './tools/getMySkills';
import { getMyWorkExperience } from './tools/getMyWorkExperience';
import { getProjectDetails } from './tools/getProjectDetails';
import { getMyPersonalTraits } from './tools/getMyPersonalTraits';

const openRouter = createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY,
});

export const agent = new ToolLoopAgent({
    model: openRouter.chat('google/gemini-3-flash-preview'),
    instructions: getSystemPrompt(),
    tools: {
        getMyBasicInformation,
        getMyProjectsIndex,
        getMySkills,
        getMyWorkExperience,
        getProjectDetails,
        getMyPersonalTraits,
    },
});