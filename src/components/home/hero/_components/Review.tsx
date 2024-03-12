import React from 'react'
import { Plus_Jakarta_Sans, Sora } from 'next/font/google'
import Image from 'next/image'
import { SwiperOptions } from 'swiper/types';
import { SwiperSlideProps } from 'swiper/react';

const sora = Sora({
    subsets: ["latin"],
    weight: ["600"]
})

const plus = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["700"]
})

interface SlideData {
    isActive: boolean;
    isVisible: boolean;
    isPrev: boolean;
    isNext: boolean;
  }
  
  type SwiperProps = {
    isActive: boolean;
    isTwoAfterActive: boolean
  }

export function Review({ isActive, isTwoAfterActive} : SwiperProps) {
  return (
    <div className={`2sm:flex block lg:gap-[9px] gap-[9px] 2sm:gap-[6px] rounded-[6px] p-[24px] ${isTwoAfterActive ? "bg-gradient-to-b from-[#e1dff7] from-20% via-[#dad7f7] via-30% to-transparent to-90% animate-enlarge" : "bg-white"}  w-[355px] h-[330px] lg:w-[899px] 2sm:w-[750px] 2sm:h-[126px]`}>
      <div className="flex items-start gap-[6px]">
        <h1 className={`text-[32px] ${sora.className}`}>5</h1>
        <Image src="/star.svg" alt="star" width={17} height={20} />
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <h2 className={`text-[18px] font-bold ${plus.className}`}>
          I highly recommend this software
        </h2>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <p className="text-[16px] font-normal leading-[26px] w-[307px] h-[104px] lg:w-[403px] 2sm:w-[300px] 2sm:h-[78px]">
          I recently tried out MacroProbe v1.3 software with and I found it to
          be extremely efficient and accurate in detecting anomalies.
        </p>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <Image src="/profile.png" alt="profile" width={26} height={26} />
      </div>
      <div>
        <h2
          className={`text-[16px] font-bold ${plus.className} w-[97px] h-[28px]`}
        >
          Denny Jones
        </h2>
      </div>
    </div>
  )
}
export function Review2({ isActive, isTwoAfterActive} : SwiperProps) {
  return (
    <div className={`2sm:flex block lg:gap-[9px] gap-[9px] 2sm:gap-[6px] rounded-[6px] p-[24px] ${isTwoAfterActive ? "bg-gradient-to-b from-[#e1dff7] from-20% via-[#dad7f7] via-30% to-transparent to-90% animate-enlarge" : "bg-white"}  w-[355px] h-[330px] lg:w-[899px] 2sm:w-[750px] 2sm:h-[126px]`}>
      <div className="flex items-start gap-[6px]">
        <h1 className={`text-[32px] ${sora.className}`}>5</h1>
        <Image src="/star.svg" alt="star" width={17} height={20} />
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <h2 className={`text-[18px] font-bold ${plus.className}`}>
          I highly recommend this software
        </h2>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <p className="text-[16px] font-normal leading-[26px] w-[307px] h-[104px] lg:w-[403px] 2sm:w-[300px] 2sm:h-[78px]">
          I recently tried out MacroProbe v1.3 software with and I found it to
          be extremely efficient and accurate in detecting anomalies.
        </p>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <Image src="/profile.png" alt="profile" width={26} height={26} />
      </div>
      <div>
        <h2
          className={`text-[16px] font-bold ${plus.className} w-[97px] h-[28px]`}
        >
          Denny Jones
        </h2>
      </div>
    </div>
  )
}
export function Review3({ isActive, isTwoAfterActive} : SwiperProps) {
  return (
    <div className={`2sm:flex block lg:gap-[9px] gap-[9px] 2sm:gap-[6px] rounded-[6px] p-[24px] ${isTwoAfterActive ? "bg-gradient-to-b from-[#e1dff7] from-20% via-[#dad7f7] via-30% to-transparent to-90% animate-enlarge" : "bg-white"}  w-[355px] h-[330px] lg:w-[899px] 2sm:w-[750px] 2sm:h-[126px]`}>
      <div className="flex items-start gap-[6px]">
        <h1 className={`text-[32px] ${sora.className}`}>5</h1>
        <Image src="/star.svg" alt="star" width={17} height={20} />
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <h2 className={`text-[18px] font-bold ${plus.className}`}>
          I highly recommend this software
        </h2>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <p className="text-[16px] font-normal leading-[26px] w-[307px] h-[104px] lg:w-[403px] 2sm:w-[300px] 2sm:h-[78px]">
          I recently tried out MacroProbe v1.3 software with and I found it to
          be extremely efficient and accurate in detecting anomalies.
        </p>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <Image src="/profile.png" alt="profile" width={26} height={26} />
      </div>
      <div>
        <h2
          className={`text-[16px] font-bold ${plus.className} w-[97px] h-[28px]`}
        >
          Denny Jones
        </h2>
      </div>
    </div>
  )
}
export function Review4({ isActive,isTwoAfterActive} : SwiperProps) {
    
  return (
    <div className={`2sm:flex block lg:gap-[9px] gap-[9px] 2sm:gap-[6px] rounded-[6px] p-[24px] ${isTwoAfterActive ? "bg-gradient-to-b from-[#e1dff7] from-20% via-[#dad7f7] via-30% to-transparent to-90% animate-enlarge" : "bg-white"}  w-[355px] h-[330px] lg:w-[899px] 2sm:w-[750px] 2sm:h-[126px]`}>
      <div className="flex items-start gap-[6px]">
        <h1 className={`text-[32px] ${sora.className}`}>5</h1>
        <Image src="/star.svg" alt="star" width={17} height={20} />
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <h2 className={`text-[18px] font-bold ${plus.className}`}>
          I highly recommend this software
        </h2>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <p className="text-[16px] font-normal leading-[26px] w-[307px] h-[104px] lg:w-[403px] 2sm:w-[300px] 2sm:h-[78px]">
          I recently tried out MacroProbe v1.3 software with and I found it to
          be extremely efficient and accurate in detecting anomalies.
        </p>
      </div>
      <div className="mb-[9px] 2sm:mb-0">
        <Image src="/profile.png" alt="profile" width={26} height={26} />
      </div>
      <div>
        <h2
          className={`text-[16px] font-bold ${plus.className} w-[97px] h-[28px]`}
        >
          Denny Jones
        </h2>
      </div>
    </div>
  )
}
