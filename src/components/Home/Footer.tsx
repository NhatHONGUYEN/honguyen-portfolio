import { navigation } from '@/lib/data';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10">
      <div className="container max-w-5xl mx-auto">
        <div className="border-x border-primary/10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-2 px-4 sm:px-7 py-4 md:py-7">
            <div className="flex justify-center gap-x-6">
              {navigation.map((item) => (
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  key={item.name}
                  href={item.href}
                  className="hover:text-muted-foreground dark:hover:text-muted-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-sm/6">
              © 2025 Nhat, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
