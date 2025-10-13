import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons';
import Link from 'next/link';

export default function Footer() {
  const socialIcons = [
    {
      href: 'https://www.linkedin.com/in/nhat-quan-ho-nguyen/',
      icon: 'linkedin',
      component: LinkedInIcon,
    },

    {
      href: 'https://github.com/NhatHONGUYEN',
      icon: 'github',
      component: GitHubIcon,
    },
  ];

  return (
    <footer>
      <div className="container max-w-5xl mx-auto bg-background">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-2 px-4 sm:px-7 py-4 md:py-7">
            <div className="flex justify-center gap-x-6">
              {socialIcons.map((social, index) => {
                const IconComponent = social.component;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
                  >
                    <span className="sr-only">{social.icon}</span>
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                );
              })}
            </div>
            <p className="mt-8 text-center text-sm/6">
              © 2025 Nhat, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
