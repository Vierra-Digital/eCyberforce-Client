import React from "react";
import QtyIncrement from "./QtyIncrement";
import { Archivo } from "next/font/google";

type ItemProps = {
  name: string;
};
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

export default function ProductItem({ name }: ItemProps) {
  return (
    <div className="flex gap-[12px]">
      <div className="flex rounded-[4px] justify-between items-center border border-[#EAE9F7] lg:w-[498px] w-full h-[72px] px-[10px] py-[12px] ">
        <div>
        <h2 className={`text-[#0171C9] text-[14px] leading-[24px]`}>Product</h2>
        <h1 className={`text-[#0171C9] text-[14px] leading-[15px]`}>{name}</h1>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.32972 0.604492C1.15912 0.604492 0.980723 0.661829 0.850523 0.791829C0.59019 1.0525 0.59019 1.48982 0.850523 1.75049L5.03806 5.93782L0.850523 10.1252C0.59019 10.3858 0.59019 10.8232 0.850523 11.0838C1.11092 11.3438 1.54852 11.3438 1.80892 11.0838L5.99639 6.89649L10.1839 11.0838C10.4443 11.3438 10.8819 11.3438 11.1423 11.0838C11.4026 10.8232 11.4026 10.3858 11.1423 10.1252L6.95472 5.93782L11.1423 1.75049C11.4026 1.48982 11.4026 1.0525 11.1423 0.791829C11.0121 0.661829 10.8336 0.604492 10.6631 0.604492C10.4925 0.604492 10.3141 0.661829 10.1839 0.791829L5.99639 4.97916L1.80892 0.791829C1.67872 0.661829 1.50032 0.604492 1.32972 0.604492Z"
            fill="#363636"
          />
        </svg>
      </div>
      <QtyIncrement />
    </div>
  );
}
