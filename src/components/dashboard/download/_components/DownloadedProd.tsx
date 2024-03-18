"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../css/download.module.css";

const DownloadsInfo = [
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
];

type Dprops = {
  name: string;
  date: string;
};

export default function DownloadedProd() {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedProp, setIsClickedProp] = useState(false);
  const [Prodid, setProdId] = useState(0);
  const showBorder = (id: number, isClicked: any) => {
    setIsClicked(isClicked);
    setProdId(id);
    console.log("clicked");
  };
  const showBorderProp = () => {
    {
        !isClicked && setIsClickedProp(!isClickedProp);
    }
  };
  return (
    <div className="gap-[12px] flex flex-col mt-6">
      <div
        onClick={showBorderProp}
        className={
          isClickedProp ? "border-2 border-[#0171C9] rounded-[6px]" : ""
        }
      >
        <DownloadProp />
      </div>
      {DownloadsInfo.map((info, id) => (
        <div
          key={id}
          className={
            isClicked && Prodid == id
              ? "border-2 border-[#0171C9] rounded-[6px]"
              : ""
          }
          onClick={() => showBorder(id, true)}
        >
          <DownloadProdItem name={info.name} date={info.expirydate} />
        </div>
      ))}
    </div>
  );
}

const DownloadProdItem = ({ name, date }: Dprops) => {
  return (
    <div
      className={`flex items-center justify-between rounded-[6px] p-[4px] hover:bg-[#F7F8FA]`}
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
        <button
          className={`border border-[#EAE9F7] rounded-[1px] p-[10px] w-[163px] h-[48px]`}
        >
          View Details
        </button>
        <button className={styles.button}>Download Now</button>
      </div>
    </div>
  );
};

const DownloadProp = () => {
  return (
    <div className="flex items-center justify-between rounded-[6px] p-[4px] hover:bg-[#F7F8FA] ">
      <div className="flex">
        <div className="flex gap-2 w-[390px]">
          <h4>MACROPROBEML v1.3</h4>
        </div>
        <div className="flex gap-2">
          <h4>Subscribe (January 5,2024)</h4>
        </div>
      </div>
      <div className="flex gap-6">
        <button
          className={`bg-black rounded-[4px] p-[10px] w-[163px] h-[48px] text-white`}
        >
          Renew
        </button>
        <button className={styles.button}>Download Now</button>
      </div>
    </div>
  );
};
