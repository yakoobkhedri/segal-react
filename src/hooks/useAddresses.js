// src/hooks/useAddresses.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

function normalizeAddress(a) {
  return {
    id: a.id,
    userPhone: a.user_phone,
    title: a.title,
    fullAddress: a.full_address,
    receiver: a.receiver,
    phone: a.phone,
    province: a.province,
    city: a.city,
    postalCode: a.postal_code,
    isDefault: a.is_default,
  };
}

function denormalizeAddress(a, userPhone) {
  return {
    user_phone: userPhone,
    title: a.title,
    full_address: a.fullAddress,
    receiver: a.receiver,
    phone: a.phone,
    province: a.province,
    city: a.city,
    postal_code: a.postalCode,
    is_default: a.isDefault || false,
  };
}

export function useAddresses(userPhone) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAddresses = useCallback(async () => {
    if (!userPhone) {
      setAddresses([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const { data, error } = await supabase
      .from('addresses')
      .select('*')
      .eq('user_phone', userPhone)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('خطا در دریافت آدرس‌ها:', error);
      setError(error.message);
    } else {
      setAddresses((data || []).map(normalizeAddress));
    }
    setLoading(false);
  }, [userPhone]);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  const addAddress = useCallback(async (address) => {
    if (!userPhone) return null;

    // اگر آدرس پیش‌فرض است، بقیه را غیرپیش‌فرض کن
    if (address.isDefault) {
      await supabase
        .from('addresses')
        .update({ is_default: false })
        .eq('user_phone', userPhone);
    }

    const { data, error } = await supabase
      .from('addresses')
      .insert([denormalizeAddress(address, userPhone)])
      .select()
      .single();

    if (error) {
      console.error('خطا در افزودن آدرس:', error);
      return null;
    }
    const normalized = normalizeAddress(data);
    setAddresses((prev) => [normalized, ...prev]);
    return normalized;
  }, [userPhone]);

  const updateAddress = useCallback(async (id, updates) => {
    if (updates.isDefault) {
      await supabase
        .from('addresses')
        .update({ is_default: false })
        .eq('user_phone', userPhone);
    }

    const { error } = await supabase
      .from('addresses')
      .update({
        title: updates.title,
        full_address: updates.fullAddress,
        receiver: updates.receiver,
        phone: updates.phone,
        province: updates.province,
        city: updates.city,
        postal_code: updates.postalCode,
        is_default: updates.isDefault,
      })
      .eq('id', id);

    if (error) {
      console.error('خطا در ویرایش آدرس:', error);
      return false;
    }
    setAddresses((prev) =>
      prev.map((a) => (a.id === id ? { ...a, ...updates } : a))
    );
    return true;
  }, [userPhone]);

  const removeAddress = useCallback(async (id) => {
    const { error } = await supabase.from('addresses').delete().eq('id', id);
    if (error) return false;
    setAddresses((prev) => prev.filter((a) => a.id !== id));
    return true;
  }, []);

  const setDefaultAddress = useCallback(async (id) => {
    await supabase
      .from('addresses')
      .update({ is_default: false })
      .eq('user_phone', userPhone);
    await supabase
      .from('addresses')
      .update({ is_default: true })
      .eq('id', id);
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  }, [userPhone]);

  const defaultAddress = addresses.find((a) => a.isDefault) || addresses[0] || null;

  return {
    addresses,
    loading,
    error,
    addAddress,
    updateAddress,
    removeAddress,
    setDefaultAddress,
    defaultAddress,
    addressCount: addresses.length,
  };
}