// src/components/ErrorBoundary.jsx
import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('❌ خطای غیرمنتظره:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', padding: 20 }}
        >
          <div
            className="bg-white rounded-21 shadow10 p-5 text-center"
            style={{ maxWidth: 500, width: '100%' }}
          >
            {/* آیکون */}
            <div className="d-flex justify-content-center mb-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 80, height: 80, backgroundColor: '#fee2e2' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
                    fill="#ef4444"
                  />
                </svg>
              </div>
            </div>

            {/* پیام */}
            <h2 className="font-bold fs-20 mb-2 text-dark">
              خطایی رخ داد!
            </h2>
            <p className="fs-14 text-gray mb-4">
              متأسفانه در نمایش این بخش مشکلی پیش آمد. لطفاً دوباره تلاش کنید.
            </p>

            {/* جزئیات خطا (فقط در development) */}
            {import.meta.env.DEV && this.state.error && (
              <div
                className="bg-gray2 rounded-14 p-3 mb-4 text-start"
                style={{ maxHeight: 150, overflowY: 'auto' }}
              >
                <p className="fs-12 text-danger mb-0" dir="ltr">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* دکمه‌ها */}
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button
                onClick={this.handleReload}
                className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 border-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17.65 6.35C16.2 4.9 14.21 4 12 4C7.58 4 4.01 7.58 4.01 12C4.01 16.42 7.58 20 12 20C15.73 20 18.84 17.45 19.73 14H17.65C16.83 16.33 14.61 18 12 18C8.69 18 6 15.31 6 12C6 8.69 8.69 6 12 6C13.66 6 15.14 6.69 16.22 7.78L13 11H20V4L17.65 6.35Z"
                    fill="white"
                  />
                </svg>
                <span className="fw-bold text-white">تلاش مجدد</span>
              </button>

              <button
                onClick={this.handleReset}
                className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-white border py-3 px-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 20V14H6V20H3V12H1L12 3L23 12H21V20H18V14H14V20H10Z"
                    fill="#27817A"
                  />
                </svg>
                <span className="fw-bold text-dark">بازگشت به خانه</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}