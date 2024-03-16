import { Sora } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

type ProductProps = {
  name: string,
  price: number
}
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"]
})
export default function ProductCard({name, price} : ProductProps) {
  const backgroundColor = name === "MacroProbe Global Manager (MGM) v1.3" ? '#A0C0F1' : '#8C26FF';
  return (
    <div className='p-[24px] rounded-[24px] lg:w-[436px] w-[331px]' style={{backgroundColor}}>
      <div className='flex items-center justify-center flex-col gap-[24px]'>
        
        <Image 
        src="/macrobeImg.png"
        alt="img"
        width={334}
        height={306}
        className='mt-[-70px]'
        />
        <div className='flex justify-between items-center lg:w-[388px] w-[311px]'>
          <div className='flex flex-col gap-[8px] w-[223px] text-white'>
            <h1 className={`text-[16px]`}>{name}</h1>
             <h2 className={`text-[14px] w-[181px]`}>Software Supports on Windows 11, 10 and 8. </h2>
         </div>
         <div className='flex text-white items-center'>
          <h1 className={`text-[32px] ${sora.className}`}>${price}</h1>
          <p className={`text-[14px]`}>/per mon</p>
         </div>
        </div>
      </div>
    </div>
  )
}
