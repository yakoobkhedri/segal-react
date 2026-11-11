// src/hooks/useWishlist.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useWishlist(userPhone) {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWishlist = useCallback(async () => {
    if (!userPhone) {
      setWishlist([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('wishlists')
      .select('*')
      .eq('user_phone', userPhone)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('خطا در دریافت علاقه‌مندی‌ها:', error);
      setError(error.message);
    } else {
      const items = (data || []).map((row) => ({
        ...row.product_data,
        id: row.product_id,
      }));
      setWishlist(items);
    }
    setLoading(false);
  }, [userPhone]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const isInWishlist = useCallback(
    (id) => wishlist.some((p) => p.id === id),
    [wishlist]
  );

  const addToWishlist = useCallback(async (product) => {
    if (!userPhone) return false;
    if (isInWishlist(product.id)) return true;

    const { error } = await supabase.from('wishlists').insert([{
      user_phone: userPhone,
      product_id: product.id,
      product_data: product,
    }]);

    if (error) {
      console.error('خطا در افزودن به علاقه‌مندی:', error);
      return false;
    }
    setWishlist((prev) => [product, ...prev]);
    return true;
  }, [userPhone, isInWishlist]);

  const removeFromWishlist = useCallback(async (id) => {
    if (!userPhone) return false;
    const { error } = await supabase
      .from('wishlists')
      .delete()
      .eq('user_phone', userPhone)
      .eq('product_id', id);

    if (error) {
      console.error('خطا در حذف از علاقه‌مندی:', error);
      return false;
    }
    setWishlist((prev) => prev.filter((p) => p.id !== id));
    return true;
  }, [userPhone]);

  const toggleWishlist = useCallback(async (product) => {
    if (isInWishlist(product.id)) {
      await removeFromWishlist(product.id);
      return false;
    } else {
      await addToWishlist(product);
      return true;
    }
  }, [isInWishlist, addToWishlist, removeFromWishlist]);

  const clearWishlist = useCallback(async () => {
    if (!userPhone) return;
    const { error } = await supabase
      .from('wishlists')
      .delete()
      .eq('user_phone', userPhone);
    if (!error) setWishlist([]);
  }, [userPhone]);

  return {
    wishlist,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
    isInWishlist,
    wishlistCount: wishlist.length,
    refetch: fetchWishlist,
  };
}