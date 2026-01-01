# Chinese Horoscope Today (HoroscopeChinois)

![Project Banner](https://img.shields.io/badge/Status-Active-success?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square) ![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square)

> **Ancient Wisdom, Modern Interface.**
> A modern, localized, and high-performance web application providing daily Chinese zodiac insights.

---

## 📖 Introduction

**Chinese Horoscope Today** is a modern reimagining of traditional astrology platforms. In a market often saturated with ad-heavy, dated interfaces, this project aims to deliver a **clean, mobile-first, and user-centric experience**.

**The Problem:**
Accessing cultural insights like the Chinese Zodiac often involves navigating clutter. Users simply want to know: *"Which sign am I?"* and *"What does my day look like?"*

**The Solution:**
We built a streamlined PWA-ready application that bridges cultural heritage with modern web performance. By focusing on **speed, accessibility, and clean typography**, we ensure that users can access their daily guidance without friction.

## 🌟 Core Features

*   **🔮 Daily Insights:** Real-time fetching of daily fortunes (Love, Career, Health, Mental, Family) with detailed advice and scoring (0-5 stars).
*   **🔎 Smart Zodiac Finder:** An interactive tool that instantly calculates a user's Chinese Zodiac animal based on their birth year (1900–2100).
*   **🧧 Comprehensive Profiles:** Detailed encyclopedic entries for all 12 signs, covering personality traits, compatibility, and cultural significance.
*   **🇫🇷 Localized Experience:** Fully localized content in French, tailored for Francophone audiences.
*   **📱 Responsive Design:** A fluid layout optimized for all devices, from large desktops to mobile screens.

## 🛠️ Tech Stack

This project leverages the bleeding edge of the React ecosystem to ensure performance and developer experience.

*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) - Utilizing React Server Components and Server Actions.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - Strict type safety for robust data modeling.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - The latest engine for zero-runtime styling, paired with **DaisyUI**.
*   **Backend & Data:** [Supabase](https://supabase.com/) - PostgreSQL database for storing fortune data.
*   **Icons:** [Lucide React](https://lucide.dev/) - Consistent and lightweight iconography.
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand) - Lightweight state management (configured for future complexity).

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
*   Node.js 18+
*   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/horoscope-chinois.git
    cd horoscope-chinois
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your Supabase credentials:
    ```bash
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the application.

## 💡 Highlights & Technical Insights

As a developer and product thinker, I focused on several key areas during development:

### 1. Modern Architecture (Server Actions)
Instead of building a separate API layer, I utilized **Next.js Server Actions** (`src/actions/getFortunesToday.ts`). This allows the frontend to query the database directly and securely from the server, reducing latency and simplifying the codebase.

### 2. Type Safety & Data Modeling
I implemented strict TypeScript interfaces (e.g., `IFortune`, `IZodiacDetails`) to ensure data consistency across the application. This prevents runtime errors when handling complex nested objects like fortune scores and details.

### 3. Performance Optimization
*   **Tailwind v4:** Adopted the latest version for faster build times and smaller CSS bundles.
*   **Next/Image:** All zodiac assets are optimized automatically to prevent layout shifts (CLS) and improve LCP scores.
*   **Turbopack:** Utilized for rapid local development feedback loops.

### 4. Scalability & Future Planning
The project is structured to scale.
*   **Supabase** integration allows for easy addition of user authentication and personalized history in the future.
*   **Zustand** is pre-configured to handle complex global state (e.g., user preferences) as the app grows beyond simple static rendering.

## 🔮 Future Roadmap

*   [ ] **User Accounts:** Allow users to save their sign and receive daily email notifications.
*   [ ] **Data Visualization:** Use Chart.js to show fortune trends over the week/month.
*   [ ] **Internationalization (i18n):** Expand support to English and Chinese.

---

*Created with ❤️ by Yong Xie*
