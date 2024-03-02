import { Sora } from "next/font/google";
import React from "react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"]
})

type InfoType = {
  title: string
  Info: {
    topic: string;
    context:{
      text: string;
    }[];
  }[];
}

export const Infos = ({title, Info}: InfoType) => {
  return (
    <div className="w-[90%] lg:w-[700px] mb-10">
      <h2 className={`text-[16px] font-semibold text-[#0171C9] mb-6 ${sora.className}`}>{title}:</h2>
      {Info.map((info, index) => (
        <div key={index}>
          <h2 className={`text-[16px] font-medium text-[#18181B] leading-[32px] ${sora.className}`}>
            {info.topic}
          </h2>
         {info.context.map((words, index) => (
          <li key={index} className={`text-[16px] font-normal text-[#3F3F46] leading-[32px] ${sora.className}`}>{words.text}</li>
         ))}
        </div>
      ))}
    </div>
  );
};


