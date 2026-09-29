---
id: transider
title: Transider
category: independent-product
aliases: ["Transider", "随手记单词", "browser extension", "浏览器插件"]
source_refs:
  - "Resume/Facts/Projects/Transider.md"
source_snapshot: "2026-09-21"
visibility: public
---

# Transider

## Product and role

Transider is a Chrome extension for learning English while reading online. It lets users look up unfamiliar words in sentence context and save them for later review. Yongjie Xie independently designed, built, published, and maintained the extension, starting in December 2023. It was his first independently developed and publicly released software product.

## Personal implementation

- Built the Manifest V3 extension with WXT, React, TypeScript, content scripts, a service worker, and a Chrome Side Panel interface.
- Implemented double-click word detection, sentence extraction, contextual lookup, highlighted word rendering, and pronunciation playback.
- Built a vocabulary notebook with pagination, source-link navigation, preferences, and Excel export through xlsx/SheetJS.
- Used localforage over IndexedDB and extension storage for saved vocabulary. Supabase PostgreSQL holds dictionary data; the supplied record does not establish cloud synchronization of a user's saved words.
- Used webext-bridge for typed communication across extension contexts and Zustand for client state.

## Outcome and status

The extension was published in the Chrome Web Store. The candidate reconfirmed **1,100+ monthly active users for August 2026** from the Chrome Web Store Developer Dashboard. This is a dated, candidate-confirmed dashboard figure for Transider only. The supplied record confirms ongoing operation and iteration, without establishing uninterrupted uptime.

## Links

- Chrome Web Store: https://chromewebstore.google.com/detail/transider——随手记单词/iepaohcnkdejgafdmdifpepgpdbphhlo
- Repository: https://github.com/Mou2xie/Transider_v2
- Figma: https://www.figma.com/design/L22X0kY1g8xSfvKqbnzjdF/Transider
