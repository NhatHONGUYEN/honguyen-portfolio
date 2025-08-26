import React from 'react';
import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const servicesBadge = [
    'React Development',
    'Next.js',
    'Angular',
    'Java',
    'TypeScript',
    'Node.js',
    'API Development',
    'Database Design',
    'Responsive Design',
    'Testing',
    'Performance Optimization',
    'UI/UX Implementation',
  ];

  return (
    <section id="about">
      <div className="container mx-auto max-w-5xl">
        <div className="border-x border-primary/10">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                {t('badge')}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                {t('paragraphs.first')}{' '}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  {t('title')}
                </span>{' '}
                <span className="border-b-2">développeur Full-Stack</span>.
              </h2>
              <h5 className="text-secondary-foreground font-normal">
                {t('paragraphs.second')}
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Compétences
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesBadge?.map((value, index) => (
                  <div
                    key={index}
                    className="w-fit py-1.5 px-3 border border-primary/10 rounded-lg bg-background/50"
                  >
                    <p className="text-xs sm:text-sm font-medium text-primary">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
