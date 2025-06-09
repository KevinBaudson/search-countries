import { Swiper} from "swiper/react";


import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar, Autoplay } from "swiper/modules";

export default function Slide({ children }) {
  return (
    <>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        centeredSlides={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        loop={true}
      >
        {children}
      </Swiper>
    </>
  );
}
