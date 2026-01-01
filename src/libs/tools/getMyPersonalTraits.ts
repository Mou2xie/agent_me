import { tool } from 'ai';
import { z } from 'zod';
import path from 'path';
import { mdFileReader } from '../mdFileReader';

export const getMyPersonalTraits = tool({
    description: 'Get my personal traits, including self-learning ability, how I taught myself to program, hobbies etc.',
    inputSchema: z.object({}).describe('no input needed'),
    execute: () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myPersonalTraits.md')),
});