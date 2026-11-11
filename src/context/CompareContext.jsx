// src/context/CompareContext.jsx
import { createContext, useContext, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { useCompare as useCompareHook } from '../hooks/useCompare';

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const { user } = useAuth();
  const userPhone = user?.phone || null;

  const data = useCompareHook(userPhone);

  const value = useMemo(() => ({ ...data }), [data]);

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
}

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare باید داخل CompareProvider استفاده شود');
  }
  return context;
};