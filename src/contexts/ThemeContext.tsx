import { createContext } from 'react';

export interface ThemeContextValue {
  colors: Record<string, number>,
  file: string | null
}

export const defaultThemeValue = {
  colors: {
    mainbar_background: 0xaaaaaa
  },
  file: null
};

export const ThemeContext =
  createContext<ThemeContextValue>(defaultThemeValue);