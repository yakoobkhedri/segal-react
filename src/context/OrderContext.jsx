// src/context/OrderContext.jsx
import { createContext, useContext, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { useOrders as useOrdersHook } from '../hooks/useOrders';
//             ^^^^^^^^^^^^^^^^ نام مستعار

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const { user } = useAuth();
  const userPhone = user?.phone || null;

  // ✅ استفاده از نام مستعار
  const {
    orders,
    loading,
    error,
    addOrder,
    removeOrder,
    clearOrders,
    refetch,
  } = useOrdersHook(userPhone);

  const getOrder = (orderNumber) =>
    orders.find((o) => o.orderNumber === orderNumber);

  const value = useMemo(
    () => ({
      orders,
      loading,
      error,
      addOrder,
      removeOrder,
      clearOrders,
      getOrder,
      refetch,
    }),
    [orders, loading, error, addOrder, removeOrder, clearOrders, refetch]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

// ✅ این همان useOrders است که کامپوننت‌ها استفاده می‌کنند
export const useOrders = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrders باید داخل OrderProvider استفاده شود');
  return ctx;
};