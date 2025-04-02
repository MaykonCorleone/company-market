'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const portfolioItems = [
  { id: 1, src: '/images/portfolio/flex1.png', alt: 'Flex Food 1' },
  { id: 2, src: '/images/portfolio/flex2.png', alt: 'Flex Food 2' },
  { id: 3, src: '/images/portfolio/flex3.png', alt: 'Flex Food 3' },
  { id: 4, src: '/images/portfolio/flex4.png', alt: 'Flex Food 4' },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = portfolioItems.length;
  const trackWidth = 300;
  const thumbWidth = 80;
  const normalizedIndex = activeIndex % totalSlides;

  return (
    <section id="portfolio" className="bg-white py-24 overflow-x-visible w-full">
      {/* Cabeçalho */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12 flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="h-1 w-10 bg-[#C8102E] mb-2" />
            <h2 className="text-3xl font-bold">PORTFÓLIO</h2>
            <p className="text-[#C8102E] mt-2">Lorem ipsum dolor sit amet.</p>
          </div>

          <a
            href="https://github.com/MaykonCorleone"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C8102E] text-white px-4 py-2 rounded hover:bg-black flex items-center gap-2 transition"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        </div>
      </div>

      {/* Carrossel responsivo com 3 inteiros + metades visíveis sempre */}
      <div className="w-screen overflow-x-visible px-0 select-none">
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          spaceBetween={24}
          grabCursor={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slideToClickedSlide={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {[...portfolioItems.slice(-1), ...portfolioItems, ...portfolioItems.slice(0, 1)].map((item, index) => (
            <SwiperSlide
              key={`${item.id}-${index}`}
              className="!w-[80vw] sm:!w-[40vw] md:!w-[30vw] lg:!w-[25vw] xl:!w-[22vw] 2xl:!w-[20vw]"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded shadow-md group transition-transform duration-300 bg-white ${
                  index - 1 === activeIndex ? 'scale-105' : 'scale-100'
                } pointer-events-none`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Barra de rolagem pequena e centralizada */}
      <div className="relative mt-6 w-full flex justify-center">
        <div className="relative w-[300px] h-[14px]">
          {/* Linha preta mais grossa */}
          <div className="absolute top-1/2 left-0 w-full h-[8px] bg-black -translate-y-1/2 rounded" />
          {/* Thumb vermelha */}
          <div
            className="absolute top-1/2 h-[12px] w-[80px] bg-[#C8102E] transition-all duration-500 -translate-y-1/2 rounded"
            style={{
              left: `${Math.min(normalizedIndex, totalSlides - 1) * ((trackWidth - thumbWidth) / (totalSlides - 1))}px`
            }}
          />
        </div>
      </div>
    </section>
  );
}
