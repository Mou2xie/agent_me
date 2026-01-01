# Hu Landscaping

> **Crafting Beautiful Outdoor Spaces with Modern Web Technology.**

A high-performance, visually engaging digital platform for a local landscaping business, built with the bleeding-edge **Nuxt 4** and **Tailwind CSS v4** stack.

---

## 📖 Introduction

### The Problem
Local service businesses (like landscaping, carpentry) often struggle to translate their physical craftsmanship into a digital presence. Potential clients require **trust**, **visual proof of quality**, and **frictionless communication** before booking high-ticket services. A generic template often fails to capture the brand's unique identity or load fast enough to retain mobile users.

### The Solution
**Hu Landscaping** is a bespoke web application designed to bridge this gap. It serves not just as an informational brochure, but as a conversion-focused tool that:
1.  **Builds Trust:** Through a dedicated "Social Proof" section (Testimonials) and verified badges (Licensed, Insured).
2.  **Showcases Craftsmanship:** utilizing a high-performance interactive carousel to display portfolio work without compromising page load speeds.
3.  **Ensures Accessibility:** Fully responsive design ensures the site is perfectly usable for homeowners on-the-go via mobile devices.

---

## 🚀 Core Features

*   **Service Catalog:** Clear, icon-driven presentation of core services (Decks, Fences, Lawn Care, Snow Removal) helping users instantly identify relevance.
*   **Interactive Portfolio:** A smooth, touch-friendly image carousel powered by **Nuxt UI** to showcase project transformations.
*   **Social Proof Engine:** dedicated section for client testimonials with localized context (e.g., specific cities in Ontario), enhancing relatability.
*   **Trust Indicators:** Prominent display of business credentials (Licensed, Insured, Bonded) to reduce conversion anxiety.
*   **Direct-Response CTA:** Simplified contact section designed to minimize friction for lead generation (Phone & Email).

---

## 🛠 Tech Stack

This project leverages the latest advancements in the Vue ecosystem to ensure developer experience and end-user performance.

*   **Framework:** [Nuxt 4](https://nuxt.com/) (The latest evolution of the Vue meta-framework)
*   **UI Library:** [Nuxt UI](https://ui.nuxt.com/) (For robust, accessible components like Carousels and Avatars)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using the next-gen Vite plugin for lightning-fast HMR)
*   **Icons:** [Lucide Vue](https://lucide.dev/) (Clean, consistent SVG iconography)
*   **Language:** TypeScript (For type safety and maintainable code)

---

## 🏃‍♂️ How to Run

Follow these steps to set up the project locally:

### Prerequisites
*   Node.js (LTS version recommended)
*   npm, pnpm, or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/hu-landscaping.git
    cd hu-landscaping
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Access the application**
    Open your browser and navigate to `http://localhost:3000`.

---

## 💡 Highlights & Reflections

### 1. Embracing "Bleeding Edge" (Nuxt 4 & Tailwind v4)
**Challenge:** Adopting Nuxt 4 and Tailwind v4 meant navigating a newer ecosystem with fewer established community patterns.
**Solution:** I focused on reading the core documentation and source code of the modules. This decision resulted in a significantly faster build pipeline and a leaner bundle size compared to previous versions.

### 2. Performance-Centric Design
**Optimization:** High-resolution landscaping images can easily bloat a site. I utilized:
*   **Lazy Loading:** Images in the carousel and below the fold are lazy-loaded to prioritize Largest Contentful Paint (LCP).
*   **Component Abstraction:** Breaking the landing page into reusable sections (`Navbar`, `Footer`, `UCarousel`) to maintain code readability and allow for easier code splitting.

### 3. Future Roadmap
*   **CMS Integration:** Plan to integrate a Headless CMS (like Strapi or Contentful) to allow the business owner to upload new project photos and testimonials without code changes.
*   **Booking System:** Implementing a calendar scheduling tool to allow automated consultation bookings.