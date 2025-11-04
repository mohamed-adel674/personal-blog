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
    title: "Understanding MVC: A Quick Guide",
    slug: "understanding-mvc",
    excerpt:
      "A brief guide to understanding the MVC pattern and how it helps organize your web applications",
    content: `# Understanding MVC: A Quick Guide

MVC stands for:

- M: Model

- V: View

- C: Controller

But what does it actually do?

- Model → Manages your data (database, API, files, etc.)

- View → The user interface the visitor interacts with (HTML, CSS, JS…)

- Controller → Handles the application logic (PHP code, validation, etc.)

The main goal of MVC is to separate concerns so that each part of your application is independent and easier to maintain.

If you’ve ever started learning PHP, you might remember mixing HTML and PHP together. As your project grows, the code can become messy, hard to read, and difficult to maintain. MVC solves this by introducing a clean structure.

The Three Components

1- View – This is what the user sees on the screen (UI).

2- Controller – Responsible for handling logic and responding to user actions.

3- Model – Responsible for interacting with data. Depending on your project, it could be a database, an API, or a file. In Laravel, models usually interact with the database.

How MVC Works: A Simple Example

1- A user interacts with your website – maybe typing in a search box, clicking a button, or scrolling. This is the View.

2- The Controller receives this action through an HTTP request.

3- The Controller executes the necessary logic, such as validating input.

4- If data is required, the Controller asks the Model to fetch it.

5- The Model retrieves the data and sends it back to the Controller.

6- Finally, the Controller sends the data to the View, so the user sees the result.

In short:
- User → View → Controller → Model → Controller → View → User ✅

And just like that, the user gets the expected result effortlessly! 🎉.`,
    image: "/react-19-server-components.jpg",
    category: "PHP / Laravel",
    date: "jan 15, 2024",
    readingTime: "8 min read",
    author: "Mohamed Adel",
    tags: ["MVC","PHP", "Laravel", "Web Development"],
  },
  {
    id: "2",
    title: "How Laravel is Built on MVC",
    slug: "laravel-mvc-overview",
    excerpt:
      "A high-level overview of how Laravel implements the MVC pattern to organize requests, logic, and data flow.",
    content: `# How Laravel is Built on MVC

Let’s take a closer look at how Laravel works under the hood using the MVC pattern. This is just a high-level overview to help you understand the flow—not a full lifecycle explanation.

In our previous post, we explained the general MVC flow:
User interacts with the View → View notifies Controller → Controller executes logic → Controller may request data from Model → Model returns data → Controller sends data back to View.

Now, let’s see how this works in Laravel.

Example: User Login in Laravel

A user wants to log in and interacts with the View (enters credentials and clicks login).

Who handles the login logic? The Controller. It checks the password, validates input, and handles errors.

But here’s the catch: if the View directly calls the Controller, your file structure and URLs could become messy. For example, you might end up with URLs pointing to index.php instead of clean routes.

Routing in Laravel

In Laravel:

The View is the browser.

The Controller is the server-side logic.

They communicate through HTTP requests, which consist of:

URL

Headers

Body

Method

The Routing system is what receives the URL and decides which Controller and which method should handle the request.

A Controller is a class containing multiple methods (actions), such as login(), logout(), register(), home().

The Routing system maps the incoming URL to the specific method inside the Controller.

Controller and Model Interaction

Once the Controller receives the request, it executes the necessary logic.

If data is needed, the Controller calls the Model.

The Model performs the query and returns the results to the Controller.

Finally, the Controller sends the data to the View, so the user sees the result.

In short:

User → View → Routing → Controller → Model → Controller → View → User ✅

This is essentially how Laravel handles user actions, keeps your code organized, and separates responsibilities using the MVC pattern.`,
    image: "/tailwind-css-design.png",
    category: "PHP / Laravel",
    date: "feb 10, 2024",
    readingTime: "6 min read",
    author: "Mohamed Adel",
    tags: ["MVC", "Laravel", "PHP","Web Development"],
  },
  {
    id: "3",
    title: "A Quick Guide to MySQL Databases",
    slug: "mysql-databases-overview",
    excerpt:
      "A beginner-friendly overview of MySQL databases and how they fit into web development with PHP and Laravel.",
    content: `# A Quick Guide to MySQL Databases

Let’s talk a bit about MySQL, one of the most popular databases used in web development. This is just a simple overview to help you get the idea—not a full deep dive.

In any web application, the Model in MVC handles the data. And in Laravel, most of the time, that data lives in MySQL.

MySQL in Simple Terms

MySQL is a Relational Database Management System (RDBMS). It stores your data in tables, with rows and columns. Each table usually represents an entity in your application, like users, posts, or orders.

Row → Represents a single record

Column → Represents a field in that record

How Web Apps Use MySQL

User interacts with the View: For example, submitting a registration form.

Controller handles the logic: Checks the input, validates data, and decides what data is needed.

Controller asks the Model to interact with the database: The Model runs SQL queries to read, insert, update, or delete data.

Model returns the results to the Controller: Controller processes the data if necessary.

Controller sends the data to the View: The user sees the result on the page.

Key Things to Know About MySQL

Tables: Organize data into rows and columns

Primary Key: A unique identifier for each row

Foreign Key: Links tables together

Indexes: Make queries faster

Queries: Instructions for interacting with data (SELECT, INSERT, UPDATE, DELETE)

Practical Example: Viewing All Users

Imagine a Laravel app:

User clicks "View All Users" → triggers an action on the View

Routing system sends the request to the Controller

Controller asks the Model to fetch all users from MySQL

Model executes the query: SELECT * FROM users

Data is returned to the Controller → Controller passes it to the View

User sees the list of users in the browser

In short:

User → View → Routing → Controller → Model → MySQL → Model → Controller → View → User ✅

This is a simple way to understand how MySQL works with Laravel and MVC, keeping your data organized and easy to manage.`,
    image: "/what-is-a-mysql-database.png",
    category: "MySQL",
    date: "mars 5, 2024",
    readingTime: "7 min read",
    author: "Mohamed Adel",
    tags: ["MySQL", "Database","PHP","Laravel" ,"Web Development"],
  },
  {
    id: "4",
    title: "Understanding OOP: A Beginner’s Guide",
    slug: "oop-beginners-guide",
    excerpt:
      "A beginner-friendly guide to understanding Object-Oriented Programming (OOP) and why it’s useful for organizing code.",
    content: `# Understanding OOP: A Beginner’s Guide

Let’s talk about OOP—Object-Oriented Programming. If you’re just starting out, don’t worry. This is a simple, practical overview to help you understand the concept without getting lost in the details.

OOP in Simple Terms

OOP is a way of writing code that organizes your application into objects. Each object represents something in your app, like a User, Post, or Product.

Each object has:

- Properties → The data that describes it (for example, a user’s name or email)

- Methods → The actions it can perform (for example, login(), logout(), updateProfile())

Why OOP Matters

If you’ve written PHP without OOP, you probably know how messy things can get as the project grows.
OOP helps keep your code:

- Organized: Every piece of code has a clear place

- Reusable: You can use the same objects in multiple parts of your app

- Easy to maintain: Changing one object doesn’t break everything else

Practical Example: User Class

Here’s a simple example of a User class:

***********************************************************

class User {
    public $name;
    public $email;

    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    public function login() {
        // login logic here
        return "User $this->name logged in!";
    }

    public function logout() {
        // logout logic here
        return "User $this->name logged out!";
    }
}


Usage:

$user = new User("Mohamed", "mohamed@example.com");
echo $user->login();


- User is the object

- $name and $email are properties

- login() and logout() are methods
**************************************************************************************************

OOP in Laravel

Laravel relies heavily on OOP, and that’s one of the reasons it scales so well:

- Models are classes representing database tables

- Controllers are classes with methods that handle actions

- Middleware, Services, and other components are all organized as classes

This keeps the code clean, maintainable, and easy to understand—even in large projects.

In short:

OOP is all about keeping your code organized, reusable, and easier to maintain. Once you start using it consistently, your projects will feel much more manageable.`,
    image: "/PHP-OOP-crash-course.jpg",
    category: "PHP / Programming",
    date: "Apr 28, 2024",
    readingTime: "5 min read",
    author: "Mohamed Adel",
    tags: ["OOP", "PHP", "Laravel", "Programming", "Web Development"],
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
    date: "Sep 20, 2025",
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
    date: "Oct 15, 2025",
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
