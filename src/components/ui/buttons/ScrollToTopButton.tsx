'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowUp } from 'lucide-react';
import { Button } from '../button';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('ui');

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed left-16 sm:left-auto  bottom-4 sm:right-4">
      <Button onClick={scrollToTop} size="lg" className="group rounded-full  ">
        <ArrowUp className="mr-2 h-4 w-4" aria-hidden="true" />
        {t('scrollToTop')}
      </Button>
    </div>
  );
}
