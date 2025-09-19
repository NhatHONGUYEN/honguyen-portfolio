import { servicesBadge } from '@/lib/data';
import { useTranslations } from 'next-intl';

export default function AboutStacks() {
  const t = useTranslations('about');

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-primary uppercase font-medium">
        {t('skills')}
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
  );
}
