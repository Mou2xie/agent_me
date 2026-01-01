import { mdFileReader } from "./mdFileReader";
import * as path from 'path';

export const getSystemPrompt = () => {
    return mdFileReader(path.join(process.cwd(), 'src', 'assets', 'systemPrompt.md'));
}