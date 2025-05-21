# Movie Search Application

## Introduction

This Next.js app lets you easily search for movies, check out detailed info about each one, and keep track of your favorite films. It’s built using Next.js 15, React 19, TypeScript, and SCSS modules to ensure a smooth and modern experience. The app also uses React Server Components for better performance and adapts beautifully to different screen sizes, making it great on both desktop and mobile devices.

## Features

- **Movie Search**: Search for movies by title
- **Movie Details**: View comprehensive information about movies including summary, cast, and ratings
- **Favorites Management**: Add/remove movies to a favorites list that persists between sessions
- **Responsive Design**: Fully responsive layout that works seamlessly across mobile, tablet, and desktop
- **Performance Optimization**: Optimized image loading and code splitting for better performance
- **Accessibility**: Built with web accessibility guidelines in mind

## Installation and Setup

### Prerequisites

- [Bun](https://bun.sh/) (Package Manager)
- Node.js (v18 or higher recommended)

### Installation Steps

1. Clone the repository:

```bash
git clone <repository-url>
cd interview-test
```

2. Install dependencies:

```bash
bun install
```

3. Start the development server:

```bash
bun run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Design Decisions

### Component Structure

Components are organized into two main categories:

- **Common components**: Reusable UI elements such as buttons, cards, and navigation.  
- **Page components**: Components specific to individual pages or features of the application.  
- **Styles**: Each component has its own scoped `.module.scss` file for modular and maintainable styling.

This separation promotes better reusability and maintainability throughout the codebase.

### State Management

Zustand was chosen for state management due to its simplicity and efficiency. It is primarily used to manage the favorites list, which needs to be accessible across different components and persisted in local storage.

### Styling Approach

SCSS modules were used for styling to ensure component-scoped CSS and prevent style leakage. This approach also enables better organization of styles and supports the use of variables and mixins for consistent design elements.

## Challenges and Solutions

### Challenge 1: Server vs. Client Components

**Challenge**: Determining which components should be server components and which should be client components.

**Solution**: I implemented a clear separation by analyzing component requirements:

- Components that need interactivity (like search inputs and favorite buttons) are client components
- Components that primarily display data are server components
- This approach optimizes both performance and user experience

### Challenge 2: Image Optimization

**Challenge**: Handling movie poster images of varying sizes and qualities while maintaining performance.

**Solution**: Created a custom `ImageOptimized` component using Next.js Image component with:

- Lazy loading for better performance
- Placeholder images for better user experience during loading

### Challenge 3: Responsive Design

**Challenge**: Creating a consistent user experience across all device sizes.

**Solution**: Implemented a responsive design approach with:

- SCSS mixins for media queries to adapt layouts at different breakpoints
- Flexible grid layouts that transform based on screen dimensions
- Optimized UI elements that work well on both desktop and touch devices

## Public API Integration and Challenges

This application uses the **TVmaze API** as the public data source for fetching movies and TV shows information. While TVmaze provides a rich dataset, it has some limitations that required creative solutions:

- **Missing Images:**
  Some shows returned by the API do not have poster or backdrop images. To ensure a consistent and polished UI, I implemented a fallback mechanism that displays a placeholder image whenever the API response lacks an image.

- **No Pagination Support:**
  The TVmaze API does not support pagination for search results. To handle this, the app limits the number of displayed results and optimizes search queries to keep performance smooth.

- **No Trending or Popular Shows Endpoint:**
  TVmaze does not provide a dedicated endpoint for trending or popular shows. To mimic this feature, the app fetches a broad list of shows and manually selects the first 8 items to display in a “Trending” section on the home page.

These adjustments enable a smooth and user-friendly experience despite the API constraints.

## Additional Features

### React Query Integration

I integrated React Query for data fetching, which provides:

- Loading and error states
- Optimistic updates for a better user experience

### Skeleton Loading States

Instead of simple loading spinners, I implemented skeleton screens that mimic the layout of the content being loaded, providing a better user experience during data fetching.

## Technologies Used

- **Next.js 15.3**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: For type safety
- **SCSS Modules**: For component-scoped styling
- **Zustand**: For state management
- **React Query**: For data fetching and caching
- **Axios**: For API requests
- **ESLint & Prettier**: For code quality

