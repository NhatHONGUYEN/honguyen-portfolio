'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HamburgerButton } from '@/components/ui/hamburger-button';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './Theme/LanguageSwitcher';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('header');

  const translatedLinks = [
    { label: t('about'), href: '#about' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-2 lg:hidden">
        <HamburgerButton
          isOpen={isMenuOpen}
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 p-0 flex items-center justify-center "
        />
      </div>

      {/* Mobile Menu Navigation */}
      <div
        className={cn(
          'fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border bg-background p-6 transition-all duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-4 opacity-0'
        )}
      >
        <nav className="flex flex-1 flex-col divide-y divide-border">
          {translatedLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'py-4 text-base font-medium text-primary transition-colors first:pt-0 last:pb-0 hover:text-primary/80'
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 py-4 border-t border-border mt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
}
