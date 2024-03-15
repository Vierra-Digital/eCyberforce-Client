"use client"
import { Archivo } from "next/font/google";
import React, { useState } from "react";

const archivo = Archivo({
    subsets: ["latin"],
    weight: ["400", "500"]
})
export default function QtyIncrement() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
  return (
    <div>
      <div className="flex items-center gap-[12px] border border-[#EAE9F7] px-[10px] py-[12px] w-[120px] h-[72px] rounded-[4px]">
        <div className="flex flex-col justify-end items-end">
          <span>Quantity</span>
          <span>{count}</span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <button onClick={increment}>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6L6 1L1 6"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={decrement}>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6 6L11 1"
                stroke="#CACACA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
