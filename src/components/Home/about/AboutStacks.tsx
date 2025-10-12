import { backendStacks, frontendStacks, toolsStacks } from '@/lib/data/Stacks';
import { useTranslations } from 'next-intl';

export default function AboutStacks() {
  const t = useTranslations('about');

  return (
    <div className="flex flex-col gap-6">
      {/* Frontend Section */}
      <div>
        <p className="text-sm text-primary uppercase font-medium mb-2">
          {t('frontend')}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {frontendStacks.map((value, index) => (
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
      {/* Backend Section */}
      <div>
        <p className="text-sm text-primary uppercase font-medium mb-2">
          {t('backend')}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {backendStacks.map((value, index) => (
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
      {/* Tools Section */}
      <div>
        <p className="text-sm text-primary uppercase font-medium mb-2">
          {t('tools')}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {toolsStacks.map((value, index) => (
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
  );
}
