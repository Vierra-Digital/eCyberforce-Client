import { Archivo, Sora } from 'next/font/google'
import React from 'react'
import { privacyPolicyInfos } from '../_constants'

const sora = Sora({
    subsets: ["latin"],
    weight: ["500"]
})

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500"]
})

type LegalProps = {
    type: string,
    Info: {
        title: string;
        context: {
            text: string
        }[];
    }[];
}

export default function Legal({type, Info}: LegalProps) {
  return (
    <div className='flex items-center justify-center pt-[64px] mb-14'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className={`text-[#8C26FF] text-[14px] ${sora.className}`}>Legal</h3>
          <h1 className={`text-[#18181B] text-[32px] mt-4 ${sora.className}`}>{type}</h1>
          {Info.map((info, index) => (
            <div key={index} className='flex flex-col justify-center w-[90%] lg:w-[939px] gap-[24px] mt-10'>
              <h4 className={`text-[16px] font-semibold w-full leading-[24px] text-center sm:text-start ${archivo.className}`}>{info.title}</h4>
              {info.context.map((topic, index) => (
                  <p className={`text-[16px] leading-[24px] ${archivo.className}`} key={index}>{topic.text}</p>
              ))}
            </div>
          ))}
          <button className={`bg-[#18181B] border border-[#191919] mt-[52px] w-[214px] h-[61px] rounded-[4px] p-[10px] text-[white] ${sora.className}`}>
            Print
          </button>
        </div>
    </div>
  )
}
