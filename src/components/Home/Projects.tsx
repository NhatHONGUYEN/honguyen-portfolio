'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'fr' | 'en';

  return (
    <section id="projects">
      <div className="container mx-auto max-w-5xl">
        <div className="border-x border-primary/10">
          <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-11 md:py-20">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                {t('badge')}
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                {t('title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('description')}
              </p>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-6">
              {projects.slice(0, 3).map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col sm:flex-row gap-6 p-6 border border-primary/10 rounded-lg hover:bg-primary/5 transition-colors duration-300"
                >
                  {/* Image */}
                  <div className="w-full sm:w-32 h-32 sm:h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={128}
                      height={96}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-1">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {project.category[locale]} • {project.date[locale]}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {project.description[locale]}
                        </p>
                      </div>
                      <Link
                        href={`/${locale}/project/${project.id}`}
                        className="flex-shrink-0 p-2 rounded-full border border-primary/10 hover:bg-primary/10 transition-colors duration-300"
                      >
                        <ArrowUpRight className="w-4 h-4 text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
