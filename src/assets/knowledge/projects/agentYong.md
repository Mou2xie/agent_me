---
id: agent-yong
title: Agent Yong
category: independent-product
aliases: ["Agent Yong", "数字分身"]
source_refs:
  - "Resume/Facts/Projects/Agent Yong.md"
source_snapshot: "2026-09-21"
visibility: public
---

# Agent Yong

## Product and role

Agent Yong is Yongjie Xie's independently built conversational portfolio. Recruiters and other visitors can ask about his experience, skills, projects, and product thinking. He started the project in December 2025 and owned its product concept, interface, chat API, agent design, Markdown knowledge structure, and deployment.

## Documented implementation through the source snapshot

- Built the web app with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.
- Connected a server-side chat route to a LangChain.js agent and streamed replies to the React interface through the Vercel AI SDK.
- Used OpenRouter for model access and Zod for structured tool-input validation.
- Organized career and project information in local Markdown files, exposed to the agent through scoped function-calling tools.
- Added a responsive chat interface and preset questions to help first-time visitors explore the portfolio.

## Status and technical boundary

Yongjie Xie confirmed the application was running on 2026-09-21. The supplied project record describes **tool-based, Markdown-grounded retrieval**, not an embedding index or vector database. Tool access is intended to reduce unsupported answers but cannot guarantee that every response is accurate or that every turn invokes a tool. This is a snapshot of the recorded implementation; later v2 work should be described only after it exists.

## Links

- Website: https://yongxie.dev/ (current domain confirmed by Yongjie Xie on 2026-09-28)
- Repository: https://github.com/Mou2xie/agent_me
