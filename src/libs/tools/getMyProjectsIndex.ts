import { tool } from "ai";
import { z } from "zod";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMyProjectsIndex = tool({
    description: "Get all my projects list including web app, browser extension, AI agent/workflow, figma design and my github address",
    inputSchema: z.object({}).describe('no params required'),
    execute: () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myProjectIndex.md')),
});