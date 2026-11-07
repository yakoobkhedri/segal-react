// src/App.jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Contextها
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { CompareProvider } from './context/CompareContext';
import { SearchProvider } from './context/SearchContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';
import { OrderProvider } from './context/OrderContext';
import { AddressProvider } from './context/AddressContext';

// کامپوننت‌ها (همیشه لود می‌شن)
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// صفحات (Lazy - فقط وقتی لازم شد لود می‌شن)
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const ProfileInfo = lazy(() => import('./pages/ProfileInfo'));
const ProfileAddresses = lazy(() => import('./pages/ProfileAddresses'));
const ProfileHistory = lazy(() => import('./pages/ProfileHistory'));
const SavedProducts = lazy(() => import('./pages/SavedProducts'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Vitrin = lazy(() => import('./pages/Vitrin'));
const Blog = lazy(() => import('./pages/Blog'));
const SingleBlog = lazy(() => import('./pages/SingleBlog'));
const Compare = lazy(() => import('./pages/Compare'));
const MyOrders = lazy(() => import('./pages/MyOrders'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Services = lazy(() => import('./pages/Services'));

// کامپوننت Loading
function LoadingFallback() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '60vh' }}
    >
      <div className="text-center">
        <div
          className="spinner-border text-main"
          role="status"
          style={{ width: 50, height: 50 }}
        ></div>
        <p className="mt-3 text-gray fs-14">در حال بارگذاری...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <OrderProvider>
          <AddressProvider>
            <CartProvider>
              <WishlistProvider>
                <CompareProvider>
                  <SearchProvider>
                    <Suspense fallback={<LoadingFallback />}>
                      <Routes>
                        {/* ✅ مسیرهای بدون Layout (بدون Header و Footer) */}
                        <Route path="/login" element={<Login />} />
                        
                        <Route element={<Layout />}>
                          {/* ✅ صفحات عمومی */}
                          <Route path="/" element={<Home />} />
                          <Route path="/products" element={<Products />} />
                          <Route path="/product/:id" element={<SingleProduct />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/faq" element={<FAQ />} />
                          <Route path="/vitrin" element={<Vitrin />} />
                          <Route path="/services" element={<Services />} />
                          <Route path="/blog" element={<Blog />} />
                          <Route path="/blog/:id" element={<SingleBlog />} />
                          <Route path="/cart" element={<Cart />} />
                          <Route path="/compare" element={<Compare />} />

                          {/* 🔒 صفحات محافظت‌شده */}
                          <Route
                            path="/profile"
                            element={
                              <ProtectedRoute>
                                <Profile />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/profile/info"
                            element={
                              <ProtectedRoute>
                                <ProfileInfo />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/profile/addresses"
                            element={
                              <ProtectedRoute>
                                <ProfileAddresses />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/profile/history"
                            element={
                              <ProtectedRoute>
                                <ProfileHistory />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/profile/saved"
                            element={
                              <ProtectedRoute>
                                <SavedProducts />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/orders"
                            element={
                              <ProtectedRoute>
                                <MyOrders />
                              </ProtectedRoute>
                            }
                          />
                          <Route
                            path="/checkout"
                            element={
                              <ProtectedRoute>
                                <Checkout />
                              </ProtectedRoute>
                            }
                          />
                          {/* 🚫 404 */}
                          <Route path="*" element={<NotFound />} />
                        </Route>
                      </Routes>
                    </Suspense>
                  </SearchProvider>
                </CompareProvider>
              </WishlistProvider>
            </CartProvider>
          </AddressProvider>
        </OrderProvider>
      </AuthProvider>
    </ToastProvider>
  );
}