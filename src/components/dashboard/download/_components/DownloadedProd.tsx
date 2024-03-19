"use client";
import React, { useState } from "react";
import DownloadProdItem from "./DownloadProdItem";

const DownloadsInfo = [
  { name: "MACROPROBEML v1.3", expirydate: "Subscribe (January 5,2024)" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
  { name: "MACROPROBEML v1.3", expirydate: "Never" },
];


export default function DownloadedProd() {
  const [isClicked, setIsClicked] = useState(false);
  const [Prodid, setProdId] = useState(0);

  const showBorder = (id: number, isClicked: any) => {
    setIsClicked(isClicked);
    setProdId(id);
  };
 
  return (
    <div className="gap-[12px] flex flex-col mt-6">
      {DownloadsInfo.map((info, id) => (
        <div
          key={id}
          className={
            isClicked && Prodid == id
              ? "border-2 border-[#0171C9] rounded-[6px] bg-[#F7F8FA]"
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
