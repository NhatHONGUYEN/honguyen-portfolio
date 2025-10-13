import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CvDownloadButton() {
  const t = useTranslations('ui');
  return (
    <Link
      href="/CV%20Nhat%20Quan%20HO%20NGUYEN.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block w-48 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
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
            d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
          />
        </svg>
        <span className="text-gray-700">{t('downloadCV')}</span>
      </span>
    </Link>
  );
}
