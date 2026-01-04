import { tool } from "langchain";
import { mdFileReader } from "../mdFileReader";
import * as path from 'path';

export const getMyWorkExperience = tool(
    () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myWorkExperience.md')),
    {
        name: 'getMyWorkExperience',
        description: "Get my previous working experience as product manager in past over 10 years",
    }
);