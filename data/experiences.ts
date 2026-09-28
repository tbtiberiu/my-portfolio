import type ExperienceInfo from '@/types/experience-info'

export const experiences: ExperienceInfo[] = [
  {
    title: 'Software Developer',
    company: 'Société Générale',
    location: 'Bucharest, Romania (Hybrid)',
    dates: 'February 2026 - Present',
    description:
      'Developing features for a financial trading platform, focusing on Java and Spring Boot backend services alongside React and TypeScript interfaces.',
    highlights: [
      "Developed the application's workspace and dockable layout system using React and Dockview, building 8+ dynamic panel components.",
      'Co-developed in-chart trading features, allowing users to execute orders, manage positions, and adjust take-profit/stop-loss directly from live charts.',
      'Implemented state persistence for user-configured filters, charts, and table layouts across sessions using browser storage and backend APIs.',
      'Contributed to the ExtJS-to-React migration and added Jenkins pipeline stages for unit-test runs and deployment automation.',
      'Maintained Java and Spring Boot backend services, reviewed code, and co-led quarterly releases covering security updates and stability fixes.',
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
      'Contributed to backend services for the Panther CFD trading platform, used by institutional brokers including Commerzbank.',
    highlights: [
      'Maintained and optimized end-of-day (EOD) batch processing and database routines.',
      'Implemented synchronization processes between internal servers, market maker price feeds, and frontend web servers.',
      'Worked with backend engineers and frontend teams to troubleshoot data synchronization across services.',
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
      'Reduced production bundle size by about 12%.',
      'Improved accessibility across mobile and web trading interfaces.',
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
      'Designed and developed 4 client websites from concept to launch, creating UI mockups and prototypes in Figma alongside custom logos.',
      'Built responsive websites with integrated booking forms, contact flows, and live chat.',
      'Earned five-star client ratings for clear communication and on-time delivery.',
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
    location: 'Brașov, Romania (Remote)',
    dates: 'December 2023 - December 2024',
    description:
      'Developed features and resolved performance bottlenecks across enterprise analytical software suites, including the Alliance iS HPLC System Kiosk, Console, and Method Editor applications.',
    highlights: [
      'Implemented new features, resolved bugs, and reviewed pull requests across multiple Angular applications.',
      'Collaborated with UI/UX designers and backend engineers in daily standups, sprint planning, and retrospectives.',
      'Diagnosed and fixed memory leaks and rendering bottlenecks in the Alliance iS HPLC applications.',
    ],
    technologies: ['HTML', 'CSS', 'TypeScript', 'Angular', 'Git'],
  },
  {
    title: 'Software Automation Intern',
    company: 'Waters Corporation',
    location: 'Brașov, Romania (Remote)',
    dates: 'December 2022 - December 2023',
    description:
      'Developed automated testing suites in C# and Python, focusing on software reliability and diagnostic logging.',
    highlights: [
      'Built and maintained BDD test suites with MS Test, SpecFlow, and Python to validate chromatography software requirements.',
      'Reworked diagnostic logging for physical instruments and emulators to make events easier to trace during troubleshooting.',
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
    title: 'Web Development Apprentice',
    company: 'Endava',
    location: 'Brașov, Romania (Hybrid)',
    dates: 'August 2022 - November 2022',
    description:
      'Built React interfaces and ASP.NET Core APIs, and used Azure, Terraform, and GitHub Actions for deployment workflows.',
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
