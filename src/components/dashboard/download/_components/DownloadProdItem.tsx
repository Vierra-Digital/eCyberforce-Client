import React from "react";

type Dprops = {
  name: string;
  date: string;
};

import styles from "../css/download.module.css";
export default function DownloadProdItem({ name, date }: Dprops) {
  const backgroundColor =
    date === "Subscribe (January 5,2024)"
      ? "rounded-[4px] bg-black text-white p-[10px] w-full h-full sm:text-[14px] text-[10px]"
      : "border border-[#EAE9F7] rounded-[1px] p-[10px] w-full h-full sm:text-[14px] text-[10px]";
  const text = date === "Subscribe (January 5,2024)" ? "Renew" : "View Details";
  return (
    <div
      className={`flex items-center justify-between rounded-[6px] py-[4px] hover:bg-[#F7F8FA] w-full cursor-pointer`}
    >
      <div className="flex w-full">
        <div className="flex xl:w-[390px] lg:w-[290px] w-[120px]">
          <h4 className={`lg:text-[14px] sm:text-[12px] text-[10px] lg:w-[155px] w-[120px]`}>{name}</h4>
        </div>
        <div className="flex gap-2">
          <h4 className={`lg:text-[14px] sm:text-[12px] text-[10px] lg:w-[150px] sm:w-[120px] w-[40px]`}>{date}</h4>
        </div>
      </div>
      <div className="flex lg:gap-6 gap-3">
        <div className="lg:w-[163px] sm:w-[100px] w-[70px] lg:h-[48px] h-[60px]">
        <button className={backgroundColor}>{text}</button>
        </div>
        <div className="lg:w-[163px] sm:w-[100px] w-[70px] lg:h-[48px] h-[60px]">
        <button className={styles.button}>
            <span className={`text-white lg:text-[14px] text-[10px]`}>
            Download Now
            </span>
        </button>
        </div>
      </div>
    </div>
  );
}
