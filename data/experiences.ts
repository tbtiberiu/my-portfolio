import type ExperienceInfo from '@/types/experience-info'

export const experiences: ExperienceInfo[] = [
  {
    title: 'Software Developer',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'February 2026 - Present',
    description:
      'Developing full-stack features for a financial trading platform, focusing primarily on Java and Spring Boot backend services alongside modern React trading interfaces.',
    highlights: [
      'Developed the application’s workspace and dockable layout system using React and Dockview, building 8+ dynamic panel components.',
      'Co-developed in-chart trading features, allowing users to execute orders, manage positions, and adjust take-profit/stop-loss directly from live charts.',
      'Implemented state persistence for user-configured filters, charts, and table layouts across sessions using browser storage and backend APIs.',
      'Contributed to migrating legacy ExtJS components to React, and added automated Jenkins pipeline steps to eliminate manual deployment steps.',
      'Maintained the Java & Spring Boot backend codebase and co-developed major release cycles focused on dependency updates, bug fixes, and system stability.',
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
      'Contributed to the backend of a large-scale CFD trading platform on the Panther team, used by institutional brokers including Commerzbank.',
    highlights: [
      'Maintained and optimized end-of-day (EOD) batch processing and database routines.',
      'Implemented synchronization processes between internal servers, market maker price feeds, and frontend web servers.',
      'Collaborated closely with senior backend engineers and frontend teams to ensure seamless data flow and high system reliability.',
    ],
    technologies: ['Java', 'Spring Boot', 'Linux', 'SQL', 'Git'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'February 2025 - July 2025',
    description:
      'Built and optimized React and React Native components for the Panther CFD trading application, focusing on usability and accessibility.',
    highlights: [
      'Streamlined the application flow, reducing interaction latency on key user actions by up to 200ms.',
      'Optimized client bundles to cut production build size by ~12% while consistently delivering on schedule.',
      'Improved accessibility across mobile and web trading interfaces, earning positive feedback from tech leads, business analysts, and clients.',
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'CSS', 'Git'],
  },
  {
    title: 'UI/UX Designer and WordPress Developer',
    company: 'Upwork · Freelance',
    location: 'Remote',
    dates: 'February 2025 - May 2025',
    description:
      'Designed and delivered custom WordPress websites for freelance clients, creating tailored interfaces and branding in Figma.',
    highlights: [
      'Designed user-friendly UI mockups and interactive wireframes in Figma, including custom logos.',
      'Built responsive WordPress websites with integrated booking forms, contact flows, and live chat.',
      'Earned consistent 5-star ratings and positive client feedback for clear communication and on-time delivery.',
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
      'Developed features and resolved performance bottlenecks across enterprise analytical software suites, including the Alliance iS HPLC System Kiosk, Console, and Method Editor applications.',
    highlights: [
      'Implemented new features, resolved bugs, and reviewed pull requests across multiple Angular applications.',
      'Collaborated with UI/UX designers and backend engineers in daily standups, sprint planning, and retrospectives.',
      'Troubleshot and resolved memory and rendering bottlenecks, ensuring optimal kiosk application speed and stability.',
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Git'],
  },
  {
    title: 'Software Automation Intern',
    company: 'Waters Corporation',
    location: 'Brasov, Romania (Remote)',
    dates: 'December 2022 - December 2023',
    description:
      'Developed automated testing suites in C# and Python, focusing on software reliability and diagnostic logging.',
    highlights: [
      'Built and maintained BDD test suites with MS Test, SpecFlow, and Python to validate chromatography software requirements.',
      'Overhauled the logging system for both the physical instrument and emulator, improving diagnostic clarity, maintainability, and event tracking.',
      'Documented testing workflows and setups in Confluence and internal guides to support cross-team onboarding.',
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
      'Built a solid foundation in full-stack development with React and ASP.NET Core APIs, alongside cloud infrastructure and DevOps practices.',
    highlights: [
      'Built responsive frontend components with React and connected them to ASP.NET Core backend endpoints.',
      'Provisioned cloud infrastructure on Microsoft Azure using Terraform to deploy and host web applications.',
      'Gained hands-on experience with Agile Scrum ceremonies, CI/CD pipelines, and cloud deployment best practices.',
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
