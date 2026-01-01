import fs from 'fs';

export const mdFileReader = (filePath: string): string | undefined => {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (err) {
        console.error(err);
    }
}