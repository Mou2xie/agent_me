import { tool } from "langchain";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMySkills = tool(
    () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'mySkills.md')),
    {
        name: 'getMySkills',
        description: 'Get all the skills I have learned, including frontend, backend, database, AI dev, AI coding assistant, other tools etc.',
    }
);