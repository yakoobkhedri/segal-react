// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // هر بار مسیر عوض شد، برو بالا
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // یا 'smooth' برای اسکرول نرم
    });
  }, [pathname]);

  return null; // این کامپوننت چیزی رندر نمی‌کند
}