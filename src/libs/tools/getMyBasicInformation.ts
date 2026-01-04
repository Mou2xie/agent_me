import { tool } from "langchain";
import * as path from 'path';
import { mdFileReader } from "../mdFileReader";

export const getMyBasicInformation = tool(
    () => mdFileReader(path.join(process.cwd(), 'src', 'assets', 'myBasicInformation.md')),
    {
        name: 'getMyBasicInformation',
        description: ' Get my basic information, including name, age, gender, contact info, education background, personal brief introduction.',
    }
);
