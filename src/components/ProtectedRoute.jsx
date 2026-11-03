// src/components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    // ذخیره مسیر فعلی برای بازگشت بعد از لاگین
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}