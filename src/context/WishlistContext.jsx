// src/context/WishlistContext.jsx
import { createContext, useContext, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { useWishlist as useWishlistHook } from '../hooks/useWishlist';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const { user } = useAuth();
  const userPhone = user?.phone || null;

  const data = useWishlistHook(userPhone);

  const value = useMemo(() => ({ ...data }), [data]);

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist باید داخل WishlistProvider استفاده شود');
  }
  return context;
};