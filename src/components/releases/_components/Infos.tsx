import { Sora } from "next/font/google";
import React from "react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"]
})

type InfoType = {
  title: string
}

export const Infos = ({title}: InfoType) => {
  return (
    <div className="w-[90%] lg:w-[700px] mb-10">
      <h2 className={`text-[16px] font-semibold text-[#0171C9] mb-6 ${sora.className}`}>{title}:</h2>
      <div>
        <h2 className={`text-[16px] font-medium text-[#18181B] leading-[32px] ${sora.className}`}>
        1. Enhanced Malware Detection:
        </h2>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>
          Improved heuristics and signature-based detection for identifying and
          blocking advanced malware threat.
        </li>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>
          Updated threat intelligence feeds for better real-time analysis.
        </li>
        <h2 className={`text-[16px] font-medium text-[#18181B] leading-[32px] ${sora.className}`}>
        2. Performance Optimization:
        </h2>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>
          Streamlined resource usage, resulting in faster scans and reduced
          impact on system performance.
        </li>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>
          Improved algorithms for quicker threat identification and mitigation.
        </li>
        <h2 className={`text-[16px] font-medium text-[#18181B] leading-[32px] ${sora.className}`}>
        3. New Firewall Roles:
        </h2>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>Added advanced firewall roles to strengthen network security.</li>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>Enhanced network traffic monitoring and filtering capabilities.</li>
        <h2 className={`text-[16px] font-medium text-[#18181B] leading-[32px] ${sora.className}`}>
        4. User Interface Improvements:
        </h2>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>
          Revamped user interface for a more intuitive and user-friendly
          experience.
        </li>
        <li className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>
          Updated dashboard with real-time threat statistics and system health
          information.
        </li>
      </div>
    </div>
  );
};


