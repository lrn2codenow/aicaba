
'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-gray-800" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" aria-hidden="true" />
      )}
    </button>
  );
}
