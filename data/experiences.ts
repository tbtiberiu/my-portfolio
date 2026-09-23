import type ExperienceInfo from '@/types/experience-info'

export const experiences: ExperienceInfo[] = [
  {
    title: 'Software Developer',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'February 2026 - Present',
    description:
      'Driving full-stack enterprise software development across financial trading systems, focusing on Java/Spring Boot backend architecture and modern React workspace solutions.',
    highlights: [
      'Architected the trading application new layout and workspace system using React and the Dockview library, implementing 8+ dynamic panel components.',
      'Co-developed interactive in-chart trading mechanisms enabling direct order execution, position opening/closing, and take-profit/stop-loss management from live charts.',
      'Engineered state persistence for user-configured filters, charts, and table layouts across sessions via session storage and backend APIs.',
      'Contributed to the frontend migration from ExtJS to React, and established automated Jenkins CI/CD pipeline steps to eliminate manual deployment errors.',
      'Maintained the Java & Spring Boot backend codebase, co-leading major release cycles with a strong focus on dependency updates and system stability.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'TypeScript',
      'Dockview',
      'Jenkins',
      'REST APIs',
      'SQL',
      'Git',
    ],
  },
  {
    title: 'Backend Developer Intern',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'July 2025 - January 2026',
    description:
      'Contributed to the core backend architecture of a high-throughput CFD trading platform on the Panther team, serving Tier-1 institutional brokers including Commerzbank.',
    highlights: [
      'Managed and optimized end-of-day (EOD) financial processing and database batch routines.',
      'Implemented robust synchronization processes between internal servers, market maker price feeds, and web servers.',
      'Collaborated closely with senior backend engineers and frontend teams to ensure high data integrity and minimal latency.',
    ],
    technologies: ['Java', 'Spring Boot', 'Linux', 'SQL', 'Git'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'February 2025 - July 2025',
    description:
      'Built and optimized React and React Native components for the Panther CFD trading application, prioritizing accessibility and user flow efficiency.',
    highlights: [
      'Revamped and streamlined the overall application flow, reducing key user action latency by up to 200ms.',
      'Optimized client bundles, cutting production build size by ~12% while maintaining strict adherence to project deadlines.',
      'Championed WCAG accessibility standards across mobile and web trading interfaces, earning praise from tech leads and clients.',
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'CSS', 'Git'],
  },
  {
    title: 'UI/UX Designer and WordPress Developer',
    company: 'Upwork · Freelance',
    location: 'Remote',
    dates: 'February 2025 - May 2025',
    description:
      'Designed and delivered four custom WordPress websites as a freelance designer and developer, creating tailored interfaces in Figma with bespoke branding.',
    highlights: [
      'Crafted user-focused interfaces and interactive wireframes in Figma, including custom vector brand logos.',
      'Built fully responsive, SEO-optimized WordPress websites with dynamic booking flows and live chat integrations.',
      'Earned 100% 5-star ratings and positive client reviews for clear communication, high fidelity, and punctual delivery.',
    ],
    technologies: [
      'Figma',
      'WordPress',
      'HTML',
      'CSS',
      'JavaScript',
      'Elementor',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2023 - December 2024',
    description:
      'Developed features and resolved performance bottlenecks across enterprise analytical software suites, including the Alliance iS HPLC System Kiosk, Console, and Method Editor apps.',
    highlights: [
      'Implemented complex user stories, resolved defect backlogs, and reviewed pull requests across multiple Angular projects.',
      'Collaborated with UI/UX designers and backend engineers in daily standups, sprint planning, and retrospectives.',
      'Troubleshot and resolved memory and render bottlenecks, ensuring optimal kiosk application speed and stability.',
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Git'],
  },
  {
    title: 'Software Automation Intern',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2022 - December 2023',
    description:
      'Engineered behavior-driven automated testing frameworks in C# and Python, with a strong emphasis on system reliability and diagnostics.',
    highlights: [
      'Built and maintained BDD test suites with MS Test, SpecFlow, and Python to validate chromatography software requirements.',
      'Architected a major overhaul of the logging system for both instrument and emulator, boosting throughput and diagnostic readability.',
      'Authored comprehensive documentation across Confluence and internal guides to support cross-team onboarding.',
    ],
    technologies: [
      'Python',
      'Pytest BDD',
      'C#',
      'MS Test',
      'SpecFlow',
      'Jenkins',
      'Git',
    ],
  },
  {
    title: 'Web Development Apprenticeship',
    company: 'Endava',
    location: 'Brasov, Romania (Hybrid)',
    dates: 'August 2022 - November 2022',
    description:
      'Acquired a strong foundation in full-stack development with React and ASP.NET Core APIs, practicing modern cloud infrastructure deployment.',
    highlights: [
      'Built responsive frontend components with React and interconnected them with ASP.NET Core backend endpoints.',
      'Provisioned cloud infrastructure on Microsoft Azure using Terraform to deploy publicly accessible web applications.',
      'Gained deep hands-on insight into Agile Scrum ceremonies, CI/CD pipelines, and DevOps best practices.',
    ],
    technologies: [
      'JavaScript',
      'React',
      'C#',
      'ASP.NET Core',
      'Azure Cloud',
      'GitHub Actions',
      'Terraform',
    ],
  },
]
