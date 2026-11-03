// src/pages/Profile.jsx
import ProfileSidebar from '../components/profile/ProfileSidebar';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileRecentOrders from '../components/profile/ProfileRecentOrders';
import ProfileUserInfo from '../components/profile/ProfileUserInfo';
import ProfileCartPreview from '../components/profile/ProfileCartPreview';

export default function Profile() {

  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <ProfileSidebar />
            <div className="flex-grow-1">
              <ProfileStats
                data={[
                  { id: 1, value: '۱۲۳', label: 'سفارش تکمیل شده', icon: 'done', active: true, href: '/orders' },
                  { id: 2, value: '۹', label: 'سفارش در حال پردازش', icon: 'processing', href: '/orders' },
                  { id: 3, value: '۲', label: 'تخفیف ویژه محصولات', icon: 'discount', href: '/products' },
                ]}
              />
              <ProfileRecentOrders />
              <ProfileUserInfo />
              <ProfileCartPreview />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}