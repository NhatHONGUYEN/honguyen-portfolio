import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function SimpleContactLink() {
  const t = useTranslations('ui');
  return (
    <Link
      href="#contact"
      className="inline-block rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
    >
      <span className="flex items-center gap-2 sm:gap-3 py-2 sm:py-2.5 px-4 sm:px-5 rounded-full">
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span className="text-gray-700">{t('getInTouch')}</span>
      </span>
    </Link>
  );
}
