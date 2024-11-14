import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./CarouselStyles.scss";
// import useAlert from "../../Hooks/AlertHook";
// import { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
}

const slides = Array.from({ length: 20 }).map(
  (_el, index) => `Slide ${index + 1}`
);

// useEffect(() => {
//   const fetchSlides = async () => {
//     const fetchedSlides = await new Promise<string[]>((resolve) =>
//       setTimeout(() => resolve(Array.from({ length: 20 }).map((_el, index) => `Slide ${index + 1}`)), 1000)
//     );
//     setSlides(fetchedSlides);
//   };

//   fetchSlides();
// }, []);

const customSettings = {
  breakpoints: {
    1800: { slidesPerView: 6.1, slidesPerGroup: 5 },
    1690: { slidesPerView: 5.5, slidesPerGroup: 5 },
    1536: { slidesPerView: 5, slidesPerGroup: 5 },
    1280: { slidesPerView: 4.3, slidesPerGroup: 4 },
    980: { slidesPerView: 3.3, slidesPerGroup: 3 },
    720: { slidesPerView: 2.7, slidesPerGroup: 3 },
    625: { slidesPerView: 1.8, slidesPerGroup: 2 },
    580: { slidesPerView: 1.4, slidesPerGroup: 2 },
    530: { slidesPerView: 1.1, slidesPerGroup: 2 },
    490: { slidesPerView: 1, slidesPerGroup: 2 },
    350: { slidesPerView: 1.1, slidesPerGroup: 2 },
    320: { slidesPerView: 1, slidesPerGroup: 1 },
    0: { slidesPerView: 2, slidesPerGroup: 2 },
  },
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  // const { setAlert } = useAlert();

  return (
    <div className="row-container">
      <>
        <h1 className="h1-title">Terror</h1>
        <Swiper
          {...customSettings}
          modules={[Navigation, Pagination]}
          spaceBetween={8}
          slidesPerView={6.1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="SwiperStyle"
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide
              className="bg-cover"
              style={{ backgroundSize: "cover" }}
              key={slideContent}
              virtualIndex={index}
              onClick={() => (window.location.href = "/detail")}
            >
              <>
                <img
                  loading="lazy"
                  className="tile__img"
                  src="https://i.ytimg.com/vi/Mwf--eGs05U/maxresdefault.jpg"
                />
              </>
              <div className="pt-2">
                <h1 className="text-midia-name">Top Gear</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
