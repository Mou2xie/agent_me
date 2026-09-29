---
id: novaagent
title: NovaAgent
category: team-capstone
aliases: ["NovaAgent", "no-code agent platform", "零代码智能体平台"]
source_refs:
  - "Resume/Facts/Projects/NovaAgent.md"
source_snapshot: "2026-09-21"
visibility: public
---

# NovaAgent

## Product and team context

NovaAgent is a no-code platform for creating and sharing AI agents backed by uploaded knowledge bases. It was built from January to April 2026 as a **five-person capstone**, with a frontend, streaming chat API, and Python document-ingestion service. Yongjie Xie served as project leader and primary full-stack and AI-workflow contributor; it was not an independently developed product.

## Yongjie Xie's documented contributions

- Designed and implemented the agent-management dashboard for persona, tone, behavior, and keyword-rule configuration, plus a mobile-friendly public agent interface.
- Built the RAG ingestion service for PDF, DOCX, TXT, and Markdown uploads, including chunking, embedding generation, task-status updates, and retrieval through Supabase PostgreSQL RPC/vector matching.
- Built configurable keyword-rule chat middleware and worked on a Hono-based streaming agent API on Cloudflare Workers using LangChain, the Vercel AI SDK, and OpenRouter.
- Personally deployed the Python/FastAPI RAG and embedding workflow to Railway; the frontend was deployed on Vercel.
- Maintained a Notion workspace for the five-person team's scope, tasks, milestones, meetings, and decisions.

## Technical context and outcome

The documented frontend uses React, TypeScript, Vite, Tailwind CSS, React Router, TanStack Query, and Zustand. Supabase provides PostgreSQL and realtime processing-status synchronization. This project documents an embedding and vector-retrieval pipeline; it does not document model training or fine-tuning.

The team won **1st Place at the Mobile and Web Development Winter 2026 ACSIT Capstone Showcase**. Yongjie Xie confirmed the product was running on 2026-09-21; this dated confirmation does not establish uninterrupted uptime or an ongoing feature-development schedule.

## Links

- Website: https://www.novaagent.me/
- Frontend: https://github.com/Mou2xie/agent_builder_frontend
- Backend: https://github.com/Mou2xie/agent_builder_backend
- RAG service: https://github.com/Mou2xie/agent_builder_rag_service
