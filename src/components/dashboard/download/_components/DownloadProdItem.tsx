import React from "react";

type Dprops = {
  name: string;
  date: string;
};

import styles from "../css/download.module.css";
export default function DownloadProdItem({ name, date }: Dprops) {
  const backgroundColor =
    date === "Subscribe (January 5,2024)"
      ? "rounded-[4px] bg-black text-white p-[10px] w-[163px] h-[48px]"
      : "border border-[#EAE9F7] rounded-[1px] p-[10px] w-[163px] h-[48px]";
  const text = date === "Subscribe (January 5,2024)" ? "Renew" : "View Details";
  return (
    <div
      className={`flex items-center justify-between rounded-[6px] py-[4px] hover:bg-[#F7F8FA] w-full cursor-pointer`}
    >
      <div className="flex">
        <div className="flex gap-2 w-[390px]">
          <h4>{name}</h4>
        </div>
        <div className="flex gap-2">
          <h4>{date}</h4>
        </div>
      </div>
      <div className="flex gap-6">
        <button className={backgroundColor}>{text}</button>
        <button className={styles.button}>Download Now</button>
      </div>
    </div>
  );
}
