import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const getSystemPrompt = async (): Promise<string> => {
    const assetsPath = join(process.cwd(), 'src', 'assets');

    // Read the system prompt and knowledge index files concurrently
    try {
        const [systemPrompt, knowledgeIndex] = await Promise.all([
            readFile(join(assetsPath, 'systemPrompt.md'), 'utf-8'),
            readFile(join(assetsPath, 'knowledgeIndex.md'), 'utf-8'),
        ]);

        // Extract the body of the knowledge index, excluding the frontmatter
        const indexBody = knowledgeIndex.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();

        return `${systemPrompt.trimEnd()}\n\n${indexBody}`;
    } catch (error) {
        console.error('Failed to load system prompt or knowledge index:', error);
        throw new Error('Unable to load the system prompt.');
    }
};
