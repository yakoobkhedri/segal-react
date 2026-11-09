export default function About() {
  return (
    <section className="mt-245" id="about">
      <div className="container">
        <div className="bg-white shadow2 rounded-30 position-relative px-lg-5 px-4">
          <img alt="shape" src="/assets/img/aboutShape.png" className="img-fluid z-0 position-absolute end-0 top-0" />

          <div className="row align-items-center">
            <div className="col-lg-5">
              <div>
                <div className="bg-gray rounded-30 rotate-6 -top-77 position-relative me-lg-4">
                  <div className="bg-second2 rounded-30 p-4 shadow3 -rotate-6">
                    <img alt="about" src="/assets/img/about.png" className="img-fluid rounded-27 w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="me-lg-4">
                <div className="d-flex align-items-center gap-3 mt-4">
                  <img alt="icon" src="/assets/img/solar_info-square-bold-duotone2.png" className="img-fluid" />
                  <div>
                    <p className="d-flex align-items-center gap-1 mb-0 fs-22">
                      <span className="font-bold">درباره</span>
                      <span className="fw-300">سگال نیرو</span>
                    </p>
                    <p className="mb-0 text-gray">در مورد ما بیشتر بدانید</p>
                  </div>
                </div>
                <p className="fw-300 mt-5 lh-lg text-secondary aboutDescription">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}