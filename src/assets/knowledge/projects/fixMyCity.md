---
id: fix-my-city
title: Fix My City
category: team-capstone
aliases: ["Fix My City", "FixMyCity", "civic issue reporting", "城市问题上报"]
source_refs:
  - "Resume/Facts/Projects/Fix My City.md"
source_snapshot: "2026-09-21"
visibility: public
---

# Fix My City

## Product and team context

Fix My City is a civic-issue reporting capstone prototype built by a **five-person team** from February to April 2026. The team solution combined a Flutter citizen mobile app, a React administration dashboard, a Supabase data layer, maps, notifications, image moderation, and issue-triage workflows. The recorded deployment is a project snapshot, not a current uptime check or evidence of municipal adoption.

## Yongjie Xie's documented contributions

- Owned product and UI/UX design, including the citizen reporting journey and an administration-dashboard concept in Figma.
- Implemented an Express-based image-moderation pipeline using OpenAI Vision in the documented personal AI-workflow scope.
- Implemented a Deno Supabase Edge Function for GPT-4o-mini issue categorization and priority scoring, with a local heuristic fallback when the remote AI call failed.
- The Flutter mobile implementation, React dashboard, mapping, notification services, and wider database architecture are team-system context, not documented individual implementation by Yongjie Xie.

## Outcome and limits

The five-person team won **Best Final Year Project at the Conestoga College 2026 Tech Showcase**. The project reportedly drew interest from the City of Cambridge, Ontario; the supplied facts do not establish a contract, partnership, or adoption. The moderation flow has a documented fail-open path, so image screening should not be described as guaranteed. A configured 48-hour target was a project setting, not an achieved municipal service level.

## Links

- Landing page: https://fixmycity-welcome.vercel.app/
- Admin dashboard: https://fixmycityadmindashboard.vercel.app
