// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('segal-user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // ذخیره در localStorage
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('segal-user', JSON.stringify(user));
      } else {
        localStorage.removeItem('segal-user');
      }
    } catch (e) {
      console.warn('ذخیره کاربر ناموفق بود', e);
    }
  }, [user]);

  // ورود
  const login = useCallback((userData) => {
    setUser({
      id: userData.id || Date.now(),
      name: userData.name || 'کاربر',
      phone: userData.phone || '',
      email: userData.email || '',
      nationalCode: userData.nationalCode || '',
      address: userData.address || '',
      isLoggedIn: true,
    });
  }, []);

  // خروج
  const logout = useCallback(() => {
    setUser(null);
  }, []);

  // به‌روزرسانی اطلاعات کاربر (جدید)
  const updateUser = useCallback((updates) => {
    setUser((prev) => {
      if (!prev) return prev;
      return { ...prev, ...updates };
    });
  }, []);

  // بررسی وضعیت
  const isLoggedIn = !!user;

  const value = useMemo(
    () => ({ user, login, logout, updateUser, isLoggedIn }),
    [user, login, logout, updateUser, isLoggedIn]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth باید داخل AuthProvider استفاده شود');
  }
  return context;
};