import { tool } from 'langchain';
import path from 'path';
import { mdFileReader } from '../mdFileReader';

export const getMyPersonalTraits = tool(
    () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myPersonalTraits.md')),
    {
        name: 'getMyPersonalTraits',
        description: 'Get my personal traits, including self-learning ability, how I taught myself to program, hobbies etc.',
    }
);