import type Project from '@/types/project'

export const projects: Project[] = [
  {
    title: "Dedal's Labyrinth - Maze Generator & Solver",
    description:
      'Award-winning labyrinth path generation and shortest-path solver built during a 24-hour hackathon by UPB & SIE (securing 2nd place). Features a custom procedural maze generator, BFS shortest pathfinding algorithm, interactive React/TypeScript UI designed in Figma, and an ASP.NET Core 8 backend with MySQL and Entity Framework.',
    tags: ['Games', 'React · TypeScript · ASP.NET Core · MySQL · BFS'],
    categories: ['Games', 'Web Development'],
    year: '2024',
    image: '/images/dedal-labyrinth.png',
    github: 'https://github.com/tbtiberiu/DedalLabyrinth',
  },
  {
    title: 'DeForge-AI - AI-Generated Image Detector',
    description:
      'Universal deepfake and synthetic image detector designed for generalization across unseen commercial generators. Combines a DINOv3 Vision Transformer with LoRA adaptation and a high-frequency SRM forensic CNN branch, achieving 94.66% accuracy on the AIGC benchmark and earning the maximum grade for a Master’s thesis.',
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
      'Nova App is a concept website showcasing futuristic concept cars, developed with Node.js, Express, Handlebars, and MySQL. It features user authentication, dynamic content rendering, and relational database integration. Deployed on Heroku, the project earned a perfect 10/10 score in Web Application Development.',
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
      'Classic casino Blackjack game built with React.js on the frontend and an ASP.NET Core backend. Engineered with clean architecture and classic Gang of Four (GoF) design patterns to manage game state, deck shuffling, dealer rules, and player decision flows with high maintainability.',
    tags: ['Games', 'React · TypeScript · ASP.NET Core · C# · Design Patterns'],
    categories: ['Games', 'Web Development'],
    year: '2024',
    image: '/images/blackjack.png',
    github: 'https://github.com/tbtiberiu/Blackjack',
  },
  {
    title: 'Chess Snapshot - Chess Recognition & Analyzer',
    description:
      'End-to-end chess recognition system that automates board state detection from real-world photos. Includes an object detection model trained with YOLOv8 & OpenCV (mAP50 0.98), a Flask REST API with Stockfish engine evaluation, and a cross-platform Flutter app for Windows and Android with local bot play and game analysis.',
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
      'Interactive mobile AR application developed in Unity with ARCore and C#. Simulates an operational Arduino microcontroller circuit in 3D space with an LED and interactive wiring, allowing users to physically connect wires, inspect the running circuit behavior, and read the embedded Arduino code.',
    tags: ['Games', 'Unity · ARCore · C# · Mobile AR · 3D Simulation'],
    categories: ['Games'],
    year: '2023',
    image: '/images/arduino-simulation.png',
    github: 'https://github.com/tbtiberiu/ARduinoSimulation',
  },
  {
    title: 'Acme Shop - E-commerce Website Template',
    description:
      'Dynamic e-commerce website template built with React and Redux, inspired by Webflow’s Biznus template. Features full product browsing, shopping cart state management, and client-side routing with React Router.',
    tags: ['Web Development', 'React · Redux · HTML · CSS · JavaScript'],
    categories: ['Web Development'],
    year: '2022',
    image: '/images/acme-shop.png',
    github: 'https://github.com/tbtiberiu/acme-shop',
  },
  {
    title: 'John Doe Mountain - Birds Photo Gallery',
    description:
      'Editorial web-based photo gallery showcase designed in Adobe XD and implemented with responsive HTML and Sass, featuring clean typography, grid layouts, and visual storytelling.',
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
