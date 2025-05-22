# Movie Search Application

A modern Next.js app for searching movies, browsing detailed information, and managing your personal favorites. Built with Next.js 15, React 19, TypeScript, and SCSS modules, the app is fast, responsive, and easy to use on any device. React Server Components are used for performance, and the UI adapts seamlessly from desktop to mobile.

---

## Features

- **Search:** Instantly find movies by title.
- **Details:** Dive into summaries, cast lists, and ratings for each movie.
- **Favorites:** Add or remove movies from a favorites list, which stays saved between sessions.
- **Responsive Design:** Looks and works great on phones, tablets, and desktops.
- **Performance:** Optimized image loading and code splitting for a smooth experience.
- **Accessibility:** Designed with accessibility best practices in mind.

---

## Getting Started

### Requirements

- [Bun](https://bun.sh/) (for package management)
- Node.js (v18+)

### Setup

1. **Clone the repo:**

    ```bash
    git clone <repository-url>
    cd interview-test
    ```

2. **Install dependencies:**

    ```bash
    bun install
    ```

3. **Start the dev server:**

    ```bash
    bun run dev
    ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure & Design

### Components

- **Common components:** Reusable UI elements (buttons, cards, navigation).
- **Page components:** Feature-specific components for each page.
- **Styles:** Each component has its own `.module.scss` file for modular, maintainable styling.

### State Management

- Uses **Zustand** for global state (mainly favorites), chosen for its simplicity and local storage persistence.

### Styling

- **SCSS modules** keep styles scoped to components, preventing conflicts and making it easy to use variables and mixins for consistent design.

---

## Key Challenges & Solutions

### Server vs. Client Components

- **Approach:** Interactive elements (like search bars and favorite buttons) are client components; data display is handled by server components. This keeps the app fast and interactive.

### Image Optimization

- **Problem:** Movie posters vary in size and quality.
- **Solution:** Custom `ImageOptimized` component (built on Next.js Image) with lazy loading and placeholders for a smooth, consistent look.

### Responsive Design

- **Problem:** Ensuring a consistent experience across devices.
- **Solution:** SCSS mixins for media queries, flexible grid layouts, and touch-friendly UI elements.

---

## API Integration & Workarounds

The app uses the **TVmaze API** for movie and TV show data. Some workarounds were needed due to API limitations:

- **Missing Images:** Fallback placeholders are shown if the API doesn’t provide images.
- **No Pagination:** Results are limited and queries optimized for smooth performance.
- **No Trending/Popular Endpoint:** The app fetches a broad list and manually selects the first 8 items for a "Trending" section.

---

## Additional Features

- **React Query:** Handles data fetching, caching, and provides loading/error states.
- **Skeleton Loading:** Instead of spinners, skeleton screens mimic the content layout for a better loading experience.

---

## Tech Stack

- **Next.js 15.3** (App Router)
- **React 19**
- **TypeScript**
- **SCSS Modules**
- **Zustand**
- **React Query**
- **Axios**
- **ESLint & Prettier**

---
