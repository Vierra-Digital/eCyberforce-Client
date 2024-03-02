import React from "react";
import { Infos } from "./_components/Infos";
import Image from "next/image";
import { Sora } from "next/font/google";
import { WhatsNewInfo, BugFixInfo } from "./_constants";
const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Releases() {
  return (
    <div className="flex items-center justify-center flex-col pt-[64px] mb-10">
      <div className="text-center flex flex-col gap-[24px] mb-10">
        <h3
          className={`text-[14px] text-[#8C26FF] font-medium ${sora.className}`}
        >
          What&apos;s New
        </h3>
        <h1 className={`text-[32px] font-medium ${sora.className}`}>
          Latest Releases
        </h1>
        <h3 className={`text-[16px] ${sora.className}`}>
          Explore the Pinnacle of Cybersecurity Excellence{" "}
        </h3>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="border border-[#EAE9F7] p-[24px] w-[98%]">
          <div className="flex gap-[9px] items-center w-[99%] lg:w-[768px] h-[109px] py-[24px] border-b border-b-[#EAE9F7] mb-4">
            <h1 className={`text-[32px] font-semibold ${sora.className}`}>
              New
            </h1>
            <Image
              src="/star.svg"
              alt="star"
              width={17}
              height={10}
              className="mt-[-20px]"
            />
            <div>
              <h2
                className={`text-[24px] font-medium text-[#8C26FF] ${sora.className}`}
              >
                MacroProbe v.1.3
              </h2>
              <p className={`text-[14px] ${sora.className}`}>
                Release May 1, 2023
              </p>
            </div>
          </div>
          <Infos title="What's New" Info={WhatsNewInfo}/>
          <Infos title="Bug Fixes" Info={BugFixInfo}/>
        </div>

        <div className="flex gap-[9px] items-center w-[98%] lg:w-[802px] h-[109px] px-[24px] py-[48px] border border-[#EAE9F7] mb-4 mt-4">
          <h1 className={`text-[32px] font-semibold ${sora.className}`}>New</h1>
          <Image
            src="/star.svg"
            alt="star"
            width={17}
            height={10}
            className="mt-[-20px]"
          />
          <div>
            <h2
              className={`text-[24px] font-medium text-[#8C26FF] ${sora.className}`}
            >
              MacroProbe v.1.3
            </h2>
            <p className={`text-[14px] ${sora.className}`}>
              Release May 1, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


