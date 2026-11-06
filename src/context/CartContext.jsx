// src/context/CartContext.jsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'segal-cart';

// ✅ اعتبارسنجی و نرمال‌سازی quantity
const normalizeQuantity = (qty) => {
  const n = Math.floor(Number(qty));
  if (!Number.isFinite(n) || n < 1) return 1;
  return n;
};

// ✅ نرمال‌سازی آیتم‌های سبد از localStorage
const normalizeCart = (rawCart) => {
  if (!Array.isArray(rawCart)) return [];
  return rawCart
    .filter((item) => item && item.id != null)
    .map((item) => ({
      ...item,
      quantity: normalizeQuantity(item.quantity),
      price: Number(item.price) || 0,
    }));
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? normalizeCart(JSON.parse(saved)) : [];
    } catch {
      return [];
    }
  });

  // ✅ ذخیره در localStorage با try/catch
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('ذخیره سبد خرید ناموفق بود', e);
    }
  }, [cart]);

  // ✅ همگام‌سازی بین تب‌ها با storage event
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key !== STORAGE_KEY) return;
      try {
        const newCart = e.newValue ? JSON.parse(e.newValue) : [];
        setCart(normalizeCart(newCart));
      } catch {
        // نادیده بگیر
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // ✅ افزودن محصول (با اعتبارسنجی)
  // در CartContext، addToCart را این‌طور کنید:
  const addToCart = useCallback((product) => {
    if (!product || product.id == null) return;
    const addQty = normalizeQuantity(product.quantity) || 1;

    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: normalizeQuantity(item.quantity) + addQty }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          quantity: addQty,
          price: Number(product.price) || 0,
        },
      ];
    });
  }, []);

  // ✅ حذف محصول
  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // ✅ تغییر تعداد (با اعتبارسنجی کامل)
  const updateQuantity = useCallback((id, quantity) => {
    const q = Math.floor(Number(quantity));

    // اگر نامعتبر یا صفر بود → حذف
    if (!Number.isFinite(q) || q <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id));
      return;
    }

    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: q } : item))
    );
  }, []);

  // ✅ خالی کردن سبد
  const clearCart = useCallback(() => setCart([]), []);

  // ✅ محاسبه totalItems با useMemo
  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + normalizeQuantity(item.quantity), 0),
    [cart]
  );

  // ✅ محاسبه totalPrice با useMemo
  const totalPrice = useMemo(
    () =>
      cart.reduce(
        (sum, item) =>
          sum + (Number(item.price) || 0) * normalizeQuantity(item.quantity),
        0
      ),
    [cart]
  );

  // ✅ پایدار کردن value
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      itemCount: cart.length, // تعداد ردیف‌ها (نه تعداد کل)
    }),
    [cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart باید داخل CartProvider استفاده شود');
  }
  return context;
};