# AGENTS.md

This file provides guidelines for agentic coding assistants working on the agent_me repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Note:** This project currently has no test or lint scripts configured. When adding tests or linting, update package.json scripts accordingly.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode enabled)
- **AI Orchestration:** LangChain.js + Vercel AI SDK
- **Styling:** Tailwind CSS v4
- **Validation:** Zod
- **LLM Provider:** OpenRouter (Google Gemini Flash)

## Code Style Guidelines

### Imports

- Use named imports for library dependencies
- Group imports: external libraries first, then local imports
- Use path aliases (`@/`) for imports from `src/` directory
- Example:
  ```typescript
  import { tool } from "langchain";
  import { mdFileReader } from "../mdFileReader";
  import * as path from 'path';
  ```

### File Naming & Structure

- Use camelCase for TypeScript/JavaScript files (e.g., `mdFileReader.ts`, `getSystemPrompt.ts`)
- Use PascalCase for React components (e.g., `ChatContent.tsx`)
- Directory structure:
  - `src/app/` - Next.js app router pages and API routes
  - `src/libs/` - Shared utilities and business logic
  - `src/libs/tools/` - LangChain tools for AI agent
  - `src/assets/` - Markdown files and static assets

### TypeScript & Types

- Strict mode is enabled in tsconfig.json
- Use explicit return types for exported functions
- Use `z.object()` for tool input validation schemas
- Example:
  ```typescript
  export const getProjectDetails = tool(
    ({ projectName }) => { ... },
    {
      name: 'getProjectDetails',
      description: "Get a specific project details by its name",
      schema: z.object({
        projectName: z.string().describe('the project name'),
      }),
    }
  );
  ```

### Naming Conventions

- **Functions/Variables:** camelCase (`getMyWorkExperience`, `sendMessage`)
- **React Components:** PascalCase (`ChatContent`, `NavBar`)
- **Constants:** camelCase or UPPER_CASE for globals (`projectMap`, `process.env`)
- **Tool Names:** camelCase matching the function name (`getMyWorkExperience`)
- **Tool Descriptions:** Sentence case, descriptive (`"Get my previous working experience as product manager..."`)

### Error Handling

- Wrap file operations in try/catch blocks
- Log errors to console, but avoid exposing sensitive details
- Return undefined or error messages for failed operations
- Example:
  ```typescript
  export const mdFileReader = (filePath: string): string | undefined => {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      return content;
    } catch (err) {
      console.error(err);
    }
  }
  ```

### React Components

- Use `'use client'` directive at the top of client components
- Use `useMemo` for expensive computations
- Destructure props in function signature
- Example:
  ```typescript
  'use client';
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) { ... }
  ```

### LangChain Tools

- Export tools using `tool()` from langchain
- Always provide `name` and `description` in tool options
- Use Zod schemas for tools that accept parameters
- Tools should read from `src/assets/` markdown files, not return hardcoded data

### API Routes

- Place in `src/app/api/` following Next.js App Router conventions
- Use named exports for route handlers (e.g., `export async function POST`)
- Set `export const maxDuration = 60` for AI streaming endpoints
- Return streaming responses using `createUIMessageStreamResponse`

### Styling with Tailwind

- Use utility classes directly in JSX
- Prefix custom color utilities with semantic names (e.g., `text-text-highlight`, `bg-accent-green`)
- Use responsive prefixes (`lg:`, `md:`) for responsive design
- Example:
  ```tsx
  <div className="h-screen flex flex-col mx-5 lg:max-w-3xl lg:mx-auto">
  ```

### Code Formatting

- Use 4-space indentation
- No trailing whitespace
- Keep lines under 100 characters when practical
- Use blank lines sparingly between logical sections

## Project-Specific Patterns

### Path Resolution

- Use `path.join(process.cwd(), 'src', ...)` for absolute paths to assets
- Example: `path.join(process.cwd(), 'src', 'assets', 'myWorkExperience.md')`

### Environment Variables

- Access via `process.env.VARIABLE_NAME`
- Required: `OPENROUTER_API_KEY`
- Store in `.env.local` (not committed)

### Client vs Server Components

- Use client components for interactive UI (useChat, useState, event handlers)
- Use server components for data fetching and API routes
- Mark client components with `'use client'` at file top

## When Adding Features

1. If adding a new tool for the agent:
   - Create file in `src/libs/tools/`
   - Use `tool()` from langchain
   - Provide clear description for AI to understand when to use it
   - Add to tools array in `src/libs/agent.ts`

2. If adding new markdown content:
   - Place in `src/assets/` directory
   - Use clear, descriptive filenames
   - Update corresponding tool to read the new file

3. If modifying AI behavior:
   - Update system prompt in `src/assets/systemPrompt.md`
   - Or modify tool descriptions for better function calling

4. Always test the chat interface after changes to ensure AI tools work correctly
