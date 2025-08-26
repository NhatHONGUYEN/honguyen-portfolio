import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

import { useTranslations } from 'next-intl';
import { GitHubIcon, TwitterIcon, InstagramIcon } from '../SocialIcons';

export default function Hero() {
  const t = useTranslations('hero');

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
    <section>
      <div className="container mx-auto max-w-5xl">
        <div className="relative">
          {/* Image de bannière */}
          <div className="w-full h-64 sm:h-72 lg:h-80">
            <Image
              src={'/images/banner-bg-img.png'}
              alt="banner-img"
              width={1080}
              height={267}
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>

          {/* Avatar positionné absolument pour chevaucher */}
          <div className="absolute top-1/2 left-4 sm:left-8 md:left-16 lg:left-52 transform -translate-y-1/2 lg:-translate-x-1/2 z-10">
            <div className="relative">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-2 sm:border-4 border-white shadow-lg">
                <AvatarImage
                  src="/images/photo-profil.jpg"
                  alt="Nhat-Quan Ho Nguyen"
                  className="object-cover"
                />
              </Avatar>
              {/* Indicateur en ligne avec design shadcn/ui */}
              <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 lg:bottom-2 lg:right-6 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-white rounded-full ring-2 ring-background" />
            </div>
          </div>

          {/* Contenu principal avec grille 2 colonnes */}
          <div className="border border-primary/10 bg-background pt-16 sm:pt-20 lg:pt-32 pb-8 px-4 sm:px-6 lg:pl-32 lg:pr-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mx-auto max-w-4xl">
              {/* Colonne 1 - Informations personnelles */}
              <div className="flex flex-col gap-2 sm:gap-3 text-center lg:text-left mt-12 sm:mt-8 lg:mt-0">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Nhat-Quan Ho Nguyen
                </h1>
                <h5 className="text-blue-600 font-normal text-base sm:text-lg">
                  {t('title')}
                </h5>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-primary/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-primary text-sm sm:text-base">
                    Paris, France
                  </p>
                </div>
              </div>

              {/* Colonne 2 - Actions sociales et contact */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center lg:items-end xl:items-center justify-center lg:justify-end gap-4 mt-6 lg:mt-0">
                {/* Icônes sociales */}
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

                {/* Bouton contact */}
                <Link
                  href="#contact"
                  className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                >
                  <span className="flex items-center gap-2 sm:gap-3 bg-background hover:bg-transparent py-2 sm:py-2.5 px-4 sm:px-5 rounded-full transition-all duration-300 group">
                    <svg
                      className="w-3 h-3 sm:w-[14px] sm:h-[14px] group-hover:text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm lg:text-base font-semibold group-hover:text-white">
                      Get in touch
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
