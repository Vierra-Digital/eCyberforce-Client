import React from "react";
import { Sora } from "next/font/google";
import styles from "./css/Manager.module.css";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Manager() {
  return (
    <div className="flex flex-col items-center justify-center pt-[64px] mb-14 gap-[52px]">
      <div className="text-center flex flex-col gap-[24px] items-center">
        <h4
          className={`text-[#8C26FF] text-[14px] font-medium ${sora.className}`}
        >
          Our (SaaS) Products
        </h4>
        <h2
          className={`lg:text-[36px] text-[24px] leading-[42px] font-medium ${sora.className}`}
        >
          MacroProbe Global Manager v1.3
        </h2>
        <h3
          className={`text-[16px] leading-[20px] text-[#8C26FF] ${sora.className}`}
        >
          THE MACROPROBE GLOBAL MANAGER (MGM) V1.3 IS NOW AVAILABLE:
        </h3>
        <button className={styles.button}>Order Now</button>
      </div>
      <div className="px-2">
        <p className={`text-[16px] w-[99%] xl:w-[1022px] sm:w-[900px] leading-[24px] text-[#3F3F46] ${sora.className}`}>
          The MacroProbe Global Manager v1.3 that can manage multiple
          MacroProbes from the Access License MacroProbe to the Distribution
          License MacroProbe to the Core License MacroProbe. It provides a
          Central Point of Management and Monitoring and Global Access, Global
          Data Aggregation and Big Data Monitoring for the MacroProbes it
          manages.<br/><br/> It also provides a wide variety of Deployment End-To-End
          Monitoring from Internet and Wireless Access to Data Center and Cloud
          Online Services as seen in diagrams below.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px] px-4">
        <div className="lg:w-[749px] lg:h-[420px] w-[351px] h-[220px]">
        <Image 
        src="/managerImg1.png"
        alt="man_img"
        width={749}
        height={420}
        className="flex"
        />
        </div>
        <div className="sm:w-[492px] w-full">
        <p className={` w-[98%]  text-[14px] leading-[24px] text-[#000000] ${sora.className}`}>
        END-TO-END MONITORING OF NETWORK, SERVICES AND CYBERSECURITY DELIVERY FROM WIRELESS ACCESS TO CLOUD SERVICES PROVIDER IN THE GLOBAL INTERNET
        </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px]">
        <div className="lg:w-[749px] lg:h-[420px] w-[351px] h-[220px]">
        <Image 
        src="/managerImg2.png"
        alt="man_img"
        width={749}
        height={420}
        className="flex"
        />
        
        </div>
        <div className="w-full sm:w-[446px]">
        <p className={` w-[98%]  text-[14px] leading-[24px] text-[#000000] ${sora.className}`}>
        END-TO-END MONITORING OF NETWORK, SERVICES AND CYBERSECURITY DELIVERY FROM WIRELESS ACCESS TO CLOUD SERVICES PROVIDER IN THE GLOBAL INTERNET
        </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[10px] px-2">
        <div className="lg:w-[749px] lg:h-[420px] w-[351px] h-[220px]">
        <Image 
        src="/managerImg3.png"
        alt="man_img"
        width={749}
        height={420}
        className="flex"

        />
        
        </div>
        <div className="w-full sm:w-[516px]">
        <p className={` w-[98%] text-[14px] leading-[24px] text-[#000000] ${sora.className}`}>
        END-TO-END MONITORING OF NETWORK, SERVICES AND CYBERSECURITY DELIVERY FROM WIRELESS ACCESS TO CLOUD SERVICES PROVIDER IN THE GLOBAL INTERNET
        </p>
        </div>
      </div>
    </div>
  );
}
