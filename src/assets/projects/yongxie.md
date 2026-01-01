# Yongwork

> **A Product-Minded Engineering Portfolio**
> 
> *Showcasing not just "how I code", but "how I think".*

Yongwork is a modern, high-performance personal portfolio application. It serves as a comprehensive case study platform that bridges the gap between **Software Engineering** and **Product Management**.

Instead of simply listing GitHub links, this project is architected to tell the *story* behind every product: the problem it solves, the target audience it serves, and the key technical decisions that made it possible.

## 🚀 The Problem & Solution

**The Background:**
Traditional developer portfolios often suffer from the "Gallery Problem"—they look like static art galleries of screenshots. They fail to communicate the *process*: the trade-offs made, the architectural constraints navigated, and the user value delivered.

**The Solution:**
Yongwork solves this by treating every project as a structured **Product Case Study**.
- **For Recruiters:** It provides immediate context on *why* a project exists.
- **For Engineers:** It showcases bleeding-edge tech (Angular 21, Tailwind 4) and clean architecture.
- **For Product Managers:** It demonstrates a clear understanding of user needs, market gaps, and data-driven decision-making.

## ✨ Core Features

*   **Dynamic Project Case Studies:** A data-driven routing system (`detail/:id`) that renders rich, structured content (Problem, Solution, Audience, Tech Stack) for each project.
*   **Server-Side Rendering (SSR):** Optimized for SEO and social sharing preview cards, ensuring the content is indexable and accessible immediately (LCP optimization).
*   **Feature-Based Architecture:** scalable folder structure grouping views by feature (`features/`) rather than technical type, making the codebase easy to navigate and maintain.
*   **Responsive Design System:** Built with **Tailwind CSS 4**, utilizing the new native CSS variable theming engine for a consistent dark-mode-ready UI.
*   **Content-as-Data:** Separates content (`assets/projectContent`) from presentation, effectively functioning as a local "Headless CMS" for easy updates.

## 🛠 Tech Stack

This project is built on the **bleeding edge** of the web ecosystem to maximize performance and developer experience.

| Category | Technology | Reason for Choice |
| :--- | :--- | :--- |
| **Framework** | **Angular 21** | Utilizing the latest **Standalone Components** and **Signals** for granular reactivity and reduced bundle size. |
| **Styling** | **Tailwind CSS 4** | The newest version of Tailwind with the high-performance Rust-based engine (Oxide) and native CSS `@theme` support. |
| **Rendering** | **Angular SSR / Express** | Server-Side Rendering for optimal SEO and rapid First Contentful Paint (FCP). |
| **Language** | **TypeScript 5.9** | Strict typing for robust, maintainable business logic and interfaces. |
| **Testing** | **Vitest** | A blazing fast unit test runner that replaces Karma/Jasmine for a modern testing DX. |

## 📦 How to Run

### Prerequisites
*   Node.js (LTS recommended)
*   npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/yongwork.git

# Navigate to project directory
cd yongwork

# Install dependencies
npm install
```

### Development Server

```bash
# Start the dev server at http://localhost:4200
npm start
```

### Production Build & SSR

To test the Server-Side Rendering capabilities locally:

```bash
# Build the project
npm run build

# Serve the SSR version
npm run serve:ssr:yongwork
```

## 💡 Engineering Highlights & Thoughts

### 1. "PM Thinking" in Code Structure
The data model (`IProjectContent`) was designed before a single line of UI code was written. This enforces a rigorous structure for every project entry, mandating fields like `targetAudience` and `keyProductDecisions`. The code forces the author to think like a PM.

### 2. Adopting Angular 21 & Tailwind 4
This project deliberately chooses the latest major versions of its core dependencies.
*   **Angular 21:** Moves away from `NgModules` entirely, embracing a cleaner, functional approach to guards, resolvers, and dependency injection.
*   **Tailwind 4:** Abandons the `tailwind.config.js` JavaScript configuration in favor of a pure CSS-first configuration strategy using standard CSS variables, simplifying the build pipeline.

### 3. Performance Optimization
*   **Hydration:** Angular's non-destructive hydration is enabled, allowing the client to "wake up" the server-rendered HTML without flickering or repainting.
*   **Signal-based State:** The `Detail` component uses Angular Signals (`signal`, `computed`) to manage image gallery state (`currentIndex`), ensuring that only the specific DOM elements that need to change are updated, rather than checking the entire component tree.

---
*Built by [Yong Xie].*