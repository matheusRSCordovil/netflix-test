import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "./CarouselStyles.scss";
import useAlert from "../../Hooks/AlertHook";
import { useEffect, useState } from "react";
import { API } from "../../services";
import { useHandleDetail } from "../../utils/HandleDetail";

interface CarouselProps {
  slideTitle: string;
  url: string;
  isTv: boolean;
}

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

const Carousel: React.FC<CarouselProps> = ({ slideTitle, url, isTv }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [slides, setSlides] = useState<any[]>([]);
  const { setAlert } = useAlert();
  const handleDetail = useHandleDetail();

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await API.get(url);
        setSlides(response.data.results);
      } catch (error) {
        console.error("Error fetching slides:", error);
        setAlert("Failed to fetch slides", "error");
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="row-container">
      <>
        <h1 className="h1-title">{slideTitle}</h1>
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
          {slides &&
            slides.map((slideContent, index) => (
              <SwiperSlide
                className="bg-cover"
                style={{ backgroundSize: "cover" }}
                key={slideContent.id}
                virtualIndex={index}
                onClick={() => handleDetail(slideContent, isTv)}
              >
                <>
                  <img
                    loading="lazy"
                    className="tile__img"
                    src={
                      slideContent.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${slideContent.backdrop_path}`
                        : "https://i.ytimg.com/vi/Mwf--eGs05U/maxresdefault.jpg"
                    }
                  />
                </>
                <div className="pt-2">
                  <h1 className="text-midia-name">
                    {slideContent.title ?? slideContent.original_name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </>
    </div>
  );
};

export default Carousel;
