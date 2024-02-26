import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import styles from "./css/Hero.module.css";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600"]
})
const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"]
})

function Hero() {
  return (
    <div className={styles.Container}>
      <div className="pt-[64px] mb-10">
        <div className="flex items-center justify-center">
          <div className="hidden 2sm:flex">
            <Image 
             src="/zigzag.svg"
             alt="zigzag"
             width={38}
             height={24}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-[24px]">
            <h1 className={`text-[24px] 2sm:text-[48px] leading-[30px] 2sm:leading-[60px] text-center w-[358px] h-[90px] 2sm:w-[966px] 2sm:h-[120px] ${sora.className}`}>Experience Our <span className={styles.headerGradient}>Cybersecurity Management</span> Using Big Data</h1>
            <p className="2sm:w-[556px] w-[364px] h-[36px] 2sm:h-[40px] text-[16px] text-center leading-[20px]">Helping you manage your on-line Network, Services and Cybersecurity using Big Data</p>
          </div>
          <div className="hidden xl:flex absolute xl:right-44 right-32 top-60">
             <Image 
             src="/arrow.svg"
             alt="arrow"
             width={81}
             height={100}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center mb-20"
      style={{
        backgroundImage: "url(/world.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      >
            <div className="block 2sm:flex w-[214px] 2sm:w-[438px] h-[164px] 2sm:h-[93px] gap-[10px]">
              <div className="mb-[10px] 2sm:mb-0">
              <button className={`w-[214px] h-[61px] p-[10px] rounded-[4px] text-black bg-white font-bold ${sora.className}`}>See Our Products</button>
              </div>
              <div>
              <button className={styles.button}>Download Now</button>
              </div>
            </div>
          <div className={styles.reviewContainer}>
            <div className={styles.review}>
              <Review />
              <Review />
              <Review />
            </div>
          </div>
            
      </div>
      <div className="text-[#C9C2FF] bg-[#9294f8] flex w-full overflow-hidden gap-16"
      style={{
        transform: "rotateX(45deg)"
      }}
      >
        <h2 className={`text-[24px] font-medium ${sora.className} text-nowrap`}>Deep Learning Forecast Deep Learning</h2>
        <h2 className={`text-[24px] font-medium ${sora.className} text-nowrap`}>Diagnosis Data Center/Cloud Monitoring Services</h2>
        <h2 className={`text-[24px] font-medium ${sora.className} text-nowrap`}>Wireless/Internet Access</h2>
      </div>
    </div>
  )
}

export default Hero;

const Review = () => {
  return(
  <div className="2sm:flex block lg:gap-[9px] gap-[9px] 2sm:gap-[6px] rounded-[6px] p-[24px] bg-white w-[355px] h-[330px] lg:w-[899px] 2sm:w-[750px] 2sm:h-[126px]">
    <div className="flex items-start gap-[6px]">
      <h1 className={`text-[32px] ${sora.className}`}>5</h1>
      <Image 
      src="/star.svg"
      alt="star"
      width={17}
      height={20}
      />
    </div>
    <div className="mb-[9px] 2sm:mb-0">
      <h2 className={`text-[18px] font-bold ${plus.className}`}>I highly recommend this software</h2>
    </div>
    <div className="mb-[9px] 2sm:mb-0">
      <p className="text-[16px] font-normal leading-[26px] w-[307px] h-[104px] lg:w-[403px] 2sm:w-[300px] 2sm:h-[78px]">I recently tried out MacroProbe v1.3 software with and I found it to be extremely efficient and accurate in detecting anomalies.</p>
    </div>
    <div className="mb-[9px] 2sm:mb-0">
      <Image 
      src="/profile.png"
      alt="profile"
      width={26}
      height={26}
      />
    </div>
    <div>
      <h2 className={`text-[16px] font-bold ${plus.className} w-[97px] h-[28px]`}>Denny Jones</h2>
    </div>
  </div>
  )
}