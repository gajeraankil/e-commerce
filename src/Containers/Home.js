import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Products } from "../ProductsApi";

const Home = () => {
  return (
    <>
      <section className="categories bg-white">
        <div className="container">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 8,
              },
              1400: {
                slidesPerView: 9,
              },
            }}
          >
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/f15c02bfeb02d15d.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Top Offers</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/29327f40e9c4d26b.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Grocery</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/22fddf3c7da4c4f4.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Mobiles</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/c12afc017e6f24cb.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Fashion</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/69c6589653afdb9a.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Electronics</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/ab7e2b022a4587dd.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Home</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/0ff199d1bd27eb98.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Appliances</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/71050627a56b4693.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Travel</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card align-items-center border-0">
                <div className="card-img">
                  <img
                    src="images/dff3f7adcf3a90c6.webp"
                    className="card-img-top"
                    alt="Top Offers"
                  />
                </div>
                <p className="m-0 fw-bold">Beauty, Toys & More</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide />
          <SwiperSlide />
          <SwiperSlide />
          <SwiperSlide />
        </Swiper>
      </section>
      <section className="products py-20">
        <div className="container">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center bg-white py-3">
              <h2 className="fw-bold m-0">Deals of the Day</h2>
              <NavLink to="/" className="btn fw-bold shadow-none border-0">
                View All
              </NavLink>
            </div>
            <div className="card-body py-5">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                  1400: {
                    slidesPerView: 6,
                  },
                }}
                loop={true}
                navigation={true}
                modules={[Navigation]}
              >
                {Products.map((p) => {
                  return (
                    <SwiperSlide key={p.id}>
                      <NavLink
                        className="card border-0 text-decoration-none"
                        to="/"
                      >
                        <div className="product-img text-center">
                          <img src={p.img} className="mh-100" alt={p.title} />
                        </div>
                        <div className="card-body text-center">
                          <h5 className="card-title fw-bold">{p.title}</h5>
                          <p className="card-text discount mb-2">
                            {p.discount}
                          </p>
                          <p className="card-text tag">{p.tag}</p>
                        </div>
                      </NavLink>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                src="images/2f30db9425df5cec.webp"
                alt="banner-1"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4">
              <img
                src="images/084789479074d2b2.webp"
                alt="banner-2"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-4">
              <img
                src="images/1ce0c4c1fb501b45.webp"
                alt="banner-3"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="ad py-20">
        <div className="ad-img"></div>
      </section>
    </>
  );
};

export default Home;
