// src/context/AddressContext.jsx
import { createContext, useContext, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { useAddresses as useAddressesHook } from '../hooks/useAddresses';

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const { user } = useAuth();
  const userPhone = user?.phone || null;

  const data = useAddressesHook(userPhone);

  const value = useMemo(() => ({ ...data }), [data]);

  return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>;
}

export const useAddresses = () => {
  const ctx = useContext(AddressContext);
  if (!ctx) throw new Error('useAddresses باید داخل AddressProvider استفاده شود');
  return ctx;
};