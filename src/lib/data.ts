import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from '../components/SocialIcons';
import { NavigationItem, Project, Experience, Education } from './type';

export const navigation: NavigationItem[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hnnq.dev/',
    icon: InstagramIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/NhatHONGUYEN',
    icon: GitHubIcon,
  },
  {
    name: 'Twitter',
    href: 'https://x.com/Nhatflix_',
    icon: TwitterIcon,
  },
];

export const projects: Project[] = [
  {
    id: 1,
    date: {
      fr: 'Mars, 2025',
      en: 'March, 2025',
    },
    category: {
      fr: 'Santé',
      en: 'Health',
    },
    title: 'DocBoard',
    description: {
      fr: 'Plateforme intuitive pour prendre rendez-vous et gérer son suivi médical en ligne.',
      en: 'Intuitive platform for booking appointments and managing medical follow-up online.',
    },
    image: '/images/projects/DocBoard - Medical Dashboard.png',
    href: 'https://doc-board.vercel.app/',
    github: 'https://github.com/NhatHONGUYEN/doc-board',
  },

  {
    id: 2,
    date: {
      fr: 'Mars, 2025',
      en: 'March, 2025',
    },
    category: {
      fr: 'Apprentissage des Langues',
      en: 'Language Learning',
    },
    title: 'Mocou',
    description: {
      fr: 'Application ludique pour apprendre le coréen avec Pochacco.',
      en: 'Fun app for learning Korean with Pochacco.',
    },
    image:
      'https://res.cloudinary.com/nhatflux/image/upload/f_webp/cznrzf6wnnixp9vcvnen',
    href: 'https://mocou.vercel.app/',
    github: 'https://github.com/NhatHONGUYEN/Mocou',
  },

  {
    id: 3,
    date: {
      fr: 'Février, 2025',
      en: 'February, 2025',
    },
    category: {
      fr: 'Blog',
      en: 'Blog',
    },
    title: 'NhatBlog',
    description: {
      fr: 'Blog personnel pour partager mon parcours et mes conseils de développeur.',
      en: 'Personal blog to share my journey and developer tips.',
    },
    image: '/images/projects/blog.webp',
    href: 'https://nhathnblog.vercel.app/',
    github: 'https://github.com/NhatHONGUYEN/mdxblog',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    icon: '/logo/tkorpLogo.png',
    fallback: 'TK',
    role: {
      fr: 'Développeur Fullstack – Stage',
      en: 'Fullstack Developer – Internship',
    },
    company: {
      fr: 'Tkorp, Paris',
      en: 'Tkorp, Paris',
    },
    startYear: '07/2025',
    endYear: 'Présent',
    location: 'Paris',
    bulletPoints: {
      fr: [
        'Participation aux sprints et aux revues de code dans un environnement Agile (Scrum)',
        'Résolution de bugs et amélioration de la stabilité et de la qualité du code',
        'Contribution au développement front-end et back-end',
        'Documentation des fonctionnalités et suivi des tâches dans un outil de gestion de projet',
      ],
      en: [
        'Participation in sprints and code reviews in an Agile environment (Scrum)',
        'Bug resolution and improvement of code stability and quality',
        'Contribution to front-end and back-end development',
        'Feature documentation and task tracking in project management tools',
      ],
    },
    technologies:
      'Next.js, NestJS, TypeScript, MongoDB, Docker, GitHub Actions, DBeaver, Postman',
  },
  {
    id: 2,
    icon: '/logo/lacapsuleLogo.png',
    fallback: 'LC',
    role: {
      fr: 'Formation Développeur Web',
      en: 'Web Developer Training',
    },
    company: {
      fr: 'La Capsule PARIS',
      en: 'La Capsule PARIS',
    },
    startYear: '2024',
    endYear: '2024',
    location: 'Paris',
    bulletPoints: {
      fr: [
        "RCNP Niv. 6 (Bac+4) : Concepteur-développeur d'applications web et mobile",
        'Formation intensive en développement web full-stack',
        'Apprentissage de React, Next.js, Node.js et bases de données',
      ],
      en: [
        'RCNP Level 6 (Bachelor+4): Web and mobile application designer-developer',
        'Intensive full-stack web development training',
        'Learning React, Next.js, Node.js and databases',
      ],
    },
  },
  {
    id: 3,
    icon: '/logo/lacosteLogo.png',
    fallback: 'LA',
    role: {
      fr: 'Vendeur',
      en: 'Sales Associate',
    },
    company: {
      fr: 'LACOSTE, PARIS',
      en: 'LACOSTE, PARIS',
    },
    startYear: '05/2020',
    endYear: '02/2024',
    location: 'Paris',
    bulletPoints: {
      fr: [
        'Accueil et conseil clientèle dans un environnement dynamique',
        'Travail en équipe pour atteindre les objectifs de vente et assurer la bonne tenue du magasin',
      ],
      en: [
        'Customer reception and advice in a dynamic environment',
        'Teamwork to achieve sales objectives and ensure proper store management',
      ],
    },
  },
];

export const educationData: Education[] = [
  {
    id: 1,
    date: '2024',
    title: {
      fr: "RCNP Niv. 6 (Bac+4) : Concepteur-développeur d'applications web et mobile",
      en: 'RNCP Level 6 (Bachelor+4): Web and Mobile Application Designer-Developer',
    },
    subtitle: {
      fr: 'La Capsule PARIS',
      en: 'La Capsule PARIS',
    },
  },
  {
    id: 2,
    date: '2009-2012',
    title: {
      fr: 'BAC STI Génie électronique',
      en: 'STI Electronics Engineering Baccalaureate',
    },
    subtitle: {
      fr: 'LYCÉE COUFFIGNAL, STRASBOURG',
      en: 'COUFFIGNAL HIGH SCHOOL, STRASBOURG',
    },
  },
];

export const servicesBadge = [
  'React Development',
  'Next.js',
  'NestJS',
  'TypeScript',
  'Node.js',
  'GraphQL',
  'Apollo',
  'Jest',
  'DBeaver',
  'Postman',
  'Motion',
  'Zustand',
  'TanStack Query',
  'Tailwind CSS',
  'Git & GitHub',
];
