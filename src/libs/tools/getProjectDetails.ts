import { tool } from "ai";
import { z } from "zod";
import { mdFileReader } from "../mdFileReader";
import * as path from 'path';

export const getProjectDetails = tool({
    description: "Get a specific project details by its name",
    inputSchema: z.object({
        projectName: z.string().describe('the project name'),
    }),
    execute: async ({ projectName }) => {

        const projectMap: Record<string, string> = {
            'LingoPick': 'lingopick.md',
            'speakingpass.com': 'speakingpass.md',
            'Transider': 'transider.md',
            'horoscopechinois.today': 'chinesehoroscope.md',
            'grokani.love': 'grokani.md',
            'molibb.baby': 'gameaccountmanager.md',
            'yongxie.dev': 'yongxie.md',
            'Hu-Landscaping': 'landscaping.md',
            'n8n Tender Document Generator': 'tendordocumentgenerator.md',
            'n8n Fortune Generator': 'fortune.md',
            'n8n Google Trends Keywords Tool': 'googletrendkeywords.md',
        };

        const fileName = projectMap[projectName];
        if (!fileName) {
            return `Project "${projectName}" not found.`;
        }
        const filePath = path.join(process.cwd(), 'src', 'assets', 'projects', fileName);
        const content = mdFileReader(filePath);
        return content;
    },
});