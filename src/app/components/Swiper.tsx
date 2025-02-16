"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
import Image from "next/image";

const SwiperComponent: React.FC = () => {
  const data = [
    {
      title: "Анализ текущего состояния карьеры",
      desc: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
      img: "/Exclude.png",
    },
    {
      title: "Сопроводительные письма и резюме ",
      desc: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
      img: "/Exclude-1.png",
    },
    {
      title: "Поиск работы",
      desc: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
      img: "/Exclude-2.png",
    },
    {
      title: "Тренинг по презентации личного бренда",
      desc: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
      img: "/Exclude-3.png",
    },
    {
      title: "Подготовка к собеседованию",
      desc: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
      img: "/Exclude-4.png",
    },
    {
      title: "Подготовка к собеседованию",
      desc: "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
      img: "/logo.png",
    },
  ];

  return (
    <div className="h-[260px] flex">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className="relative cursor-pointer h-[360px] w-full mt-3 ml-[20px] p-10 "
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {data.map(
          (
            slide: { title: string; desc: string; img: string },
            index: number
          ) => (
            <div style={{ padding: 5 }} key={index}>
              <SwiperSlide>
                <div className="flex mt-8 flex-col justify-between  p-4 h-[260px] bg-[#F0F0F0]">
                  <Image src={slide.img} className="w-[80px] h-[80] " alt="" />
                  <h2 className="text-2xl text-[#151515] ">{slide.title}</h2>
                </div>
              </SwiperSlide>
            </div>
          )
        )}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
