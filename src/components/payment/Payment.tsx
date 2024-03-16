"use client";
import React, { useState,useCallback} from "react";
import ProductItem from "./_components/ProductItem";
import Inputs from "./_components/Input";
import { Archivo, Sora } from "next/font/google";
import ProductCard from "./_components/ProductCard";
import PaySuccessModal from "./_components/Modal";
import DropDown from "./_components/DropDown";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["400"]
})

export default function Payment() {
  const [payment, setPayment] = useState(false);
  const handlePayment = useCallback(() => {
    setPayment(prevPayment => !prevPayment);
  }, [setPayment]);  
  return (
    <div className="flex items-center justify-center mt-[170px] p-[24px]">
      {payment && <PaySuccessModal />}
      <div className="border border-[#EAE9F7] rounded-[24px] lg:p-[24px] p-[10px]  gap-[24px] flex lg:flex-row flex-col-reverse lg:items-start items-center justify-center">
        <div className="flex flex-col lg:w-[550px] xl:w-[628px] w-[80%]">
          <h1 className={`text-[32px] text-[#18181B] ${archivo.className}`}>
            Payment Details
          </h1>
          <h4 className={`text-[14px] text-[#888E9C] ${archivo.className}`}>
            Enter your payment details below to purchase
          </h4>
          <div className="mt-6 flex flex-col gap-[16px] mb-6">
            <div className="flex gap-[32px]">
              <h3 className={`text-[16px] text-[#2e2e30] ${archivo.className}`}>
                Date
              </h3>
              <p className={`text-[#888E9C] text-[16px] ${archivo.className}`}>
                December 1,2023
              </p>
            </div>
            <div className="flex gap-[32px]">
              <h3 className={`text-[16px] text-[#2e2e30] ${archivo.className}`}>
                Email
              </h3>
              <p className={`text-[#888E9C] text-[16px] ${archivo.className}`}>
                Somebody@gmail.com
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <ProductItem name="MACROPROBEML v1.3" />
            <ProductItem name="MacroProbe Global Manager (MGM) v1.3" />
            <div className="flex flex-col lg:flex-row items-center gap-[12px]">
              <div className=" lg:w-[350px] w-full">
                <Inputs label="Name on card" type="text" idInput="Name_input" />
              </div>
              <div className=" lg:w-[268px] w-full">
                <Inputs label="Expiry" type="text" idInput="Expiry_input" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-[12px]">
              <div className="lg:w-[350px] w-full">
                <Inputs
                  label="Card Number"
                  type="text"
                  idInput="card_input"
                  icon="/master.svg"
                />
              </div>
              <div className="lg:w-[268px] w-full">
                <Inputs label="CVV" type="text" idInput="cvv_input" />
              </div>
            </div>
            <Inputs
              label="Billing Address"
              type="text"
              idInput="billing_input"
            />
            <Inputs label="CCD 4th Avenue" type="text" idInput="ccd_input" />
            <div className="flex flex-col lg:flex-row items-center gap-[12px]">
              <div className="lg:w-[350px] w-[99%]">
                <Inputs
                  label="State/Province"
                  type="text"
                  idInput="Name_input"
                />
              </div>
              <div className="lg:w-[268px] w-[99%]">
                <Inputs label="Zip Code" type="text" idInput="Zip_input" />
              </div>
            </div>
            <DropDown />
            <button
              className={`bg-[#18181B] rounded-[4px] px-[10px] py-[20px] mt-8 text-white mb-10 lg:mb-0 ${sora.className}`}
              onClick={handlePayment}
            >
              Complete Payment $1500
            </button>
          </div>
        </div>
        <div>
        <div className="flex lg:flex-col flex-row gap-[24px] lg:w-full w-[436px] lg:overflow-visible overflow-x--hidden items-center justify-center lg:justify-start">
            <div>
          <ProductCard name="MacroProbe v.1.3" price={50} />
            </div>
            <div className="hidden lg:flex">
          <ProductCard
            name="MacroProbe Global Manager (MGM) v1.3"
            price={1500}
          />
            </div>
        </div>
        <div className="flex items-center justify-center gap-20 mt-10 lg:hidden">
            <button>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 1L1 6L6 11"
                  stroke="#CACACA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button>
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L6 6L1 1"
                  stroke="#8C26FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
