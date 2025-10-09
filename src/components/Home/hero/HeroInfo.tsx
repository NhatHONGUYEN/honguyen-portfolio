import { useTranslations } from 'next-intl';

export default function HeroInfo() {
  const t = useTranslations('hero');
  return (
    <div className="flex flex-col pl-2 gap-2 sm:gap-3 text-center lg:text-left mt-12 sm:mt-8 lg:mt-0">
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
        <p className="text-primary text-sm sm:text-base">Paris, France</p>
      </div>
    </div>
  );
}
