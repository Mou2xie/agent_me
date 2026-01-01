import { tool } from "ai";
import { z } from "zod";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMySkills = tool({
    description: 'Get all the skills I have learned, including frontend, backend, database, AI dev, AI coding assistant, other tools etc.',
    inputSchema: z.object().describe('No input needed'),
    execute: () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'mySkills.md')),
});