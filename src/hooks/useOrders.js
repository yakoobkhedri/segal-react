// src/hooks/useOrders.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

// نرمال‌سازی سفارش از snake_case به camelCase
function normalizeOrder(o) {
  return {
    id: o.id,
    orderNumber: o.order_number,
    userId: o.user_id,
    userPhone: o.user_phone,
    date: o.date,
    status: o.status,
    products: o.products || [],
    address: o.address,
    receiver: o.receiver,
    phone: o.phone,
    paymentMethod: o.payment_method,
    productCost: o.product_cost,
    shippingCost: o.shipping_cost,
    totalCost: o.total_cost,
    shippingProgress: o.shipping_progress,
    shippingStatus: o.shipping_status,
    createdAt: o.created_at,
  };
}

// تبدیل سفارش از camelCase به snake_case برای Supabase
function denormalizeOrder(order) {
  return {
    order_number: order.orderNumber,
    user_phone: order.userPhone || order.phone,
    date: order.date,
    status: order.status || 'در حال پردازش',
    products: order.products,
    address: order.address,
    receiver: order.receiver,
    phone: order.phone,
    payment_method: order.paymentMethod,
    product_cost: order.productCost || 0,
    shipping_cost: order.shippingCost || 0,
    total_cost: order.totalCost || 0,
    shipping_progress: order.shippingProgress || 25,
    shipping_status: order.shippingStatus || 'در حال پردازش',
  };
}

export function useOrders(userPhone) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // دریافت سفارشات
  const fetchOrders = useCallback(async () => {
    if (!userPhone) {
      setOrders([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_phone', userPhone)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('خطا در دریافت سفارشات:', error);
      setError(error.message);
    } else {
      setOrders((data || []).map(normalizeOrder));
    }
    setLoading(false);
  }, [userPhone]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // افزودن سفارش
  const addOrder = useCallback(async (order) => {
    const { data, error } = await supabase
      .from('orders')
      .insert([denormalizeOrder(order)])
      .select()
      .single();

    if (error) {
      console.error('خطا در ثبت سفارش:', error);
      setError(error.message);
      return null;
    }

    const normalized = normalizeOrder(data);
    setOrders((prev) => [normalized, ...prev]);
    return normalized;
  }, []);

  // حذف سفارش
  const removeOrder = useCallback(async (orderNumber) => {
    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('order_number', orderNumber);

    if (error) {
      console.error('خطا در حذف سفارش:', error);
      return false;
    }
    setOrders((prev) => prev.filter((o) => o.orderNumber !== orderNumber));
    return true;
  }, []);

  // پاک کردن همه (فقط برای دمو)
  const clearOrders = useCallback(async () => {
    if (!userPhone) return;
    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('user_phone', userPhone);

    if (!error) setOrders([]);
  }, [userPhone]);

  return {
    orders,
    loading,
    error,
    addOrder,
    removeOrder,
    clearOrders,
    refetch: fetchOrders,
  };
}