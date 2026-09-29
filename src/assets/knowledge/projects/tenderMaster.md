---
id: tender-master
title: Tender Master
category: client-delivery
aliases: ["Tender Master", "tender document generator", "投标文件生成"]
source_refs:
  - "Resume/Facts/Projects/Tender Master.md"
source_snapshot: "2026-09-21"
visibility: public
---

# Tender Master

## Project and role

Tender Master is a Python command-line workflow for drafting and assembling tender documents. Yongjie Xie independently implemented it as custom development for a client in March 2026. It is a client delivery, not an additional self-owned product. No user interface was implemented in the supplied project record.

## Personal implementation

- Parsed a hierarchical Markdown outline into chapter-writing tasks and structured plans.
- Built distinct planner, writer, and quality-checker roles with LangGraph `@task` and `@entrypoint` orchestration.
- Used Pydantic schemas for structured plans, chapter content, and pass/fail feedback. Failed chapters could be sent back to the writer with feedback up to configured retry limits.
- Persisted plans and chapters as inspectable JSON artifacts, then used python-docx to reconstruct heading hierarchy and produce a formatted Word draft.
- Integrated LLMs through LangChain, `langchain-openrouter`, and OpenRouter. Python and uv were part of the candidate-confirmed stack.

## Delivery boundary

The output is a draft for human review. The seven-dimension checker, schemas, and retry loop document a quality-control mechanism, not guaranteed bid compliance, acceptance, or final-document quality. The supplied facts do not verify claims that turnaround fell from weeks to under a day or that complete drafts were produced in minutes. Exact behavior after retry exhaustion is also not established.
