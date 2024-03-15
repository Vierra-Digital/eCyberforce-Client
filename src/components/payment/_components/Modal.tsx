"use client"
import Image from "next/image";
import React, { useState } from "react";

export default function Modal() {
    const [closed, setClosed] = useState(false)
    const handleClose = () => setClosed(true);
    const handleModalContentClick = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <div className={`fixed top-0 ${closed ? "hidden" : ""} left-0 flex items-center justify-center w-full h-full  bg-black bg-opacity-50 z-[99999]`} onClick={handleClose}>
      <div className="rounded-[24px] p-[24px] sm:w-[591px] w-[90%] bg-white flex flex-col items-center" onClick={handleModalContentClick}>
        <div className="flex justify-between items-center border-b border-b-[#EAE9F7] sm:w-[543px] w-[90%]">
          <h1 className={`text-[32px]`}>Payment Successful</h1>
          <button className="rounded-full border border-[#EAE9F7] w-[24px] h-[24px] items-center justify-center" onClick={() => setClosed(!closed)}>
           <span className={`text-[#888E9C]`}>x</span>
          </button>
        </div>
        <div className="mt-[-50px]">
          <Image src="/drone.png" alt="drone" width="260" height="260" />
        </div>
      
        <div className="lg:w-[450px] w-[70%]">
          <p className={`text-[#888E9C] text-[16px]`}>
            Your payment has been successfully processed, ensuring secure fund
            transfer. Confirmation and recording guarantee the recipient has
            received the correct amount. Rest assured, your transaction was
            smooth and efficient.
          </p>
        </div>
        <button className={`bg-[#18181B] w-[297px] h-[61px] text-white mt-10`}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
