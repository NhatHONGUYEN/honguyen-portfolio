'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure the component is only mounted on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Show nothing until mounted (avoids hydration mismatch)
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="opacity-0 transition-transform"
      />
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="transition-transform"
      onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
