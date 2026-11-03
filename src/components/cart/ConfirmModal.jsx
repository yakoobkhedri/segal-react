// src/components/cart/ConfirmModal.jsx
export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onCancel}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 9998,
          backdropFilter: 'blur(3px)',
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          width: '90%',
          maxWidth: 400,
        }}
      >
        <div className="bg-white rounded-21 shadow10 p-4">
          {/* آیکون هشدار */}
          <div className="d-flex justify-content-center mb-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: 60, height: 60, backgroundColor: '#fee2e2' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                  fill="#ef4444"
                />
              </svg>
            </div>
          </div>

          {/* عنوان */}
          <h3 className="font-bold fs-18 text-center mb-2">{title || 'مطمئنی؟'}</h3>

          {/* پیام */}
          <p className="fs-14 text-gray text-center mb-4">{message}</p>

          {/* دکمه‌ها */}
          <div className="d-flex gap-3">
            <button
              onClick={onCancel}
              className="flex-grow-1 border rounded-14 py-3 fs-14 fw-bold bg-white"
            >
              انصراف
            </button>
            <button
              onClick={onConfirm}
              className="flex-grow-1 border-0 rounded-14 py-3 fs-14 fw-bold bg-danger text-white"
            >
              بله، حذف کن
            </button>
          </div>
        </div>
      </div>
    </>
  );
}