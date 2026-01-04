import { tool } from "langchain";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMyProjectsIndex = tool(
    () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myProjectIndex.md')),
    {
        name: 'getMyProjectsIndex',
        description: "Get all my indie projects list including web app, browser extension, AI agent/workflow, figma design and my github address",
    }
);