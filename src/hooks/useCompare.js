// src/hooks/useCompare.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

const MAX_COMPARE = 4;

export function useCompare(userPhone) {
  const [compareList, setCompareList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCompare = useCallback(async () => {
    if (!userPhone) {
      setCompareList([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('compares')
      .select('*')
      .eq('user_phone', userPhone)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('خطا در دریافت مقایسه‌ها:', error);
      setError(error.message);
    } else {
      const items = (data || []).map((row) => ({
        ...row.product_data,
        id: row.product_id,
      }));
      setCompareList(items);
    }
    setLoading(false);
  }, [userPhone]);

  useEffect(() => {
    fetchCompare();
  }, [fetchCompare]);

  const isInCompare = useCallback(
    (id) => compareList.some((p) => p.id === id),
    [compareList]
  );

  const addToCompare = useCallback(async (product) => {
    if (!userPhone) return false;
    if (isInCompare(product.id)) return true;

    if (compareList.length >= MAX_COMPARE) {
      return { error: `حداکثر ${MAX_COMPARE} محصول می‌تونی مقایسه کنی` };
    }

    const { error } = await supabase.from('compares').insert([{
      user_phone: userPhone,
      product_id: product.id,
      product_data: product,
    }]);

    if (error) {
      console.error('خطا در افزودن به مقایسه:', error);
      return false;
    }
    setCompareList((prev) => [...prev, product]);
    return true;
  }, [userPhone, isInCompare, compareList.length]);

  const removeFromCompare = useCallback(async (id) => {
    if (!userPhone) return false;
    const { error } = await supabase
      .from('compares')
      .delete()
      .eq('user_phone', userPhone)
      .eq('product_id', id);

    if (error) {
      console.error('خطا در حذف از مقایسه:', error);
      return false;
    }
    setCompareList((prev) => prev.filter((p) => p.id !== id));
    return true;
  }, [userPhone]);

  const clearCompare = useCallback(async () => {
    if (!userPhone) return;
    const { error } = await supabase
      .from('compares')
      .delete()
      .eq('user_phone', userPhone);
    if (!error) setCompareList([]);
  }, [userPhone]);

  return {
    compareList,
    loading,
    error,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isInCompare,
    maxCompare: MAX_COMPARE,
    refetch: fetchCompare,
  };
}