import { useEffect, useState, useRef } from "react";
import NewsItem from "./NewsItem";
import "swiper/css";
import "./NewsList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowPrev from "../../assets/arrow_left.svg";
import ArrowNext from "../../assets/arrow_right.svg";

export default function NewsList({ news }) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isMobile === null) {
    return null; // или return <Loading /> — если хотите показать прелоадер
  }

  if (isMobile) {
    return (
      <>
        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={16}
          slidesPerView={1}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <NewsItem news={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation">
          <button className="swiper-button-prev-custom">
            <img src={ArrowPrev} alt="Назад" />
          </button>
          <button className="swiper-button-next-custom">
            <img src={ArrowNext} alt="Вперёд" />
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </div>
  );
}
