'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale: pathLocale } = useParams() as { locale: string };
  const locale = useLocale() as 'fr' | 'en';
  const router = useRouter();

  const getPathWithNewLocale = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${pathLocale}`, '');
    return `/${newLocale}${pathWithoutLocale}`;
  };

  const handleToggle = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    router.push(getPathWithNewLocale(newLocale));
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="flex items-center gap-2"
      aria-label="Changer de langue"
    >
      <span className="font-medium uppercase">{locale}</span>
    </Button>
  );
}
