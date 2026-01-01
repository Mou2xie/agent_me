import { tool } from "ai";
import { z } from "zod";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMyBasicInformation = tool({
    description: ' Get my basic information, like name, age, gender, contact info, education, personal brief etc.',
    inputSchema: z.object().describe('No input needed'),
    execute: () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myBasicInformation.md')),
});
