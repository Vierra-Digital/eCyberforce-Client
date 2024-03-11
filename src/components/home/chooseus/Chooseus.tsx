"use client";

import Image from "next/image";
import styles from "./css/Chooseus.module.css";
import { Sora } from "next/font/google";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});
function Chooseus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
      initial={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex flex-col items-center justify-center gap-[32px]">
        <div className="gap-[24px] flex flex-col text-center justify-center items-center">
          <h3 className={`text-[#8C26FF] text-[14px] ${sora.className}`}>
            Why choose us?
          </h3>
          <h1
            className={`sm:text-[32px] leading-[42px] text-[24px] text-[#18181B] w-[90%] sm:w-[578px] ${sora.className}`}
          >
            Elevate Your Defenses: Unveiling the Distinct Advantages of Choosing
            Our SaaS Cybersecurity Solution
          </h1>
          <h4
            className={`text-[12px] leading-[24px] text-[#3F3F46] w-[90%] sm:w-[515px] ${sora.className}`}
          >
            we offer a robust network with reliable and fast connections,
            comprehensive services that meet your specific needs, and advanced
            cybersecurity measures that utilize big data analytics to detect and
            prevent threats.
          </h4>
        </div>

        <div>
          <Image src="/choose.svg" alt="choose" width={1008} height={648} />
        </div>
      </div>
    </motion.div>
  );
}

export default Chooseus;
