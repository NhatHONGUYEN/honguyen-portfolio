import React from 'react';
import { useTranslations } from 'next-intl';
import AboutStacks from './AboutStacks';

export default function About() {
  const t = useTranslations('about');

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
                {t('paragraphs.first')}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  {t('title')}
                </span>
              </h2>
              <h5 className="text-secondary-foreground font-normal">
                {t('paragraphs.second')}
              </h5>
            </div>
            <AboutStacks />
          </div>
        </div>
      </div>
    </section>
  );
}
