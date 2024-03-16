"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function PaySuccessModal() {
  const [closed, setClosed] = useState(false);
  const handleClose = () => setClosed(true);
  const handleModalContentClick = (e: React.MouseEvent) => e.stopPropagation();
  return (
    <div
      className={`fixed top-0 ${
        closed ? "hidden" : ""
      } left-0 flex items-center justify-center w-full h-full  bg-[#DADADA] bg-opacity-50 z-[99999]`}
      onClick={handleClose}
    >
      <div
        className="rounded-[24px] p-[24px] sm:w-[591px] w-[90%] bg-white border border-[#8C26FF] flex flex-col items-center"
        onClick={handleModalContentClick}
      >
        <div className="flex justify-between items-center border-b border-b-[#EAE9F7] sm:w-[543px] w-[90%]">
          <h1 className={`text-[32px]`}>Payment Successful</h1>
          <button
            className="rounded-full border border-[#EAE9F7] w-[24px] h-[24px] items-center justify-center"
            onClick={() => setClosed(!closed)}
          >
            <svg
              width="10"
              height="9"
              viewBox="0 0 10 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[6px]"
            >
              <path
                d="M8.99994 0.499818C8.81241 0.312347 8.5581 0.207031 8.29294 0.207031C8.02777 0.207031 7.77347 0.312347 7.58594 0.499818L4.99994 3.08582L2.41395 0.499818C2.22534 0.31766 1.97274 0.216865 1.71055 0.219144C1.44835 0.221422 1.19754 0.326591 1.01213 0.511999C0.826723 0.697407 0.721554 0.94822 0.719276 1.21042C0.716998 1.47261 0.817792 1.72522 0.99995 1.91382L3.58595 4.49982L0.99995 7.08582C0.817792 7.27442 0.716998 7.52702 0.719276 7.78922C0.721554 8.05141 0.826723 8.30223 1.01213 8.48764C1.19754 8.67304 1.44835 8.77821 1.71055 8.78049C1.97274 8.78277 2.22534 8.68198 2.41395 8.49982L4.99994 5.91382L7.58594 8.49982C7.77454 8.68198 8.02714 8.78277 8.28934 8.78049C8.55153 8.77821 8.80235 8.67304 8.98775 8.48764C9.17316 8.30223 9.27833 8.05141 9.28061 7.78922C9.28289 7.52702 9.18209 7.27442 8.99994 7.08582L6.41394 4.49982L8.99994 1.91382C9.18741 1.72629 9.29272 1.47198 9.29272 1.20682C9.29272 0.941653 9.18741 0.687345 8.99994 0.499818Z"
                fill="#888E9C"
              />
            </svg>
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
