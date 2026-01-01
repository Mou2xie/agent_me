# n8n Fortune Generator
### Generate fortunes for users of horoscopechinois.today

## Workflow Overview
**My Fortune Generator** is a sophisticated automated pipeline I designed to bridge traditional Chinese horoscopes with modern lifestyle content. I built this to solve the challenge of generating high-volume, structured, and stylistically consistent editorial content by leveraging LLMs.

My workflow takes user-defined date ranges and scopes (daily, weekly, monthly, or yearly) as input and outputs fully validated, multi-dimensional fortune data directly into a Supabase database for application consumption.

## Process Introduction

### 1. Multi-Dimensional Trigger & Data Preparation
I configured the process to initiate via an **On form submission** node, capturing user parameters.
- **Temporal Alignment:** I implemented a JS-based **Date Generator** to calculate and align UTC dates based on the requested scope.
- **Zodiac Logic:** Simultaneously, I utilized a **Zodiac Provider** to inject a static array of unique Zodiac IDs and names, ensuring all twelve signs are processed for the given timeframe.

### 2. Intelligent Orchestration & AI Synthesis
I synchronized these data streams through a **Merge** node and passed them to the **AI Agent**.
- **Model:** I configured the agent to use the **OpenRouter Chat Model (GPT-4o-mini)**.
- **Strict Controls:** I employed a **Structured Output Parser** and designed a complex system prompt. This enforces a specific French editorial tone and strict length requirements (300+ words per detail) while adhering to a rigorous JSON Schema for five distinct fortune categories.

### 3. Data Normalization & Persistence
Once the AI generates the content, my **Output Format Changer** executes custom JavaScript to flatten and clean the nested JSON structure. This ensures the payload is compatible with the backend schema before the **Supabase (Create a row)** node performs bulk insertion, making the poetic fortunes instantly available to the end-user platform.

## Architecture Highlights

### Schema-First Design
I utilized a Structured Output Parser to guarantee 100% JSON compliance, ensuring seamless API integration regardless of the AI's variability.

### Complex Temporal Logic
I wrote custom JS nodes to handle UTC date alignment for different calendar scopes (weeks, months, years), ensuring accurate delivery across time zones.

### Advanced Prompt Engineering
My strategy employs specific persona constraints and length-checks, ensuring the AI performs not just as a translator, but as a high-end lifestyle editor capable of generating long-form, evocative content.