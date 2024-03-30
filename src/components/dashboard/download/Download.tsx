import { Archivo } from "next/font/google";
import Image from "next/image";
import React from "react";
import styles from "../history/css/history.module.css";
import { ColumnDownload } from "../history/columns/Columns";
import Modal from "../utils/modal/Modal";
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function Download() {
  const data = [
    {
      product: "MACROPROBEML v1.3",
      expire: "Subscribe (January 5,2024)",
    },
    {
      product: "MACROPROBEML v1.3",
      expire: "Never",
    },
    {
      product: "MACROPROBEML v1.3",
      expire: "Never",
    },
    {
      product: "MACROPROBEML v1.3",
      expire: "Never",
    },
    {
      product: "MACROPROBEML v1.3",
      expire: "Never",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Downloads</h1>
        <div className="pr-[40px]">
          <div className="flex gap-[20px] lg:justify-end justify-start my-6">
            <button className="flex gap-[10px] border border-[#EAE9F7] rounded-[4px] w-[150px] h-[65px] items-center justify-center">
              <Image src="/clock.svg" alt="clock" width={24} height={24} />
              <span className="text-nowrap">Select Date</span>
            </button>
            <button className="flex gap-[10px] border border-[#EAE9F7] rounded-[4px] w-[150px] h-[65px] items-center justify-center">
              <Image src="/funnel.svg" alt="clock" width={24} height={24} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
      <Modal order_number={0} date={0} paid={undefined} />
      <div className={styles.container_table}>
        <div className={styles.Table}>
          <div className={styles.TableHead}>
            <div className={styles.TableHeadLeft}>
              <div>
                <div>Product</div>
                <span>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.375 6.66667L7.5 10L10.625 6.66667"
                      stroke="#18181B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div>
                <div>Expire</div>
                <span>
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.375 6.66667L7.5 10L10.625 6.66667"
                      stroke="#18181B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className={styles.TableHeadRight}>
              <div>Action</div>
              <span>
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.375 6.66667L7.5 10L10.625 6.66667"
                    stroke="#18181B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.TableContent}>
            {data.map((columns: any, index: number) => (
              <ColumnDownload {...columns} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
