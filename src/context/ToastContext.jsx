// src/context/ToastContext.jsx
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';

const ToastContext = createContext();

const MAX_TOASTS = 3; // حداکثر تعداد Toast همزمان

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map()); // نگهداری timerها برای cleanup

  // پاک‌سازی همه timerها هنگام unmount (رفع نشت حافظه)
  useEffect(() => {
    const timers = timersRef.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  // حذف یک Toast (با پاک کردن timer مربوطه)
  const removeToast = useCallback((id) => {
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // نمایش Toast جدید
  const showToast = useCallback((message, type = 'success', duration = 3000) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

    // سقف تعداد Toastها: قدیمی‌ترین‌ها حذف شوند
    setToasts((prev) => {
      const next = [...prev, { id, message, type }];
      if (next.length > MAX_TOASTS) {
        // timer قدیمی‌ترین‌ها را پاک کن
        const removed = next.slice(0, next.length - MAX_TOASTS);
        removed.forEach((t) => {
          const timer = timersRef.current.get(t.id);
          if (timer) {
            clearTimeout(timer);
            timersRef.current.delete(t.id);
          }
        });
        return next.slice(-MAX_TOASTS);
      }
      return next;
    });

    // تنظیم timer برای حذف خودکار
    const timer = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      timersRef.current.delete(id);
    }, duration);

    timersRef.current.set(id, timer);
  }, []);

  // پایدار کردن value برای جلوگیری از re-renderهای اضافی
  const value = useMemo(
    () => ({ showToast, removeToast }),
    [showToast, removeToast]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* کانتینر Toastها */}
      <div
        className="position-fixed z-20 d-flex flex-column gap-2"
        role="status"
        aria-live="polite"
        style={{
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          minWidth: 300,
          maxWidth: 400,
          pointerEvents: 'none', // کانتینر کلیک‌ها را نگیرد
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            onClick={() => removeToast(toast.id)}
            className={`rounded-14 shadow10 py-3 px-4 d-flex align-items-center gap-3 text-white cursor-pointer ${
              toast.type === 'success'
                ? 'bg-second2'
                : toast.type === 'error'
                ? 'bg-danger'
                : toast.type === 'warning'
                ? 'bg-warning text-dark'
                : 'bg-gradient-main'
            }`}
            style={{
              animation: 'slideDown 0.3s ease-out',
              pointerEvents: 'auto', // فقط خود Toast کلیک‌پذیر باشد
            }}
          >
            {/* آیکون */}
            {toast.type === 'success' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="white"
                />
              </svg>
            )}
            {toast.type === 'error' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="white"
                />
              </svg>
            )}
            {toast.type === 'warning' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z"
                  fill="black"
                />
              </svg>
            )}
            {toast.type === 'info' && (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                  fill="white"
                />
              </svg>
            )}

            <p className="mb-0 fs-14 fw-medium flex-grow-1">{toast.message}</p>
          </div>
        ))}
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast باید داخل ToastProvider استفاده شود');
  }
  return context;
};