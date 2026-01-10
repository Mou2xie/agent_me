# Agent Yong - Digital Avatar of Yong Xie

> "Hello, my friend. I'm the digital agent of Yong Xie, glad to chat with you."

**Agent Yong** is an interactive AI-powered portfolio application. Instead of a static resume, it allows recruiters and hiring managers to have a natural conversation with my "digital twin" to learn about my background, skills, projects, and product thinking.

## 📖 Introduction

### The Problem
Traditional resumes and static portfolios often fail to capture the full depth of a candidate's personality, thought processes, and specific problem-solving abilities. Recruiters sift through hundreds of documents, often missing the unique value a candidate brings.

### The Solution
**Agent Me** bridges this gap by offering an **interactive experience**. It leverages Large Language Models (LLMs) to answer questions dynamically, showcasing my technical skills in AI engineering and my product mindset in creating user-centric solutions.

### My Role & Thinking
As a Product Manager turned Developer, I built this to demonstrate:
1.  **Product Thinking:** Solving the "engagement" problem in recruitment. The goal is to build trust and convert visitors into interview opportunities.
2.  **Technical Capability:** Proving my ability to build full-stack AI applications from scratch.

## ✨ Core Features

*   **💬 Interactive Chat Interface:** A clean, responsive chat UI where users can ask anything about my professional life.
*   **🧠 Context-Aware AI:** The agent understands context, detects language automatically, and maintains a professional persona.
*   **🛠️ Tool-Use & RAG:** Instead of relying solely on the model's training data, the agent uses custom "tools" to read real-time data from markdown files (Resume, Projects, Skills) to provide accurate, hallucination-free answers.
*   **📂 Deep Dive into Projects:** Users can ask for specific details about my indie projects, and the agent retrieves structured information.
*   **🎨 Responsive Design:** Built with mobile-first design principles using Tailwind CSS.

## 🛠️ Tech Stack

This project is built with a modern, performance-oriented stack:

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Language:** TypeScript
*   **AI Orchestration:** [LangChain.js](https://js.langchain.com/) & [Vercel AI SDK](https://sdk.vercel.ai/docs)
*   **LLM Provider:** OpenRouter (powering Google Gemini 1.5 Flash / Gemini 2.0 Flash)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Validation:** Zod

## 🚀 How to Run

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/agent_me.git
    cd agent_me
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env.local` file in the root directory and add your API key:
    ```env
    OPENROUTER_API_KEY=your_openrouter_api_key_here
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open in Browser**
    Visit `http://localhost:3000` to start chatting!

## 💡 Highlights & Reflections

### Challenges & Solutions
*   **Accuracy vs. Hallucination:** A key challenge was ensuring the AI didn't invent experiences. I implemented a **Tool-Use** architecture (Function Calling). The AI *must* call a function (e.g., `getMyWorkExperience`) to fetch data from my actual markdown resume files before answering.
*   **Latency:** To ensure a snappy chat experience, I chose **Google Gemini Flash** via OpenRouter. It balances reasoning capability with extremely low latency, critical for a real-time chat interface.

### Future Roadmap
*   **Voice Interface:** Adding Speech-to-Text and Text-to-Speech for a fully conversational experience.
*   **Analytics:** Tracking common questions asked by recruiters to improve my resume and portfolio content.
*   **Multi-modal capabilities:** Allowing the agent to "show" images of projects within the chat stream.

---

*Built with ❤️ by Yong Xie*