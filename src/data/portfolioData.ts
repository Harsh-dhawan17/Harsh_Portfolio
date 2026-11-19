export type ProjectCategory = 'all' | 'fullstack' | 'backend' | 'realtime';

export interface ProjectItem {
  id: 'codecrack' | 'hirehub' | 'chat-app';
  index: string;
  title: string;
  subtitle: string;
  year: string;
  category: Exclude<ProjectCategory, 'all'>[];
  categoryLabel: string;
  stack: string[];
  summary: string;
  highlights: string[];
  architectureNotes: {
    layer: string;
    detail: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  primaryLinkLabel: string;
  primaryLinkUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  workMode: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface SkillGroup {
  id: string;
  index: string;
  title: string;
  items: string[];
  relatedProjects: ('codecrack' | 'hirehub' | 'chat-app')[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  verifyUrl: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
}

export const PROFILE = {
  name: 'Harsh Dhawan',
  role: 'Full Stack Developer',
  location: 'Dehradun, Uttarakhand, India',
  shortLocation: 'Dehradun, India',
  email: 'dhawanharsh114@gmail.com',
  phone: '+91-6397183753',
  githubUrl: 'https://github.com/Harsh-dhawan17',
  githubHandle: 'github.com/Harsh-dhawan17',
  linkedinUrl: 'https://www.linkedin.com/in/harsh-dhawan-588110263/',
  linkedinHandle: 'linkedin.com/in/harsh-dhawan',
  resumePdfUrl: '/assets/aistudio/HarshDhawan_CV__1__0e64c117.pdf',
  headline: 'Building resilient web systems from database schema to interface.',
  summary:
    'Computer Science graduate and full-stack developer working with React, TypeScript, Node.js, Express, PostgreSQL, and MongoDB. Focused on clear REST API design, dependable authentication flows, relational and document data modeling, and responsive frontend engineering.',
} as const;

export const PROJECTS: ProjectItem[] = [
  {
    id: 'codecrack',
    index: '01',
    title: 'CodeCrack',
    subtitle: 'AI-Powered Coding Platform',
    year: '2026',
    category: ['fullstack', 'realtime'],
    categoryLabel: 'Full-Stack · AI Analysis',
    stack: ['TypeScript', 'Supabase', 'PostgreSQL', 'Gemini API'],
    summary:
      'A structured programming practice platform pairing problem management and submission tracking with automated code analysis and tailored feedback.',
    highlights: [
      'Developed a coding platform featuring programming practice, problem management, user authentication, and progress tracking.',
      'Integrated Gemini API for AI-powered code analysis, programming explanations, and personalized feedback.',
      'Implemented coding submissions and database workflows using Supabase and PostgreSQL.',
    ],
    architectureNotes: [
      {
        layer: 'Client & Practice Workspace',
        detail:
          'Typed React and TypeScript problem environment handling problem selection, solution drafting, and submission state.',
      },
      {
        layer: 'Auth & Persistence',
        detail:
          'Supabase Authentication paired with PostgreSQL relational schemas storing problems, user submissions, and completion milestones.',
      },
      {
        layer: 'Code Review Pipeline',
        detail:
          'Structured prompts sent to the Gemini API to generate targeted explanations, complexity insights, and individualized feedback on submissions.',
      },
    ],
    liveUrl: 'https://codecrack.xyz',
    primaryLinkLabel: 'Live Demo',
    primaryLinkUrl: 'https://codecrack.xyz',
  },
  {
    id: 'hirehub',
    index: '02',
    title: 'HireHub',
    subtitle: 'MERN Job Portal',
    year: '2026',
    category: ['fullstack', 'backend'],
    categoryLabel: 'Full-Stack · Auth & REST API',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    summary:
      'A full-stack job portal engineered around modular Express architecture, hardened HTTP-only cookie authentication, and clean RESTful user management.',
    highlights: [
      'Developed a job portal backend using Node.js, Express.js, MongoDB, and Mongoose with RESTful user management APIs.',
      'Implemented secure registration and login using bcrypt password hashing and JWT-based authentication.',
      'Built HTTP-only cookie authentication, protected routes, authentication middleware, and logout functionality.',
      'Structured the backend using controllers, routes, middleware, models, and database utilities, with API testing through Postman.',
    ],
    architectureNotes: [
      {
        layer: 'Modular Express Architecture',
        detail:
          'Separated business concerns cleanly across routes, controllers, Mongoose models, auth middleware, and database connection utilities.',
      },
      {
        layer: 'Security & Session Lifecycle',
        detail:
          'Salted bcrypt password hashing, JWT issuance stored inside HTTP-only cookies, route-guard middleware, and explicit session revocation on logout.',
      },
      {
        layer: 'Verification & Testing',
        detail:
          'End-to-end REST endpoint verification across registration, login, protected profile access, and error cases via Postman collections.',
      },
    ],
    liveUrl: 'https://hire-hub1.vercel.app/',
    primaryLinkLabel: 'Live Demo',
    primaryLinkUrl: 'https://hire-hub1.vercel.app/',
  },
  {
    id: 'chat-app',
    index: '03',
    title: 'Real-Time Chat',
    subtitle: 'Full-Stack WebSocket Messaging',
    year: '2025',
    category: ['fullstack', 'realtime', 'backend'],
    categoryLabel: 'Real-Time · WebSockets',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets'],
    summary:
      'A low-latency messaging application combining authenticated REST endpoints with duplex WebSocket delivery and persistent conversation history.',
    highlights: [
      'Built a full-stack chat application with JWT authentication, REST APIs, and persistent message storage.',
      'Implemented WebSocket-based real-time messaging and MongoDB workflows for user and message management.',
    ],
    architectureNotes: [
      {
        layer: 'Duplex Messaging Transport',
        detail:
          'Persistent WebSocket connections push new messages directly to connected clients without polling overhead.',
      },
      {
        layer: 'Authentication & REST Sync',
        detail:
          'JWT-authenticated REST APIs bootstrap user rosters and historical conversation threads on session start.',
      },
      {
        layer: 'Document Persistence',
        detail:
          'MongoDB collections model users and ordered message histories for dependable reload and multi-session continuity.',
      },
    ],
    githubUrl: 'https://github.com/Harsh-dhawan17/Chat-App',
    primaryLinkLabel: 'GitHub Repository',
    primaryLinkUrl: 'https://github.com/Harsh-dhawan17/Chat-App',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'envirosusiq',
    role: 'Full Stack Developer Intern',
    company: 'EnviroSusIQ',
    period: 'Aug 2026 – Present',
    location: 'Dehradun, India',
    workMode: 'Hybrid',
    summary:
      'Building production web applications across TypeScript frontends, Node.js service layers, and PostgreSQL databases.',
    highlights: [
      'Developing full-stack web applications using React.js, TypeScript, Node.js, and PostgreSQL.',
      'Building RESTful APIs, authentication workflows, backend services, and database operations.',
      'Collaborating on feature development, debugging, testing, and code reviews using Git-based workflows.',
    ],
    stack: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs', 'Git'],
  },
  {
    id: 'solvionit',
    role: 'Full Stack Developer Intern',
    company: 'SolvionIT',
    period: 'Nov 2025 – Feb 2026',
    location: 'Noida, India',
    workMode: 'Remote',
    summary:
      'Shipped responsive frontend interfaces and Node.js/MongoDB backend features within a distributed Agile engineering team.',
    highlights: [
      'Developed responsive React.js and TypeScript interfaces integrated with REST APIs and backend services.',
      'Implemented application features using Node.js and MongoDB, including authentication and data workflows.',
      'Debugged application issues and collaborated with a remote Agile team using Git.',
    ],
    stack: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'REST APIs', 'Agile'],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    index: '01',
    title: 'Frontend',
    items: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Responsive Web Design',
    ],
    relatedProjects: ['codecrack', 'hirehub', 'chat-app'],
  },
  {
    id: 'backend',
    index: '02',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    relatedProjects: ['hirehub', 'chat-app'],
  },
  {
    id: 'databases',
    index: '03',
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Supabase', 'SQL'],
    relatedProjects: ['codecrack', 'hirehub', 'chat-app'],
  },
  {
    id: 'programming',
    index: '04',
    title: 'Programming',
    items: ['JavaScript', 'TypeScript', 'Java'],
    relatedProjects: ['codecrack', 'hirehub', 'chat-app'],
  },
  {
    id: 'tools',
    index: '05',
    title: 'Tools',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'MongoDB Atlas'],
    relatedProjects: ['hirehub', 'chat-app'],
  },
  {
    id: 'concepts',
    index: '06',
    title: 'Core Concepts',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Agile Development',
    ],
    relatedProjects: ['codecrack', 'hirehub'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'grdimt',
    institution: 'Guru Ram Das Institute of Management and Technology',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2022 – 2026',
    location: 'Dehradun, Uttarakhand',
    grade: 'CGPA: 7.26',
  },
  {
    id: 'grd-academy',
    institution: 'GRD Academy',
    degree: 'Senior Secondary & Secondary School (CBSE)',
    period: '2020 – 2022',
    location: 'Dehradun, Uttarakhand',
    grade: 'Class 10: 82% · Class 12: 74%',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'ai-foundation',
    title: 'Foundation of Artificial Intelligence',
    issuer: 'Coursera & Microsoft',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/VW48JRV6N98H',
  },
  {
    id: 'ml-python',
    title: 'Machine Learning with Python',
    issuer: 'freeCodeCamp',
    verifyUrl:
      'https://www.freecodecamp.org/certification/fcc046be61f-eae5-4b68-a535-0e6495309556/machine-learning-with-python-v7',
  },
  {
    id: 'intro-swe',
    title: 'Introduction to Software Development',
    issuer: 'Coursera',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/8IJ75XIDZJ25',
  },
];
