---
id: speakingpass
title: SpeakingPass
category: independent-product
aliases: ["SpeakingPass", "IELTS Speaking", "雅思口语"]
source_refs:
  - "Resume/Facts/Projects/SpeakingPass.md"
source_snapshot: "2026-09-21"
visibility: public
---

# SpeakingPass

## Product and role

SpeakingPass is an IELTS Speaking preparation website with a structured question bank for Parts 1, 2, and 3, seasonal topic organization, sample answers, and strategy tips. Yongjie Xie independently owned its product direction, content workflow, UI/UX, architecture, implementation, deployment, and maintenance from October 2024 onward.

## Personal implementation

- Built the site with Next.js 15 App Router, React 19, TypeScript, React Server Components, Server Actions, Tailwind CSS v4, and DaisyUI v5.
- Modeled IELTS topics and related content in three Supabase PostgreSQL tables with relational queries. Supabase acts as the structured content store; content editing does not require editing application source.
- Kept content queries on the server rather than adding a separate application API route layer. Only documented interactive UI components use client rendering.
- Implemented dynamic page metadata and build-time sitemap generation with next-sitemap. Also integrated Google Analytics 4 and Google AdSense.
- Designed responsive layouts and a content workflow for current-season, must-test, and archived topics.

## Outcome and limits

Google Analytics recorded **1,150 monthly active users in August 2026**, reconfirmed by Yongjie Xie. This figure belongs only to SpeakingPass. SEO implementation does not establish how much traffic it caused, and AdSense integration does not by itself establish revenue or profitability. The supplied facts confirm ongoing operation and iteration; they do not establish measured page-speed or bundle-size improvements.

## Links

- Website: https://speakingpass.com
- Repository: https://github.com/Mou2xie/SpeakingPass_v3
- Figma: https://www.figma.com/design/sev2kFiBxPmh67C1YcZPlU/SpeakingPass_v3
