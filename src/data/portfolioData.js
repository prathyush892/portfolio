// ============================================
// PORTFOLIO DATA — Prathyush Prathipati
// ============================================

export const personalInfo = {
  name: 'Prathyush Prathipati',
  role: 'React Developer',
  tagline: 'React Dev.',
  location: 'Toronto, Ontario, Canada',
  email: 'prathipati.prathyush@gmail.com',
  phone: '905-449-8920',
  linkedin: 'https://www.linkedin.com/in/prathyush-prathipati-336054104',
  github: 'https://github.com/prathyush892', // Replace with your actual GitHub URL
  availableFor: 'Available for work · Toronto, ON',
  bio: [
    'A React developer with 8+ years of experience delivering clean, performant, and accessible web applications across fintech, real estate, and enterprise sectors.',
    'I bridge the gap between design and engineering — translating wireframes into pixel-perfect, scalable interfaces with React, Next.js and modern tooling. I led teams at Wavemaker Inc., built community engagement platforms at Hedgehog Lab, and have since expanded into full-stack development with Node.js, PostgreSQL and cloud infrastructure.',
    'Currently based in Toronto and open to opportunities in product-focused teams that value quality and craftsmanship.',
  ],
};

export const stats = [
  { target: 8, label: 'Years Experience', suffix: '+' },
  { target: 20, label: 'Projects Shipped', suffix: '+' },
  { target: 15, label: 'Technologies', suffix: '+' },
];

export const skillBars = [
  { label: 'Frontend Development', value: 95 },
  { label: 'React / Next.js', value: 92 },
  { label: 'Full-Stack (Node + PostgreSQL)', value: 78 },
  { label: 'UI/UX & Accessibility', value: 88 },
];

export const skillCards = [
  {
    icon: '⚛️',
    title: 'React Developer',
    desc: 'Building responsive, performant, and accessible user interfaces with modern JavaScript frameworks.',
    color: 'blue',
    pills: ['React JS', 'Next.js', 'TypeScript', 'Redux', 'Vue.js', 'AngularJS'],
  },
  {
    icon: '🎨',
    title: 'Styling & Design Systems',
    desc: 'Crafting pixel-perfect designs with modern CSS methodologies, animations, and component libraries.',
    color: 'purple',
    pills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind', 'Figma', 'Webpack'],
  },
  {
    icon: '🔧',
    title: 'Backend & Database',
    desc: 'Full-stack capabilities with server-side rendering, REST APIs, and relational database management.',
    color: 'red',
    pills: ['Node.js', 'REST APIs', 'SQL', 'PostgreSQL', 'MySQL', 'JSON/AJAX'],
  },
  {
    icon: '☁️',
    title: 'DevOps & Infrastructure',
    desc: 'Modern deployment pipelines, containerization, and cloud-native development workflows.',
    color: 'green',
    pills: ['Docker', 'Kubernetes', 'CI/CD', 'GIT', 'Agile'],
  },
  {
    icon: '📱',
    title: 'CMS & WordPress',
    desc: 'Custom theme and plugin development for enterprise-grade content management solutions.',
    color: 'blue',
    pills: ['WordPress', 'Custom Themes', 'WooCommerce', 'SEO'],
  },
  {
    icon: '♿',
    title: 'Quality & Standards',
    desc: 'Ensuring code quality, accessibility compliance, and cross-browser compatibility at scale.',
    color: 'purple',
    pills: ['ADA / WCAG', 'W3C Standards', 'Unit Testing', 'Jira', 'Scrum'],
  },
];

