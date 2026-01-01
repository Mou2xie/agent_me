import { tool } from "ai";
import { z } from "zod";
import { mdFileReader } from "../mdFileReader";
import * as path from 'path';

export const getMyWorkExperience = tool({
    description: "Get my working experience as product manager in past 10 years",
    inputSchema: z.object().describe('no input required'),
    execute: () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myWorkExperience.md')),
});