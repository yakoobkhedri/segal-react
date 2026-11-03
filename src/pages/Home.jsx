// src/pages/Home.jsx
import Banner from '../components/home/Banner';
import Category from '../components/home/Category';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Customer from '../components/home/Customer';
import Shoar from '../components/home/Shoar';
import ContactIcons from '../components/home/ContactIcons';
import WaveFooter from '../components/home/WaveFooter';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="سگال | صفحه اصلی"
        description="فروشگاه تخصصی تجهیزات برق صنعتی و اتوماسیون"
      />
      <main className="mt-lg-4 mt-2 position-relative">
        <Banner />
        <Category />
        <Services />
        <About />
        <Contact />
        <Customer />
        <Shoar />
        <ContactIcons />
        <WaveFooter />
      </main>
    </>
  );
}