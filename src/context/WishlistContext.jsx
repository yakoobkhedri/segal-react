// src/context/WishlistContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('segal-wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('segal-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // افزودن به علاقه‌مندی
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // حذف از علاقه‌مندی
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  // toggle
  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      return false;
    } else {
      addToWishlist(product);
      return true;
    }
  };

  // پاک کردن همه
  const clearWishlist = () => setWishlist([]);

  // بررسی وجود
  const isInWishlist = (id) => wishlist.some((p) => p.id === id);

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        clearWishlist,
        isInWishlist,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist باید داخل WishlistProvider استفاده شود');
  }
  return context;
};