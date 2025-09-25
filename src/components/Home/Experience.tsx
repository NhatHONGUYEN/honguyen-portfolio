'use client';
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useTranslations, useLocale } from 'next-intl';
import { experiences } from '@/lib/data';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as 'fr' | 'en';

  return (
    <section id="experience">
      <div className="container mx-auto max-w-5xl bg-background">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
              {t('title')}
            </p>
          </div>
          <div className="border-t border-primary/10">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="flex flex-col gap-5 border-dashed border-b border-primary/10 last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src={experience.icon}
                      alt={`${experience.company[locale]} logo`}
                    />
                    <AvatarFallback className="text-xs font-medium">
                      {experience.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-wrap gap-5 items-center justify-between">
                    <div className="flex flex-col">
                      <h5 className="text-lg font-semibold text-primary">
                        {experience.role[locale]}
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {experience.company[locale]}
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5 border border-primary/10 rounded-lg py-1.5 px-3">
                      <div
                        className={`w-4 h-2 rounded-sm ${
                          experience.endYear === 'Présent'
                            ? 'bg-primary'
                            : 'bg-primary/10'
                        }`}
                      />
                      <p className="text-sm xs:text-base text-primary">
                        {experience.startYear} – {experience.endYear}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {experience.bulletPoints[locale].map(
                      (point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-sm font-normal text-muted-foreground"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      )
                    )}
                  </ul>
                  {experience.technologies && (
                    <div className="mt-3">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">
                          {t('technologies')} :
                        </span>{' '}
                        {experience.technologies}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