export const experiences = [
  {
    company: 'Wavemaker Inc.',
    role: 'Web Developer — Team Lead',
    period: 'Jun 2019 – Apr 2023',
    dotColor: 'blue',
    bullets: [
      'Led a 6-person team delivering mobile banking apps for BMO, CIBC & MBP — fully ADA & W3C compliant',
      "Built a custom theme-builder tool on Wavemaker's low-code platform, accelerating client onboarding by 35%",
      'Championed comprehensive unit testing culture and bi-weekly sprint ceremonies across the team',
      'Oversaw UX wireframes and concept mock-ups that boosted client satisfaction scores measurably',
    ],
  },
  {
    company: 'Hedgehog Lab',
    role: 'Web Designer & Frontend Developer',
    period: 'Aug 2018 – Jun 2019',
    dotColor: 'purple',
    bullets: [
      'Built the Built-ID platform — a community engagement tool for property developers to solicit public feedback',
      'Designed and implemented dynamic React JS data display pages integrated with CMS',
      'Collaborated in a fast-paced 4-person agile team with professional cross-functional communication',
    ],
  },
  {
    company: 'Thought Green Technologies',
    role: 'UI Developer',
    period: 'Apr 2015 – Aug 2018',
    dotColor: 'pink',
    bullets: [
      'Engineered VicForms — digital real estate form platform for Victorian agencies using HTML, CSS, JS & jQuery',
      'Developed automated email template systems based on form submissions, streamlining agent workflows',
      'Cross-functional collaboration with designers and copywriters drove 40% improvement in conversion rates',
    ],
  },
];

export const projects = [
  {
    num: '01',
    category: 'Financial App',
    title: 'NexBank Dashboard',
    desc: 'A sleek single-page banking dashboard with real-time portfolio charts, transaction history, and account management — ADA compliant and fully responsive.',
    pills: [
      { label: 'React', color: 'blue' },
      { label: 'Redux', color: 'blue' },
      { label: 'PostgreSQL', color: 'green' },
      { label: 'Recharts', color: 'purple' },
    ],
    accentColor: 'var(--accent)',
    link: 'https://nexbank-ashy.vercel.app/',
  },
  {
    num: '02',
    category: 'Branding Agency',
    title: 'Axiom Brand Studio',
    desc: 'Full-featured branding agency website with animated case studies, parallax hero, client testimonials, and a dynamic project showcase built with Next.js.',
    pills: [
      { label: 'Next.js', color: 'purple' },
      { label: 'Framer Motion', color: 'purple' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'Sanity CMS', color: 'red' },
    ],
    accentColor: 'var(--accent2)',
    link: 'https://axiom-kappa-tan.vercel.app/',
  },
  {
    num: '03',
    category: 'Component Library',
    title: 'UI Kit — Component Showcase',
    desc: 'An interactive SPA showcasing reusable React components: forms, modals, data tables, charts, and navigation patterns built for accessibility and performance.',
    pills: [
      { label: 'React', color: 'blue' },
      { label: 'Storybook', color: 'blue' },
      { label: 'Tailwind', color: 'purple' },
      { label: 'Jest', color: 'green' },
    ],
    accentColor: 'var(--accent3)',
    link: 'https://ui-tool-kit.vercel.app/',
  },
  {
    num: '04',
    category: 'Real Estate',
    title: 'PropVista Platform',
    desc: 'Property listing and community engagement platform inspired by Built-ID. Features map integration, feedback forms, and agent workflow automation.',
    pills: [
      { label: 'Vue.js', color: 'purple' },
      { label: 'Node.js', color: 'red' },
      { label: 'MySQL', color: 'red' },
      { label: 'REST API', color: 'blue' },
    ],
    accentColor: 'var(--accent4)',
    link: 'https://property-vista-omega.vercel.app/',
  },
];

export const marqueeItems = [
  'React JS', 'Next.js', 'TypeScript', 'Redux', 'Vue.js',
  'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'WordPress',
  'Figma', 'AWS CI/CD', 'Tailwind CSS', 'GraphQL', 'REST API',
];

export const contactLinks = [
  {
    icon: '✉',
    label: 'Email',
    value: 'prathipati.prathyush@gmail.com',
    href: 'mailto:prathipati.prathyush@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '905-449-8920',
    href: 'tel:+19054498920',
  },
  {
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/prathyush',
    href: 'https://www.linkedin.com/in/prathyush-prathipati-336054104',
  },
  {
    icon: '⬡',
    label: 'GitHub',
    value: 'github.com/prathyush-dev',
    href: 'https://github.com/',
  },
];
