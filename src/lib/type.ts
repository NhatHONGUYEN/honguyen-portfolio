export type IconsItem = {
  key: number;
  src: string;
  alt: string;
};

export type Project = {
  id: number;
  date: {
    fr: string;
    en: string;
  };
  category: {
    fr: string;
    en: string;
  };
  title: string;
  description: {
    fr: string;
    en: string;
  };
  image: string;
  href: string;
  technologies?: string[];
  gallery?: string[];
  video?: string;
  learnings?: {
    fr: string;
    en: string;
  };
  motivation?: {
    fr: string;
    en: string;
  };
  challenges?: {
    fr: string;
    en: string;
  };
  github?:
    | string
    | {
        frontend?: string;
        backend?: string;
        config?: string;
        mobile?: string;
        [key: string]: string | undefined;
      };
};

export type NavigationItem = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

export type Experience = {
  id: number;
  icon: string;
  fallback: string;
  role: {
    fr: string;
    en: string;
  };
  company: {
    fr: string;
    en: string;
  };
  startYear: string;
  endYear: string;
  location: string;
  bulletPoints: {
    fr: string[];
    en: string[];
  };
  technologies?: string;
};

export type Education = {
  id: number;
  date: string;
  title: {
    fr: string;
    en: string;
  };
  subtitle: {
    fr: string;
    en: string;
  };
};
