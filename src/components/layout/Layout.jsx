import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ErrorBoundary from '../ErrorBoundary';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}