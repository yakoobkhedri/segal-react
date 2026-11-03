// src/App.jsx
import { Routes, Route } from 'react-router-dom';

// Contextها
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { CompareProvider } from './context/CompareContext';
import { SearchProvider } from './context/SearchContext';
import { WishlistProvider } from './context/WishlistContext';
import { ToastProvider } from './context/ToastContext';   // 👈 این خط باید باشه

// کامپوننت‌ها
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/ProtectedRoute';

// صفحات
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProfileInfo from './pages/ProfileInfo';
import ProfileAddresses from './pages/ProfileAddresses';
import ProfileHistory from './pages/ProfileHistory';
import SavedProducts from './pages/SavedProducts';
import About from './pages/About';
import Contact from './pages/Contact';
import Vitrin from './pages/Vitrin';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Compare from './pages/Compare';
import MyOrders from './pages/MyOrders';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <CompareProvider>
              <SearchProvider>
                <Routes>
                  <Route element={<Layout />}>
                    {/* ✅ صفحات عمومی */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/vitrin" element={<Vitrin />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<SingleBlog />} />
                    <Route path="/login" element={<Login />} />

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
                      path="/cart"
                      element={
                        <ProtectedRoute>
                          <Cart />
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
                    <Route
                      path="/compare"
                      element={
                        <ProtectedRoute>
                          <Compare />
                        </ProtectedRoute>
                      }
                    />

                    {/* 🚫 404 */}
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </SearchProvider>
            </CompareProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}