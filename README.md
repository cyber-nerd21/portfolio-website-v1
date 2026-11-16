# Amogh Deodhar — Personal Portfolio

A premium, minimal, and modern personal portfolio website built with Next.js App Router, React, Tailwind CSS, and Lucide React. Inspired by the refined design aesthetics of Linear.app, Vercel.com, and Raycast.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI & Styling**: React 18, Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Project Structure

```
├── app/
│   ├── globals.css      # Core theme variables, dot grid & subtle glows
│   ├── layout.tsx       # Root layout with SEO metadata & viewports
│   └── page.tsx         # Page orchestration
├── components/
│   ├── Navbar.tsx       # Minimal sticky navigation with backdrop blur
│   ├── Hero.tsx         # High-impact typography, status pill & CTA
│   ├── About.tsx        # Authentic narrative + credentials snapshot
│   ├── Projects.tsx     # Responsive 2-column grid of curated projects
│   ├── ProjectCard.tsx  # CSS/SVG preview mockups & status badges
│   ├── Skills.tsx       # Categorized technical competencies
│   ├── Contact.tsx      # Direct links with interactive copy buttons
│   └── Footer.tsx       # Minimal wordmark & back-to-top
```

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the portfolio.

## Production Build

```bash
npm run build
npm run start
```
