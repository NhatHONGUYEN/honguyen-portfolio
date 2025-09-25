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
      fr: "Une plateforme complète pour la prise de rendez-vous entre patients et médecins, dotée d'un tableau de bord intuitif. Gérez vos rendez-vous, consultez votre historique médical et restez connecté avec vos professionnels de santé sans effort.",
      en: 'A comprehensive platform for scheduling appointments between patients and doctors, featuring an intuitive dashboard. Manage your appointments, check your medical history, and stay connected with your healthcare professionals effortlessly.',
    },
    image: '/images/projects/DocBoard - Medical Dashboard.png',
    href: 'https://doc-board.vercel.app/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'NextAuth.js',
      'Twilio',
    ],
    learnings: {
      fr: "Ce projet m'a initié au développement d'applications sensibles avec gestion des données médicales. J'ai appris l'importance de la sécurité, de l'authentification robuste avec NextAuth.js, et l'intégration d'APIs de notification SMS avec Twilio pour les rappels de rendez-vous.",
      en: 'This project introduced me to developing sensitive applications with medical data management. I learned the importance of security, robust authentication with NextAuth.js, and SMS notification API integration with Twilio for appointment reminders.',
    },
    motivation: {
      fr: "Ayant vécu des difficultés pour prendre rendez-vous médicaux, je voulais créer une solution qui simplifie cette démarche. L'objectif était de créer un pont numérique entre patients et professionnels de santé, tout en respectant la confidentialité des données.",
      en: 'Having experienced difficulties making medical appointments, I wanted to create a solution that simplifies this process. The goal was to create a digital bridge between patients and healthcare professionals, while respecting data confidentiality.',
    },
    challenges: {
      fr: "La sécurité des données médicales a été le défi majeur, nécessitant une compréhension approfondie du RGPD et des bonnes pratiques de chiffrement. L'intégration de Twilio pour les SMS de rappel a posé des problèmes de fiabilité et de gestion des fuseaux horaires. La conception d'une interface accessible pour tous les âges (patients âgés) tout en restant moderne a demandé plusieurs itérations UX/UI.",
      en: 'Medical data security was the major challenge, requiring deep understanding of GDPR and encryption best practices. Twilio integration for SMS reminders posed reliability issues and timezone management problems. Designing an accessible interface for all ages (elderly patients) while staying modern required several UX/UI iterations.',
    },
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
      fr: 'Une plateforme ludique et interactive pour apprendre le coréen avec le personnage adorable Pochacco. Explorez les leçons, pratiquez des exercices et suivez votre progression alors que Pochacco vous guide dans votre apprentissage du coréen.',
      en: 'A fun and interactive platform for learning Korean with the adorable Pochacco character. Explore lessons, practice exercises, and track your progress as Pochacco guides you through your Korean learning journey.',
    },
    image:
      'https://res.cloudinary.com/nhatflux/image/upload/f_webp/cznrzf6wnnixp9vcvnen',
    href: 'https://mocou.vercel.app/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Zustand',
      'Cloudinary',
    ],
    learnings: {
      fr: "Ce projet m'a permis d'explorer la gamification dans l'apprentissage et les animations avancées avec Framer Motion. J'ai appris à créer une expérience utilisateur engageante avec un système de progression, des badges, et une mascotte interactive qui guide l'utilisateur.",
      en: 'This project allowed me to explore gamification in learning and advanced animations with Framer Motion. I learned to create an engaging user experience with a progression system, badges, and an interactive mascot that guides the user.',
    },
    motivation: {
      fr: "Passionné par la culture coréenne et l'apprentissage des langues, je voulais créer une expérience d'apprentissage différente, plus ludique et moins intimidante. Pochacco apporte cette dimension kawaii qui rend l'apprentissage du coréen plus accessible et amusant.",
      en: 'Passionate about Korean culture and language learning, I wanted to create a different learning experience, more playful and less intimidating. Pochacco brings this kawaii dimension that makes learning Korean more accessible and fun.',
    },
    challenges: {
      fr: "La création d'un système de gamification équilibré a été complexe : il fallait motiver sans frustrer. Les animations avec Framer Motion ont causé des problèmes de performance sur mobile, nécessitant une optimisation poussée. La gestion des caractères coréens (Hangul) dans les formulaires et la validation des réponses ont demandé une recherche approfondie sur l'encodage UTF-8 et les spécificités linguistiques.",
      en: 'Creating a balanced gamification system was complex: it needed to motivate without frustrating. Framer Motion animations caused performance issues on mobile, requiring extensive optimization. Managing Korean characters (Hangul) in forms and answer validation required deep research on UTF-8 encoding and linguistic specificities.',
    },
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
      fr: "Mon journal intime de développeur où je partage mes expériences, mes conseils et mes apprentissages dans le monde du développement web. Un espace personnel pour documenter mon parcours et aider d'autres développeurs dans leur transition.",
      en: 'My developer diary where I share my experiences, tips, and learnings in the world of web development. A personal space to document my journey and help other developers in their transition.',
    },
    image: '/images/projects/blog.webp',
    href: 'https://nhathnblog.vercel.app/',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'MDX',
      'Contentlayer',
      'Vercel',
    ],
    learnings: {
      fr: "Ce projet m'a initié au développement de blogs avec du contenu statique. J'ai appris à utiliser MDX pour écrire du contenu riche, Contentlayer pour la gestion des articles, et à optimiser le SEO. C'était aussi l'occasion de travailler sur le design et la typographie.",
      en: 'This project introduced me to blog development with static content. I learned to use MDX for rich content writing, Contentlayer for article management, and SEO optimization. It was also an opportunity to work on design and typography.',
    },
    motivation: {
      fr: "Voulant documenter mon parcours de reconversion, j'ai créé ce blog pour partager mes apprentissages et aider d'autres personnes dans la même situation. C'est devenu mon espace de réflexion et de partage avec la communauté dev.",
      en: 'Wanting to document my career transition journey, I created this blog to share my learnings and help others in the same situation. It became my space for reflection and sharing with the dev community.',
    },
    challenges: {
      fr: "La configuration de Contentlayer avec Next.js 13+ et le nouveau App Router a été laborieuse, avec peu de documentation disponible à l'époque. L'optimisation SEO pour un blog statique nécessitait une compréhension fine des métadonnées et du sitemap. La création d'un système de tags et de catégories dynamique tout en gardant les performances optimales a demandé plusieurs refactorisations.",
      en: 'Configuring Contentlayer with Next.js 13+ and the new App Router was laborious, with little documentation available at the time. SEO optimization for a static blog required fine understanding of metadata and sitemap. Creating a dynamic tag and category system while maintaining optimal performance required several refactorings.',
    },
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
