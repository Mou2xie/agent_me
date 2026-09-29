---
id: molibb
title: molibb.baby — Game Account Manager
category: independent-product
aliases: ["molibb.baby", "molibb", "Game Account Manager", "Cross Gate", "游戏账号管理"]
source_refs:
  - "Resume/Facts/Projects/Other Projects.md"
source_snapshot: "2026-09-21"
visibility: public
---

# molibb.baby — Game Account Manager

## Product and role

Yongjie Xie independently built a lightweight account and character management tool for a friend who plays Cross Gate. The project used AI-assisted development. He reports completing feature development and launching it within one day; this is a candidate-reported duration, not a measured productivity comparison.

## Personal implementation

- Built the web app with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, DaisyUI v5, and Lucide React.
- Used Dexie.js over IndexedDB for a local account and character data model, with a documented service layer around data access.
- The supplied project record does not establish shipped cloud sync, PWA installation, or export/import features; those appeared in the repository roadmap.

## Links

- Website: https://www.molibb.baby/
- Repository: https://github.com/Mou2xie/gameAccountManager
