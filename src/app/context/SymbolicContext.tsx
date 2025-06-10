import { createContext, useContext } from 'react';

export const SymbolicContext = createContext<unknown>(null);

export function useSymbolicContext() {
  return useContext(SymbolicContext);
} 