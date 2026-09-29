---
id: agent-yong
title: Agent Yong
category: independent-product
aliases: ["Agent Yong", "数字分身"]
source_refs:
  - "Resume/Facts/Projects/Agent Yong.md"
source_snapshot: "2026-09-29"
visibility: public
---

# Agent Yong

## Product and role

Agent Yong is Yongjie Xie's independently built conversational portfolio for recruiters, hiring managers, and collaborators. Visitors can ask about his professional background, technical skills, projects, and product thinking in natural language. The project began in December 2025. Yongjie owned the product concept, application architecture, responsive chat interface, server-side chat route, agent and tool design, Markdown knowledge sources, deployment, and maintenance.

## Current implementation

- Built the web app with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4. The responsive chat interface includes preset questions to help first-time visitors get started.
- Connected the chat API route to a LangChain.js agent and streamed responses to the React client through the Vercel AI SDK and `@ai-sdk/langchain`.
- Loaded a knowledge index alongside the system prompt. The index describes available Markdown records, and the agent can select and read full documents on demand before answering detailed questions.
- Provided one Zod-validated `knowledgeReader` tool. It accepts document paths from the index and restricts reads to Markdown files within `src/assets/knowledge/`, including a check of resolved paths and symlinks.
- Configured `deepseek/deepseek-v4-flash-0731` through OpenRouter in the reviewed implementation. The prompt instructs the agent to answer in the visitor's language and ground specific claims in retrieved records.

## Status and technical boundaries

The project record confirms a new implementation iteration on 2026-09-29; the latest explicit confirmation that the application was running is from 2026-09-21. These dated confirmations do not establish uninterrupted uptime or a maintenance cadence.

The current retrieval design is **agentic RAG with indexed, file-based tool retrieval**. The reviewed implementation does not use embeddings, a vector database, or similarity search. The prompt asks the agent to read relevant records before making specific claims, but neither the prompt nor tool availability guarantees a tool call or factual accuracy on every turn. The six fixed retrieval tools and Gemini Flash configuration describe an older version.

## Links

- Website: https://www.agentyong.chat/
- Repository: https://github.com/Mou2xie/agent_me
