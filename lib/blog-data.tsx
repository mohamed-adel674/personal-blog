export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readingTime: string
  author: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React 19 and Server Components",
    slug: "react-19-server-components",
    excerpt:
      "Explore the latest features of React 19, including the powerful server components architecture that revolutionizes how we build applications.",
    content: `# Getting Started with React 19 and Server Components

React 19 introduces a paradigm shift in how we build web applications. Server Components are one of the most significant additions to the React ecosystem, enabling developers to seamlessly blend server-side and client-side rendering.

## What Are Server Components?

Server Components are React components that render exclusively on the server. Unlike traditional components that render on the client, Server Components don't send JavaScript to the browser, resulting in smaller bundle sizes and improved performance.

## Key Benefits

1. **Reduced Bundle Size**: Server Components don't require JavaScript to be sent to the browser, significantly reducing your application's bundle size.
2. **Direct Database Access**: You can securely access databases directly within Server Components without exposing sensitive information.
3. **Improved Performance**: By rendering on the server, you reduce the amount of JavaScript that needs to be parsed and executed on the client.
4. **Enhanced Security**: Sensitive data and API keys can be safely handled on the server without exposure to the browser.

## Getting Started

To use Server Components in your Next.js application, simply create components in the \`app\` directory. By default, all components are Server Components unless you explicitly mark them as client components using the \`"use client"\` directive.

Server Components represent a fundamental change in how we approach web development, and React 19 makes this transition smooth and intuitive.`,
    image: "/react-19-server-components.jpg",
    category: "React",
    date: "Nov 15, 2024",
    readingTime: "8 min read",
    author: "Mohamed Adel",
    tags: ["React", "Server Components", "Web Development"],
  },
  {
    id: "2",
    title: "Mastering Tailwind CSS for Modern Web Design",
    slug: "mastering-tailwind-css",
    excerpt:
      "Learn how to leverage Tailwind CSS to create beautiful, responsive designs without leaving your HTML. A comprehensive guide to utility-first CSS.",
    content: `# Mastering Tailwind CSS for Modern Web Design

Tailwind CSS has revolutionized the way we approach styling in web development. By providing a comprehensive set of utility classes, Tailwind enables developers to build custom designs without writing traditional CSS.

## Why Tailwind CSS?

Tailwind CSS follows a utility-first approach, which means instead of writing custom CSS classes, you compose your designs by combining pre-built utility classes directly in your HTML or JSX.

### Advantages of Tailwind

- **Rapid Development**: Build complex layouts and components quickly using pre-built utilities.
- **Consistency**: Maintain visual consistency across your project with a predefined design system.
- **Customization**: Easily customize the default configuration to match your brand and design requirements.
- **Production-Ready**: Tailwind CSS automatically purges unused styles, keeping your production bundle minimal.

## Core Concepts

### Responsive Design

Tailwind CSS makes responsive design effortless with responsive prefixes:

\`\`\`jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
\`\`\`

### Dark Mode

With Tailwind's dark mode support, you can easily create theme-aware designs:

\`\`\`jsx
<div className="bg-white dark:bg-slate-900">
  Dark mode support
</div>
\`\`\`

## Best Practices

1. Use meaningful breakpoints for your responsive design.
2. Leverage Tailwind's configuration to customize your design system.
3. Use component extraction to avoid repetition.
4. Keep your custom CSS minimal and focused on edge cases.

Tailwind CSS is the perfect companion for modern web development, and mastering it will significantly improve your productivity.`,
    image: "/tailwind-css-design.png",
    category: "CSS",
    date: "Nov 10, 2024",
    readingTime: "6 min read",
    author: "Mohamed Adel",
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    id: "3",
    title: "Next.js 15: The Future of Full-Stack Development",
    slug: "nextjs-15-future",
    excerpt:
      "Discover the latest features and improvements in Next.js 15, including enhanced performance, new routing capabilities, and simplified API integrations.",
    content: `# Next.js 15: The Future of Full-Stack Development

Next.js 15 brings significant improvements to the full-stack development experience. With enhanced performance optimizations and new features, it's easier than ever to build scalable applications.

## What's New in Next.js 15

### Turbopack Integration

Next.js 15 now includes Turbopack as the default bundler for development builds, providing significantly faster build times and a more responsive development experience.

### Enhanced Server Components

Improvements to Server Components make it even easier to fetch data and manage state directly on the server, reducing client-side complexity.

### Improved TypeScript Support

TypeScript integration has been enhanced to provide better type checking and error detection during development.

## Performance Improvements

Next.js 15 focuses on performance improvements across the board:

- Faster build times with Turbopack
- Smaller bundle sizes through better tree-shaking
- Improved image optimization
- Enhanced caching strategies

## Migration Guide

Migrating from Next.js 14 to 15 is straightforward. Most existing applications will continue to work without significant changes.

Follow the official migration guide to ensure a smooth transition and take advantage of all the new features.`,
    image: "/next-js-15-development.jpg",
    category: "Next.js",
    date: "Nov 5, 2024",
    readingTime: "7 min read",
    author: "Mohamed Adel",
    tags: ["Next.js", "JavaScript", "Web Development"],
  },
  {
    id: "4",
    title: "Building Performant TypeScript Applications",
    slug: "typescript-performance",
    excerpt:
      "Best practices for writing TypeScript code that not only catches errors but also results in performant, maintainable applications.",
    content: `# Building Performant TypeScript Applications

TypeScript adds a powerful layer of type safety to JavaScript development. When combined with best practices, it enables you to build applications that are both performant and maintainable.

## Type Safety Benefits

TypeScript's static type checking prevents many common errors at compile-time rather than runtime, leading to more robust applications.

## Performance Considerations

### Strict Mode

Enable strict mode in your tsconfig.json to catch potential issues early:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### Type Inference

Leverage TypeScript's type inference to reduce unnecessary type annotations while maintaining type safety.

### Module Resolution

Optimize your module resolution strategy to improve build times and reduce bundle sizes.

## Common Pitfalls

1. Over-typing: Not everything needs explicit type annotations
2. Any type: Avoid using \`any\` unless absolutely necessary
3. Circular dependencies: Structure your code to minimize circular dependencies

TypeScript, when used correctly, is an excellent tool for building high-performance, maintainable applications.`,
    image: "/typescript-performance-coding.jpg",
    category: "TypeScript",
    date: "Oct 28, 2024",
    readingTime: "5 min read",
    author: "Mohamed Adel",
    tags: ["TypeScript", "Performance", "Best Practices"],
  },
  {
    id: "5",
    title: "CSS-in-JS: Styling Solutions for Modern React",
    slug: "css-in-js-solutions",
    excerpt:
      "Explore different CSS-in-JS solutions and learn how to choose the right styling approach for your React applications.",
    content: `# CSS-in-JS: Styling Solutions for Modern React

CSS-in-JS solutions have become increasingly popular in the React ecosystem. They offer dynamic styling capabilities and component-scoped styles that integrate seamlessly with JavaScript logic.

## Popular CSS-in-JS Libraries

### Styled Components

Styled Components is one of the most popular CSS-in-JS solutions, offering an intuitive API for defining styled components:

\`\`\`javascript
import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
\`
\`\`\`

### Emotion

Emotion is a lightweight and flexible CSS-in-JS library that supports both string and object styles.

### Tailwind CSS

While not traditional CSS-in-JS, Tailwind CSS offers a pragmatic approach to styling with utility classes.

## Choosing the Right Solution

Consider the following factors when selecting a CSS-in-JS solution:

- Performance impact
- Bundle size
- Developer experience
- Community support
- Learning curve

Each solution has its strengths and weaknesses. Choose the one that best fits your project requirements.`,
    image: "/css-in-js-styling-react.jpg",
    category: "Styling",
    date: "Oct 20, 2024",
    readingTime: "6 min read",
    author: "Mohamed Adel",
    tags: ["CSS", "React", "Styling"],
  },
  {
    id: "6",
    title: "Web Performance Optimization: A Comprehensive Guide",
    slug: "web-performance-optimization",
    excerpt:
      "Discover proven techniques to optimize your web application's performance, from image optimization to code splitting and caching strategies.",
    content: `# Web Performance Optimization: A Comprehensive Guide

Web performance is critical for user experience and SEO. A slow website frustrates users and negatively impacts search rankings. This guide covers essential performance optimization techniques.

## Core Web Vitals

Google's Core Web Vitals are key metrics for measuring website performance:

- **LCP (Largest Contentful Paint)**: Measures loading performance
- **FID (First Input Delay)**: Measures interactivity
- **CLS (Cumulative Layout Shift)**: Measures visual stability

## Optimization Techniques

### Image Optimization

Images often account for the majority of page weight. Optimize images by:

- Using modern formats (WebP)
- Serving responsive images
- Implementing lazy loading
- Using image CDNs

### Code Splitting

Break your JavaScript into smaller chunks that load only when needed:

\`\`\`javascript
const Home = lazy(() => import('./pages/Home'));
\`\`\`

### Caching Strategies

Implement effective caching strategies to reduce server load and improve repeat visit performance.

## Monitoring Performance

Use tools like Lighthouse, WebPageTest, and Google Analytics to monitor performance metrics and identify optimization opportunities.

Performance optimization is an ongoing process that requires continuous monitoring and improvement.`,
    image: "/web-performance-optimization.jpg",
    category: "Performance",
    date: "Oct 15, 2024",
    readingTime: "9 min read",
    author: "Mohamed Adel",
    tags: ["Performance", "Web", "Optimization"],
  },
]

// Search function for the search bar
export function searchBlogPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase()
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  )
}

// Function to get a single post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

// Function to get all slugs for static generation
export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
