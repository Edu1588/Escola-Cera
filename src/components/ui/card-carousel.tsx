"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

interface CarouselProps {
  images: { src: string; alt: string; title?: string; subtitle?: string; description?: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 2500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative mx-auto flex w-full flex-col p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={40}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination ? { clickable: true } : false}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex aspect-[3/4] w-full flex-col overflow-hidden rounded-[2rem] bg-paper shadow-md transition-all hover:shadow-xl relative group">
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-24 text-white">
                        <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                          {img.subtitle}
                        </span>
                        <h3 className="font-display text-2xl font-semibold mb-2">{img.title}</h3>
                        <p className="text-sm font-medium text-white/90">{img.description}</p>
                      </div>
                      <img
                        src={img.src}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        alt={img.alt}
                        loading="lazy"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
