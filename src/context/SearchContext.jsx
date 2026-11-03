// src/context/SearchContext.jsx
import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  // پاک کردن جستجو
  const clearSearch = () => setSearchQuery('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch باید داخل SearchProvider استفاده شود');
  }
  return context;
};