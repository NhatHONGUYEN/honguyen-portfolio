import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/SocialIcons';
import SimpleContactLink from '@/components/ui/buttons/SimpleContactLink';
import Link from 'next/link';

export default function HeroActionContact() {
  const socialIcons = [
    {
      href: 'https://twitter.com',
      icon: 'twitter',
      component: TwitterIcon,
    },
    {
      href: 'https://instagram.com',
      icon: 'instagram',
      component: InstagramIcon,
    },
    {
      href: 'https://github.com/NhatHONGUYEN',
      icon: 'github',
      component: GitHubIcon,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-end xl:items-center justify-center lg:justify-end gap-4 mt-6 lg:mt-0 lg:pr-16">
      <div className="flex items-center gap-2 sm:gap-3">
        {socialIcons?.map((social, index) => {
          const IconComponent = social.component;
          return (
            <Link
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-primary/5 border border-primary/10 rounded-full transition-colors"
            >
              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          );
        })}
      </div>
      <SimpleContactLink />
    </div>
  );
}
