import React from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCube,
} from "swiper/modules";
import ghandiQuotes from "../Assests/bookthought.jpg";
import Quotes2 from "../Assests/bookthought3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-cube";

export default function ImageSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          src={ghandiQuotes}
          style={{ display: "block", margin: "0 auto" }}
          className="h-80 w:cal(w-full - 4)"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={Quotes2}
          style={{ display: "block", margin: "0 auto" }}
          className="h-80"
        />
      </SwiperSlide>
    </Swiper>
  );
}
