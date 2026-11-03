// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

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

  useEffect(() => {
    if (user) {
      localStorage.setItem('segal-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('segal-user');
    }
  }, [user]);

  // ورود
  const login = (userData) => {
    setUser({
      id: userData.id || Date.now(),
      name: userData.name || 'کاربر',
      phone: userData.phone || '',
      email: userData.email || '',
      isLoggedIn: true,
    });
  };

  // خروج
  const logout = () => {
    setUser(null);
  };

  // بررسی وضعیت
  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth باید داخل AuthProvider استفاده شود');
  }
  return context;
};