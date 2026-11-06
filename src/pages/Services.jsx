// src/pages/Services.jsx
import ServicesSlider from '../components/vitrin/ServicesSlider';
import Shoar from '../components/home/Shoar';
import SEO from '../components/SEO';

export default function Services() {
  return (
    <>
      <SEO
        title="خدمات ما | سگال"
        description="خدمات تخصصی سگال در زمینه برق صنعتی و اتوماسیون"
      />
      <main className="mt-4 position-relative">
        <section className="container pt-5 mt-5">
          <h1 className="font-bold fs-24 mb-4 text-center">خدمات ما</h1>
          <p className="fs-14 text-gray text-center mb-5">
            آنچه برای شما انجام می‌دهیم
          </p>
        </section>
        <ServicesSlider />
        <Shoar />
        <img alt="wave" src="/assets/img/footerWave.png" className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none" />
        <img alt="wave" src="/assets/img/footerBg2.png" className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none" />
      </main>
    </>
  );
}