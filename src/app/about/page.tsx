import Footer from "@/components/home/utils/Footer";
import { Sora } from "next/font/google";
import React from "react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});
function Page() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[32px] xs:gap-[24px] pt-[64px] mb-6 sm:mb-14">
        <h3 className={`text-[#8C26FF] text-[14px]`}>About Us</h3>
        <h1
          className={`sm:text-[32px] xs:text-[24px] text-[18px] leading-[42px] w-[290px] xs:w-[355px] h-[160px] sm:w-[642px] sm:h-[126px] text-center font-medium ${sora.className}`}
        >
          Transforming Legacies: Empowering Teams, Securing Futures - Our
          Journey in Cyberspace Management
        </h1>
        <p
          className={`text-[12px] xs:text-[14px] sm:text-[16px] font-normal leading-[26px] w-[270px] xs:w-[355px] h-[494px] sm:w-[569px] sm:h-[338px] ${sora.className}`}
        >
          After 30 years in the industry, we decided to alter direction. Now, we
          share our passion by helping others Manage The Cyberspace. Our ramp up
          process is designed to empower your team and outfit them with the
          tools they need with Network, Services and Cybersecurity Monitoring
          and we can extend monitor End-to-End Network Reachability, Services
          Delivery and Cybersecurity Coverage. Talk to us today about how we can
          support your needs to limit your On-Line Network and Services downtime
          and Cybersecurity Attacks, achieve good User Experiences on your
          Wireless and Internet, and Good Server Performance on your Data Center
          and Cloud. Our Patent Pending MacroProbe and CyberObservation
          Software/Appliance will put you on a solid track to successfully and
          proactively manage all your Network, Services and Cybersecurity
          Monitoring in Cyberspace.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Page;
