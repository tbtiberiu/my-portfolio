import type Project from '@/types/project'

export const projects: Project[] = [
  {
    title: "Dedal's Labyrinth - Maze Generator & Solver",
    description:
      'Labyrinth generator and shortest-path solver built during a 24-hour hackathon organized by Politehnica University of Bucharest and SIE (Foreign Intelligence Service) (2nd place winner). Features procedural maze generation, BFS pathfinding, a responsive React/TypeScript UI designed in Figma, and an ASP.NET Core 8 backend with MySQL.',
    tags: ['Games', 'React · TypeScript · ASP.NET Core · MySQL · BFS'],
    categories: ['Games', 'Web Development'],
    year: '2024',
    image: '/images/dedal-labyrinth.png',
    github: 'https://github.com/tbtiberiu/DedalLabyrinth',
  },
  {
    title: 'DeForge-AI - AI-Generated Image Detector',
    description:
      'AI image detector designed to spot visual deepfakes across unseen generative models. Combines a DINOv3 Vision Transformer with LoRA adaptation and a forensic CNN branch, achieving 94.66% accuracy on the AIGC benchmark and earning a 10/10 for my Master’s thesis.',
    tags: [
      'AI & Machine Learning',
      'PyTorch · Vision Transformers · CNN · LoRA',
    ],
    categories: ['AI & Machine Learning'],
    year: '2026',
    image: '/images/deforge-ai.png',
    github: 'https://github.com/tbtiberiu/DeForge-AI',
  },
  {
    title: 'Nova Cars - Futuristic Cars Dealership',
    description:
      'Concept dealership website showcasing futuristic vehicles, developed with Node.js, Express, Handlebars, and MySQL. Includes user authentication, dynamic catalog rendering, and Heroku deployment, earning a 10/10 score in Web Application Development.',
    tags: [
      'Web Development',
      'Node.js · Express · Handlebars · MySQL · Heroku',
    ],
    categories: ['Web Development'],
    year: '2024',
    image: '/images/nova-app.png',
    github: 'https://github.com/tbtiberiu/nova-app',
  },
  {
    title: 'Blackjack - Interactive Card Game',
    description:
      'Interactive Blackjack game built with React on the frontend and ASP.NET Core on the backend. Implemented with clean architecture and design patterns to manage deck shuffling, dealer rules, and game state smoothly.',
    tags: ['Games', 'React · TypeScript · ASP.NET Core · C# · Design Patterns'],
    categories: ['Games', 'Web Development'],
    year: '2024',
    image: '/images/blackjack.png',
    github: 'https://github.com/tbtiberiu/Blackjack',
  },
  {
    title: 'Chess Snapshot - Chess Recognition & Analyzer',
    description:
      'Computer Vision system that recognizes physical chessboard states from photos. Combines a custom YOLOv8 detection model (mAP50 0.98), a Flask REST API with Stockfish engine evaluation, and a cross-platform Flutter app for game analysis and bot play.',
    tags: [
      'AI & Machine Learning',
      'Python · OpenCV · YOLOv8 · Flask · Flutter',
    ],
    categories: ['AI & Machine Learning'],
    year: '2024',
    image: '/images/chess-snapshot.png',
    github: 'https://github.com/tbtiberiu/chess_snapshot_app',
  },
  {
    title: 'ARduino Simulation - Augmented Reality Circuit',
    description:
      'Interactive mobile AR application built in Unity with ARCore and C#. Simulates an Arduino circuit in 3D space, allowing users to connect wires in augmented reality, inspect real-time circuit behavior, and view the underlying Arduino code.',
    tags: ['Games', 'Unity · ARCore · C# · Mobile AR · 3D Simulation'],
    categories: ['Games'],
    year: '2023',
    image: '/images/arduino-simulation.png',
    github: 'https://github.com/tbtiberiu/ARduinoSimulation',
  },
  {
    title: 'Acme Shop - E-commerce Website Template',
    description:
      'E-commerce website template built with React and Redux, inspired by Webflow’s Biznus design. Features product browsing, shopping cart state management, and client-side routing with React Router.',
    tags: ['Web Development', 'React · Redux · HTML · CSS · JavaScript'],
    categories: ['Web Development'],
    year: '2022',
    image: '/images/acme-shop.png',
    github: 'https://github.com/tbtiberiu/acme-shop',
  },
  {
    title: 'John Doe Mountain - Birds Photo Gallery',
    description:
      'Responsive photo gallery showcase designed in Adobe XD and built with semantic HTML and Sass, focusing on typography, grid layouts, and visual presentation.',
    tags: ['Web Development', 'HTML · Sass · Adobe XD · Responsive Design'],
    categories: ['Web Development'],
    year: '2019',
    image: '/images/john-doe-gallery.png',
    github: 'https://github.com/tbtiberiu/John-Doe-Photo-Gallery',
  },
]

export const projectCategories = [
  'All',
  'Web Development',
  'Games',
  'AI & Machine Learning',
] as const
