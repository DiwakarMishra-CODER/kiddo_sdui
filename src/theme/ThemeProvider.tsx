import React, { createContext, useContext } from 'react';
import { defaultTheme, type Theme } from '@/types/theme';

/** Context holding the active runtime theme from the SDUI payload. */
const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

/** Wraps the root with the payload-driven theme so every child can call useTheme(). */
export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

/** Hook to access the current runtime theme. Throws if used outside ThemeProvider. */
export function useTheme(): Theme {
  return useContext(ThemeContext);
}
