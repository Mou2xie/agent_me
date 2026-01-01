import { tool } from "ai";
import { z } from "zod";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMySkills = tool({
    description: 'Get my skills including programming languages, tools, frameworks, and other skills',
    inputSchema: z.object().describe('No input needed'),
    execute: () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'mySkills.md')),
});