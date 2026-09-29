import { readFile, realpath } from 'node:fs/promises';
import { extname, relative, resolve, sep } from 'node:path';
import { tool } from 'langchain';
import { z } from 'zod';

const assetsPath = resolve(process.cwd(), 'src', 'assets');
const knowledgePath = resolve(assetsPath, 'knowledge');

export const knowledgeReader = tool(
    async ({ path }): Promise<string> => {
        try {
            // Resolve symlinks so the containment check sees the real location,
            // and a missing file is handled by the catch below.
            const [filePath, knowledgeRoot] = await Promise.all([
                realpath(resolve(assetsPath, path)),
                realpath(knowledgePath),
            ]);
            const relativePath = relative(knowledgeRoot, filePath);

            // Only allow Markdown files inside the knowledge base.
            if (
                !relativePath ||
                relativePath === '..' ||
                relativePath.startsWith(`..${sep}`) ||
                extname(filePath).toLowerCase() !== '.md'
            ) {
                return 'Invalid document path. Use a Markdown link target from the knowledge index.';
            }

            return await readFile(filePath, 'utf-8');
        } catch (error) {
            console.error(`Failed to read knowledge document ${path}:`, error);
            return 'Unable to read the requested knowledge document.';
        }
    },
    {
        name: 'knowledgeReader',
        description: 'Read a Markdown document from the knowledge base by its path in the knowledge index.',
        schema: z.object({
            path: z.string().describe(
                'Exact link target from the knowledge index, such as knowledge/profile.md or '
                + 'knowledge/projects/transider.md.'
            ),
        }),
    },
);
