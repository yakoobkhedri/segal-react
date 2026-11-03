// src/pages/Vitrin.jsx
import Banner from '../components/home/Banner';
import Category from '../components/home/Category';
import SpecialProducts from '../components/product/SpecialProducts';
import SuggestedProducts from '../components/vitrin/SuggestedProducts';
import ServicesSlider from '../components/vitrin/ServicesSlider';
import SensorProducts from '../components/vitrin/SensorProducts';
import Shoar from '../components/home/Shoar';

export default function Vitrin() {
  return (
    <main className="mt-lg-4 mt-2 position-relative">
      <Banner />
      <Category />

      <section className="mt-5 pt-1">
        <div className="container">
          <SpecialProducts />
        </div>
      </section>

      <SuggestedProducts />
      <ServicesSlider />
      <SensorProducts />

      <section className="mt-5 pt-4">
        <div className="container">
          <SpecialProducts />
        </div>
      </section>

      <Shoar />

      {/* موج */}
      <img
        alt="wave"
        src="/assets/img/footerWave.png"
        className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none"
      />
      <img
        alt="wave"
        src="/assets/img/footerBg2.png"
        className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none"
      />
    </main>
  );
}