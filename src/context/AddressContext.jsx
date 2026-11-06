// src/context/AddressContext.jsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

const AddressContext = createContext();

export function AddressProvider({ children }) {
  const [addresses, setAddresses] = useState(() => {
    try {
      const saved = localStorage.getItem('segal-addresses');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // ذخیره در localStorage
  useEffect(() => {
    try {
      localStorage.setItem('segal-addresses', JSON.stringify(addresses));
    } catch (e) {
      console.warn('ذخیره آدرس‌ها ناموفق بود', e);
    }
  }, [addresses]);

  // افزودن آدرس
  const addAddress = useCallback((address) => {
    setAddresses((prev) => {
      const newAddress = {
        id: Date.now(),
        title: address.title || 'آدرس جدید',
        fullAddress: address.fullAddress || '',
        receiver: address.receiver || '',
        phone: address.phone || '',
        province: address.province || '',
        city: address.city || '',
        postalCode: address.postalCode || '',
        isDefault: prev.length === 0 ? true : !!address.isDefault,
      };

      // اگر آدرس جدید پیش‌فرض است، بقیه را غیرپیش‌فرض کن
      if (newAddress.isDefault) {
        return [newAddress, ...prev.map((a) => ({ ...a, isDefault: false }))];
      }
      return [...prev, newAddress];
    });
  }, []);

  // ویرایش آدرس
  const updateAddress = useCallback((id, updates) => {
    setAddresses((prev) =>
      prev.map((a) => {
        if (a.id !== id) return a;
        // اگر isDefault در updates هست و true است، بقیه را غیرپیش‌فرض کن
        if (updates.isDefault === true) {
          return { ...a, ...updates };
        }
        return { ...a, ...updates };
      }).map((a) => {
        // اگر این آدرس پیش‌فرض شد، بقیه غیرپیش‌فرض شوند
        if (updates.isDefault === true && a.id !== id) {
          return { ...a, isDefault: false };
        }
        return a;
      })
    );
  }, []);

  // حذف آدرس
  const removeAddress = useCallback((id) => {
    setAddresses((prev) => {
      const filtered = prev.filter((a) => a.id !== id);
      // اگر آدرس حذف‌شده پیش‌فرض بود و آدرس دیگری هست، اولی را پیش‌فرض کن
      if (prev.find((a) => a.id === id)?.isDefault && filtered.length > 0) {
        filtered[0] = { ...filtered[0], isDefault: true };
      }
      return filtered;
    });
  }, []);

  // تنظیم آدرس پیش‌فرض
  const setDefaultAddress = useCallback((id) => {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  }, []);

  // آدرس پیش‌فرض فعلی
  const defaultAddress = useMemo(
    () => addresses.find((a) => a.isDefault) || addresses[0] || null,
    [addresses]
  );

  const value = useMemo(
    () => ({
      addresses,
      addAddress,
      updateAddress,
      removeAddress,
      setDefaultAddress,
      defaultAddress,
      addressCount: addresses.length,
    }),
    [addresses, addAddress, updateAddress, removeAddress, setDefaultAddress, defaultAddress]
  );

  return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>;
}

export const useAddresses = () => {
  const ctx = useContext(AddressContext);
  if (!ctx) throw new Error('useAddresses باید داخل AddressProvider استفاده شود');
  return ctx;
};