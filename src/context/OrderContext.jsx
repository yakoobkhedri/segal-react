// src/context/OrderContext.jsx
import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('segal-orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('segal-orders', JSON.stringify(orders));
    } catch (e) {
      console.warn('ذخیره سفارشات ناموفق بود', e);
    }
  }, [orders]);

  const addOrder = useCallback((order) => {
    setOrders((prev) => [order, ...prev]);
  }, []);

  const removeOrder = useCallback((orderNumber) => {
    setOrders((prev) => prev.filter((o) => o.orderNumber !== orderNumber));
  }, []);

  const clearOrders = useCallback(() => setOrders([]), []);

  const getOrder = useCallback(
    (orderNumber) => orders.find((o) => o.orderNumber === orderNumber),
    [orders]
  );

  const value = useMemo(
    () => ({ orders, addOrder, removeOrder, clearOrders, getOrder }),
    [orders, addOrder, removeOrder, clearOrders, getOrder]
  );

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export const useOrders = () => {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error('useOrders باید داخل OrderProvider استفاده شود');
  return ctx;
};