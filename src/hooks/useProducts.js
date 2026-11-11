// src/hooks/useProducts.js
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (!isMounted) return;

      if (error) {
        console.error('خطا در دریافت محصولات:', error);
        setError(error.message);
      } else {
        // تبدیل snake_case به camelCase
        const normalized = (data || []).map((p) => ({
          id: p.id,
          title: p.title,
          price: p.price,
          oldPrice: p.old_price,
          image: p.image,
          category: p.category,
          subCategory: p.sub_category,
          brand: p.brand,
          rating: p.rating,
          stock: p.stock,
          discount: p.discount,
          shortDesc: p.short_desc,
          color: p.color,
          power: p.power,
          voltage: p.voltage,
          current: p.current,
          warranty: p.warranty,
          brightness: p.brightness,
        }));
        setProducts(normalized);
      }
      setLoading(false);
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
}