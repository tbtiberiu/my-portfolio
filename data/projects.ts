import type Project from '@/types/project'

export const projects: Project[] = [
  {
    title: 'DeForge-AI - AI-Generated Image Detector',
    description:
      'AI-generated image detector combining a DINOv3 Vision Transformer with LoRA and an SRM-based forensic CNN. The project reports 94.66% accuracy on AIGC-Detection-Benchmark and 90.80% on 140k Real-and-Fake-Faces.',
    tags: [
      'AI & Machine Learning',
      'PyTorch',
      'Vision Transformers',
      'CNN',
      'LoRA',
    ],
    categories: ['AI & Machine Learning'],
    year: '2025–2026',
    image: '/images/deforge-ai.png',
    github: 'https://github.com/tbtiberiu/DeForge-AI',
    links: [
      {
        label: 'Try demo',
        href: 'https://huggingface.co/spaces/TheKernel01/DeForge-AIGIBench-Space',
      },
      {
        label: 'Benchmark results',
        href: 'https://github.com/tbtiberiu/DeForge-AIGIBench#detection-results',
      },
    ],
  },
  {
    title: "Dedal's Labyrinth - Maze Generator & Solver",
    description:
      'Second-place hackathon project: a React and TypeScript maze interface with procedural generation and BFS shortest-path visualization, backed by ASP.NET Core and MySQL.',
    tags: ['Games', 'React', 'TypeScript', 'ASP.NET Core', 'MySQL', 'BFS'],
    categories: ['Games', 'Web Development'],
    year: '2024',
    image: '/images/dedal-labyrinth.png',
    github: 'https://github.com/tbtiberiu/DedalLabyrinth',
  },
  {
    title: 'Chess Snapshot - Chess Recognition & Analyzer',
    description:
      'Cross-platform app that converts photos of physical chessboards into FEN positions using a custom YOLOv8 detector, a Flask API, and a Flutter client with Stockfish analysis. The detector reached mAP50 0.98 and mAP50-95 0.81 in project evaluation.',
    tags: [
      'AI & Machine Learning',
      'Python',
      'OpenCV',
      'YOLOv8',
      'Flask',
      'Flutter',
    ],
    categories: ['AI & Machine Learning'],
    year: '2023–2024',
    image: '/images/chess-snapshot.png',
    github: 'https://github.com/tbtiberiu/chess_snapshot_app',
  },
  {
    title: 'MyGallery - Image Gallery',
    description:
      'React image gallery using json-server for image metadata, with Azure deployment configuration managed through Terraform and GitHub Actions.',
    tags: ['Web Development', 'React', 'Azure', 'Terraform', 'GitHub Actions'],
    categories: ['Web Development'],
    year: '2022',
    image: '/images/mygallery.png',
    github: 'https://github.com/tbtiberiu/mygallery',
    links: [
      {
        label: 'Presentation video',
        href: 'https://github.com/tbtiberiu/mygallery/blob/main/presentation.mp4',
      },
    ],
  },
]

export const moreProjects: Project[] = [
  {
    title: 'Acme Shop - E-commerce Website Template',
    description:
      'React and Redux storefront template with product browsing, cart state, and client-side routing.',
    tags: ['Web Development', 'React', 'Redux', 'React Router'],
    categories: ['Web Development'],
    year: '2022',
    github: 'https://github.com/tbtiberiu/acme-shop',
  },
  {
    title: 'Nova Cars - Car Dealership Website',
    description:
      'Course project for a dealership catalog with authentication and dynamic inventory pages, built with Node.js, Express, Handlebars, and MySQL.',
    tags: ['Web Development', 'Node.js', 'Express', 'Handlebars', 'MySQL'],
    categories: ['Web Development'],
    year: '2024',
    github: 'https://github.com/tbtiberiu/nova-app',
  },
  {
    title: 'Blackjack - Interactive Card Game',
    description:
      'Browser-based Blackjack game with a React and TypeScript client and an ASP.NET Core backend for game rules and state.',
    tags: ['Games', 'React', 'TypeScript', 'ASP.NET Core', 'C#'],
    categories: ['Games', 'Web Development'],
    year: '2024',
    github: 'https://github.com/tbtiberiu/Blackjack',
  },
  {
    title: 'ARduino Simulation - Augmented Reality Circuit',
    description:
      'Unity mobile AR prototype for placing and connecting a simulated Arduino circuit, viewing its behavior, and inspecting the Arduino code.',
    tags: ['Games', 'Unity', 'ARCore', 'C#', 'Mobile AR'],
    categories: ['Games'],
    year: '2023',
    github: 'https://github.com/tbtiberiu/ARduinoSimulation',
  },
  {
    title: 'Triviador - Multiplayer Quiz Strategy Game',
    description:
      'Second-year B.Sc. team project at Transilvania University of Brașov, built by a team of four. The Qt/C++ game uses client-server networking and SQLite to support multiplayer quiz matches, territory capture, and game history.',
    tags: ['C++', 'Qt', 'Client-server', 'SQLite', 'Team of 4'],
    categories: ['Games'],
    year: '2023',
    github: 'https://github.com/andreicorbu1/Triviador',
    links: [
      {
        label: 'Presentation video',
        href: 'https://github.com/andreicorbu1/Triviador/blob/main/prezentarefaramuzica.mp4',
      },
    ],
  },
  {
    title: 'PizzaRush',
    description:
      'Third-year B.Sc. team project at Transilvania University of Brașov, built by a team of three. See the repository for project details.',
    tags: ['Games', 'Academic team project', 'Team of 3'],
    categories: ['Games'],
    year: '2024',
    github: 'https://github.com/CristianGabrielCiortea/PizzaRush',
  },
]

export const projectCategories = [
  'All',
  'Web Development',
  'Games',
  'AI & Machine Learning',
] as const
