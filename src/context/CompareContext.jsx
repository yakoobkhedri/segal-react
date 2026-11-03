// src/context/CompareContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CompareContext = createContext();

const MAX_COMPARE = 4; // حداکثر ۴ محصول

export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('segal-compare');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('segal-compare', JSON.stringify(compareList));
  }, [compareList]);

  // افزودن به مقایسه
  const addToCompare = (product) => {
    setCompareList((prev) => {
      // اگه از قبل هست، کاری نکن
      if (prev.find((p) => p.id === product.id)) {
        return prev;
      }
      // اگه به حداکثر رسیده، اجازه نده
      if (prev.length >= MAX_COMPARE) {
        alert(`حداکثر ${MAX_COMPARE} محصول می‌تونی مقایسه کنی`);
        return prev;
      }
      return [...prev, product];
    });
  };

  // حذف از مقایسه
  const removeFromCompare = (id) => {
    setCompareList((prev) => prev.filter((p) => p.id !== id));
  };

  // پاک کردن همه
  const clearCompare = () => setCompareList([]);

  // بررسی اینکه آیا محصول توی لیست هست
  const isInCompare = (id) => compareList.some((p) => p.id === id);

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
        maxCompare: MAX_COMPARE,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare باید داخل CompareProvider استفاده شود');
  }
  return context;
};