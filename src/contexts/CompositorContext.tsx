import { createContext } from 'react';

export interface CompositorContextValue {
  enabled: boolean,
  wm: string | null
}

export const defaultCompositorValue = {
  enabled: false,
  wm: null,
};

export const CompositorContext =
  createContext<CompositorContextValue>(defaultCompositorValue);