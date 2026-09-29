---
id: lingopick
title: LingoPick
category: independent-product
aliases: ["LingoPick", "AI vocabulary extension", "词汇插件"]
source_refs:
  - "Resume/Facts/Projects/Other Projects.md"
source_snapshot: "2026-09-21"
visibility: public
---

# LingoPick

## Product and role

LingoPick was an independently developed AI vocabulary browser extension built as an upgrade to Transider's free features. Its public product page described contextual translation, a private vocabulary bank, flashcards, and translation from English into 33 languages. Yongjie Xie designed and implemented its premium membership functionality.

## Personal implementation

- Built the extension with WXT, React, TypeScript, Vite, Tailwind CSS, and DaisyUI.
- Used Supabase PostgreSQL and Auth, localforage, the Google Gemini API, and DeepSeek through the OpenAI SDK for documented product workflows.
- Integrated Gumroad licence validation to support paid membership functionality. This establishes a payment feature, not a paying-customer count, subscription-billing mechanics, or revenue.
- Used Figma for product design; the supplied record also lists use-immer in the React implementation.

## Status

Development and operation stopped after weak product performance. Do not describe LingoPick as an actively maintained product or transfer Transider's usage figures to it. Flashcards were documented, but a spaced-repetition algorithm and React Native companion were roadmap items, not established shipped features.

## Links

- Product page: https://www.lingopick.net/
- Repository: https://github.com/Mou2xie/lingoPick_public
- Figma: https://www.figma.com/design/MVUYNNXyCxGtkKeYwp8iD9/LingoPick
