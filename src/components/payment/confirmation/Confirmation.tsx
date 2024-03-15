import { Archivo } from 'next/font/google'
import React from 'react'

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"]
})
export default function Confirmation() {
  return (
    <div className='flex items-center justify-center mt-[170px] px-[24px] mb-20'>
      
      <div className='flex items-center justify-center border border-[#EAE9F7] rounded-[24px] w-[1136px] p-[24px]'>
        <div className='lg:w-[628px] w-[90%]'>
          <div className='mb-6 '>
          <h1 className={`text-[32px] ${archivo.className}`}>Order Confirmation</h1>
          <p className={`text-[#888E9C] text-[14px]`}>Enter your payment details below to purchase</p>
          </div>
          <div className='flex gap-32'>
            <div className='flex flex-col gap-[5px]'>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Product</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Order Number</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Date</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Email</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Payment Method</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Total Paid</h3>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>MACROPROBEML v1.3</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>#1145653</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>December 1,2023</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>Somebody@gmail.com</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>Mastercard 1062</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>$1500</span>
            </div>
          </div>

          
          
          <h1 className={`text-[32px] ${archivo.className} mt-10 border-b border-b-[#EAE9F7]`}>Billing Information</h1>
          <div className='flex gap-32 mt-4'>
            <div className='flex flex-col gap-[5px]'>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Product</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Order Number</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Date</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Email</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Payment Method</h3>
              <h3 className={`text-[16px] text-nowrap ${archivo.className}`}>Total Paid</h3>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>MACROPROBEML v1.3</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>#1145653</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>December 1,2023</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>Somebody@gmail.com</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>Mastercard 1062</span>
              <span className={`text-[#888E9C] text-[16px] ${archivo.className}`}>$1500</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
