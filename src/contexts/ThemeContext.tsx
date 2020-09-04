import { createContext } from 'react';

export interface ThemeContextValue {
  colors: Record<string, number>,
  file: string | null
}

export const defaultThemeValue = {
  colors: {
    mainbar_background: 0xdfeeee,
    mainbar_border: 0x595f5f,
    primary: 0x121212,
  },
  file: null
};

export const ThemeContext =
  createContext<ThemeContextValue>(defaultThemeValue);