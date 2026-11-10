---
id: lighter
title: Lighter
category: independent-product
aliases: ["Lighter", "@yong_xie/lighter", "AI agent framework", "轻量 AI 智能体框架"]
source_refs:
  - "Resume/Facts/Projects/Lighter.md"
  - "https://www.lighteragent.dev/zh/"
  - "https://github.com/Mou2xie/lighter"
source_snapshot: "2026-11-10"
visibility: public
---

# Lighter

## Product and role

Lighter is Yongjie Xie's independently developed, open-source TypeScript framework for building AI agents. Started in October 2026, it is publicly distributed as `@yong_xie/lighter` on npm, with an official website and English/Chinese documentation. As of 2026-11-10, version 0.1.0 is published under the ISC license and the product is in Alpha; its API may change.

Yongjie is the sole human developer, framework designer, and npm package maintainer. He owns the framework, website, documentation, and publication. The vast majority of framework code was handwritten; OpenAI and Claude provider adapters were completed with AI assistance, tests were AI-written, and the website and documentation were completed by AI. Independent ownership does not mean every part was manually authored.

## Motivation and approach

After using LangChain for agent development, Yongjie found its breadth heavier than many of his use cases required and experienced friction with its documentation. Inspired by Pi's simplicity, he built his first framework to deepen his understanding of agents and create a small, intuitive core with explicit extension points. This is his reported motivation, not a measured performance comparison with LangChain or a contribution to Pi.

## Framework implementation

- Designed the Provider → Model → Agent composition: Provider adapts a model service, Model wraps calls and model hooks, and Agent coordinates the model–tool loop. Shared Message, Tool, and Hook components support communication and extension.
- Implemented the core loop to call the model, append assistant messages, execute requested tools sequentially, append paired results, and repeat until the model stops requesting tools.
- Defined Zod-backed tools with inferred argument types, runtime validation, and provider-facing JSON Schema. Missing tools, malformed arguments, validation failures, and thrown tool errors become paired error tool messages.
- Exposed async-generator streaming for text deltas, provider-dependent reasoning deltas, and a final run result. Results contain only newly generated messages; applications maintain and persist their own conversation history.
- Provided four lifecycle hooks: BeforeAgentHook, BeforeModelHook, AfterModelHook, and AfterAgentHook. Hooks can inspect or replace requests and messages; the final agent hook runs after successful completion, not as guaranteed cleanup.
- Integrated built-in OpenAI, Claude, and DeepSeek provider adapters through shared invoke/stream contracts. OpenAI uses the OpenAI SDK and Responses API; Claude uses the Anthropic SDK and Messages API. Provider SDK failures are normalized into ModelError categories. OpenAI/Claude adapter implementation was AI-assisted.
- Published an ESM npm package with TypeScript declarations. Framework tooling includes TypeScript, Node.js, Zod, npm, pnpm, and Git. The repository includes AI-written offline tests using mocked HTTP/SSE and compile-only type checks.

## Status and technical boundaries

Lighter provides a core model–tool loop rather than a complete agent harness. It does not currently include persistent memory/session storage, a built-in turn limit, a unified cancellation/timeout/retry policy, tool isolation, parallel tool execution, monitoring, built-in skills/MCP integration, RAG ingestion, or multi-agent orchestration. Applications supply those capabilities when needed. Custom providers can implement the shared interface; this does not establish additional bundled adapters.

The supplied facts record npm 0.1.0 publication on 2026-11-07 UTC (2026-11-06 in Toronto). The reviewed repository snapshot is later than the published package and includes API/export differences, so current main and the published artifact should not be presented as identical. The website's version label does not prove that every documented detail is in the published package.

The source record reviewed implementation and representative tests without running the suite or live model requests. Mocked tests and adapter code do not establish live-provider compatibility or production reliability. No adoption, revenue, speed, cost, or accuracy outcome is established; npm availability alone is not adoption evidence.

## Links

- Website: https://www.lighteragent.dev/
- Chinese website: https://www.lighteragent.dev/zh/
- Repository: https://github.com/Mou2xie/lighter
- npm: https://www.npmjs.com/package/@yong_xie/lighter
