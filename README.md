# Tiberiu-Ioan Boșcan — Software Developer Portfolio

Welcome to my portfolio! I'm a **Software Developer** passionate about building interactive, performant, and visually appealing web applications from front to back.

## Live Website

🔗 **[boscantiberiu.vercel.app](https://boscantiberiu.vercel.app/)** — Hosted on **Vercel**.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tbtiberiu/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Tech Stack

- **[Next.js 16](https://nextjs.org/docs):** React framework with server-side rendering (SSR), static site generation (SSG), and Turbopack for fast dev builds.
- **[React 19](https://react.dev/):** UI library for building component-driven interfaces.
- **[TypeScript](https://www.typescriptlang.org/):** Strongly typed JavaScript for building scalable and maintainable applications.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Utility-first CSS framework for creating responsive and modern UI designs.
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) / [Three.js](https://threejs.org/):** 3D graphics library used to create interactive background spheres.
- **[GSAP](https://greensock.com/gsap/):** High-performance animation library for smooth transitions and custom cursor effects.
- **[next-themes](https://github.com/pacocoursey/next-themes):** Theme management for dark/light mode with system preference detection.
- **[Heroicons](https://heroicons.com/):** SVG icon set used across the UI.
- **[Biome](https://biomejs.dev/):** Fast formatter and linter for consistent, clean, and optimized code.
- **[Lefthook](https://github.com/evilmartians/lefthook):** Git hooks manager for running linting and formatting checks before commits.
- **[Vercel](https://vercel.com/):** Deployment platform with continuous integration and global edge delivery.

## Features

- **Responsive Design:** Optimized layout that adapts seamlessly to all devices — mobile, tablet, and desktop.
- **Dark / Light Theme:** Toggle between dark and light mode, with system preference detection out of the box.
- **3D Background:** Built using **React Three Fiber (Three.js)** for dynamic, visually engaging spheres.
- **Smooth Animations:** Implemented with **GSAP** to create fluid transitions and a custom cursor effect.
- **Project Filtering:** Browse projects by category (Web Development, Games, AI & Machine Learning).
- **Downloadable Resume:** One-click PDF resume download directly from the profile section.
- **Clean Codebase:** Fully written in **TypeScript** and maintained with **Biome** for consistent formatting and linting.
- **Modern UI/UX:** Minimal, elegant interface focused on readability and user engagement.

## Project Structure

```
├── app/                  # Next.js app router (layout, page, fonts, global styles)
├── components/
│   ├── about-section/    # About Me section
│   ├── experience-section/ # Work experience timeline
│   ├── navbar/           # Navigation bar with theme toggle
│   ├── profile-section/  # Hero / profile section
│   ├── projects-section/ # Project cards with category filtering
│   ├── shared/           # Reusable components (icons, buttons, cursor)
│   ├── social-links/     # Sidebar social links
│   └── three/            # React Three Fiber 3D background components
├── data/                 # Static data for experiences and projects
├── types/                # TypeScript type definitions
└── public/               # Static assets (images, resume PDF, OG icon)
```

## Contact

Feel free to reach out:

- **Email:** tiberiuioan35@gmail.com
- **LinkedIn:** [@tbtiberiu](https://www.linkedin.com/in/tbtiberiu/)
- **GitHub:** [@tbtiberiu](https://github.com/tbtiberiu/)
