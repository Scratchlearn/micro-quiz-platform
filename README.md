# 🧩 Micro-Quiz Platform

A simple micro-quiz platform built with **Next.js 15 App Router**, demonstrating **SSG**, **SSR**, **Dynamic Routing**, **API Routes**, and **next/image** for image optimization.

---

## 📌 Overview

This project is a quiz application that allows users to:
- Browse quiz categories (e.g., Science, Math, Programming, History)
- View quizzes by category
- Take quizzes with immediate feedback and score calculation

---

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Data**: Mock JSON in local files, served via Next.js API Routes
- **Images**: Optimized with `next/image`

---

## ✅ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/micro-quiz-platform.git
   cd micro-quiz-platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Next.js Specific Requirements & Design Decisions
✅ Static Site Generation (SSG)
The Home Page (/) lists all quiz categories.

Implemented using the App Router fetch inside Server Components, equivalent to getStaticProps.

✅ Server-Side Rendering (SSR)
The Quiz Category Listing Page (/quizzes/[category]) fetches quizzes dynamically on each request.

Done using Server Components with force-dynamic to mimic getServerSideProps.

✅ Dynamic Routing
Uses [category]/page.js for dynamic category pages.

Uses [id]/page.js for individual quiz pages.

✅ API Routes
Located in app/api/:

/api/categories → returns list of quiz categories.

/api/quizzes → returns quizzes for a given category.

/api/quiz → returns quiz details by ID.

Data served from mock JSON files in the data/ folder.

✅ next/image
All icons and the site logo are served via the <Image /> component for automatic optimization.

🧩 Features
Take quizzes one question at a time.

Immediate feedback on answers.

Simple score display on completion.

Responsive design with Tailwind CSS.

⚡ Challenges & Solutions
Challenge	Solution
Dynamic data not matching during hydration	Ensured server and client fetches align, avoided random values at render
API routes failing in production	Added fallback BASE_URL handling for local and deployed environments
Handling SSR in App Router	Used force-dynamic export to mimic getServerSideProps in Server Components


