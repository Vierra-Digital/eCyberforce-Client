"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import styles from "./css/Hero.module.css";

import {motion} from "framer-motion"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useSwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core'
import {Review, Review2, Review3, Review4} from "./_components/Review";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600"],
});
const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
});


function Hero() {
  const swiperSlide = useSwiperSlide();
  const [activeIndex, setActiveIndex] = useState(0)
  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveIndex(swiper.realIndex); 
    console.log('slide change to', swiper.realIndex);
  };
  const totalSlides = 4;
  const calculateIsTwoAfterActive = (slideIndex: number) => {
    // Adjust for looping
    let expectedIndex = (activeIndex + 2) % totalSlides;
    return slideIndex === expectedIndex;
  };
  
  return (
    <div className={styles.Container}>
      <div className="2sm:pt-60 pt-32 mb-4">
        <div className="flex items-center justify-center">
          <div className="hidden 2sm:flex absolute left-[12%]">
            <Image src="/zigzag.svg" alt="zigzag" width={38} height={24} />
          </div>
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <h1
              className={`text-[24px] 2sm:text-[48px] leading-[30px] 2sm:leading-[60px] text-center w-[250px] xs:w-[358px] h-[90px] 2sm:w-[966px] 2sm:h-[120px] ${sora.className}`}
            >
              Experience Our{" "}
              <span className={styles.headerGradient}>
                Cybersecurity Management
              </span>{" "}
              Using Big Data
            </h1>
            <p className="2sm:w-[556px] xs:w-[364px] w-[250px] h-[36px] 2sm:h-[40px] text-[12px] xs:text-[16px] text-center leading-[20px]">
              Helping you manage your on-line Network, Services and
              Cybersecurity using Big Data
            </p>
          </div>
        </div>
      </div>
      <div
        className=" flex flex-col items-center justify-center mb-20"
        style={{
          backgroundImage: "url(/world.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center">
          <div className="block 2sm:flex w-[214px] 2sm:w-[438px] h-[164px] 2sm:h-[93px] gap-[10px] ml-0 xl:ml-[270px]">
            <div className="mb-[10px] 2sm:mb-0">
              <button
                className={`w-[214px] h-[61px] p-[10px]  rounded-[4px] text-black bg-white font-bold ${sora.className}`}
              >
                See Our Products
              </button>
            </div>
            <div>
              <button className={styles.button}>Download Now</button>
            </div>
          </div>
          <div className="hidden xl:flex w-[250px] justify-end items-end">
            <Image src="/arrow.svg" alt="arrow" width={81} height={100} />
          </div>
        </div>

        <motion.div 
        className={styles.reviewContainer}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          duration: 2,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        >
          <Swiper
            className={styles.review}
            slidesPerView={3}
            spaceBetween={50}
            direction={"vertical"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <Review  isActive = {activeIndex === 0} isTwoAfterActive={calculateIsTwoAfterActive(0)} />
            </SwiperSlide>
            <SwiperSlide>
              <Review2  isActive = {activeIndex === 1} isTwoAfterActive={calculateIsTwoAfterActive(1)} />
            </SwiperSlide>
            <SwiperSlide>
              <Review3  isActive = {activeIndex === 2} isTwoAfterActive={calculateIsTwoAfterActive(2)} />
            </SwiperSlide>
            <SwiperSlide>
              <Review4 isActive = {activeIndex === 3} isTwoAfterActive={calculateIsTwoAfterActive(3)} />
            </SwiperSlide>
          </Swiper>
        </motion.div>

      </div>
      
      <div className="flex w-full animate-scroll">
        <div
          className="text-[#C9C2FF] flex  gap-16 will-change-transform"
        >
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Deep Learning Forecast Deep Learning
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Diagnosis Data Center/Cloud Monitoring Services
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Wireless/Internet Access
          </h2>
        </div>
        <div
          className="text-[#C9C2FF] flex  gap-16 will-change-transform"
        >
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Deep Learning Forecast Deep Learning
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Diagnosis Data Center/Cloud Monitoring Services
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Wireless/Internet Access
          </h2>
        </div>
        <div
          className="text-[#C9C2FF] flex  gap-16 will-change-transform"
        >
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Deep Learning Forecast Deep Learning
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Diagnosis Data Center/Cloud Monitoring Services
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Wireless/Internet Access
          </h2>
        </div>
        <div
          className="text-[#C9C2FF] flex  gap-16 will-change-transform"
        >
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Deep Learning Forecast Deep Learning
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Diagnosis Data Center/Cloud Monitoring Services
          </h2>
          <h2
            className={`text-[24px] font-medium ${sora.className} text-nowrap`}
          >
            Wireless/Internet Access
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;