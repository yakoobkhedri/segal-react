// src/context/CartContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // بازیابی سبد از localStorage
    try {
      const saved = localStorage.getItem('segal-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // ذخیره در localStorage هر بار که تغییر کرد
  useEffect(() => {
    localStorage.setItem('segal-cart', JSON.stringify(cart));
  }, [cart]);

  // افزودن محصول
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // حذف محصول
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // تغییر تعداد
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // خالی کردن سبد
  const clearCart = () => setCart([]);

  // تعداد کل آیتم‌ها
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // قیمت کل
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart باید داخل CartProvider استفاده شود');
  }
  return context;
};