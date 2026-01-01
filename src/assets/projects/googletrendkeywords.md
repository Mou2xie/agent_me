# n8n Google Trends Keywords Tool
### AI Workflow to Find Product Ideas from Google Trends

## Workflow Overview
**My automated pipeline** is engineered to streamline SEO keyword research by transforming raw Google search trend data into actionable marketing insights. I designed this system to address the bottleneck of manual keyword analysis by automating the ingestion of CSV files, performing complex data normalization, and utilizing Large Language Models (LLMs) to interpret user intent.

The input is a raw CSV file containing trending keywords and metrics, while my output is a structured, enriched CSV report detailing keyword explanations and psychological search intent.

## Process Introduction

### 1. Binary Ingestion and Normalization
I configured the workflow to initiate via an **On form submission** node, handling multiple CSV uploads simultaneously. To ensure consistent data handling downstream, I implemented a custom **Rename file** JavaScript node to standardize the binary keys. This is followed by the **Extract from File** node, where I convert the binary table data into a JSON format suitable for programmatic manipulation.

### 2. Data Transformation and Intelligent Analysis
I utilized a **Data type convertion** node with a specialized JS script to parse localized search volume strings (e.g., handling "万" or "+") into sortable integers. After performing a **Sort by search volume** operation, I deploy an **AI Agent**—powered by **Gemini 2.5 Flash** via OpenRouter—to process each keyword.

I governed this agent with a **Structured Output Parser** that enforces a strict JSON Schema, ensuring the AI's explanation and intent analysis remain programmatic and reliable.

### 3. Serialization and Local Persistence
Once the AI-generated insights are collected, I use the **Convert to File** node to re-serialize the structured data back into a CSV format. Finally, I configured the **Read/Write Files from Disk** node to persist the enriched report to a local directory with a dynamic timestamped filename (`explanation_YYYY-MM-DD.csv`), completing the data lifecycle.

## Architecture Highlights

### Rigid Data Consistency
I employed a **JSON Schema-backed Structured Output Parser** to prevent "hallucinations" and ensure the AI's response perfectly aligns with the required technical format.

### Robust Data Pre-processing
I implemented custom JavaScript logic to handle irregular string