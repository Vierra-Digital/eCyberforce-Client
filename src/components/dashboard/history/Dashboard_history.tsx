"use client";

import styles from "./css/history.module.css";
import Columns from "./columns/Columns";
import Image from "next/image";
import Modal from "../utils/modal/Modal";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

function DashboardHistory() {
  const { data, error, isLoading } = useSWR(
    "https://6600685f87c91a1164194a2d.mockapi.io/api/columns/purchasecolumn",
    fetcher
  );
  if (error) throw error;
  if (isLoading) return "Loading";
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Order History</h1>
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
      <div className={styles.container_table}>
        <Modal debug={undefined} />
        <div className={styles.Table}>
          <div className={styles.TableHead}>
            <div className={styles.TableHeadLeft}>
              <div>
                <div>Order #</div>
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
                <div>Date</div>
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
                <div>Status</div>
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
                <div>Total</div>
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
              <Columns
                {...columns}
                status={columns.status ? "Paid" : "Not paid"}
                index={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHistory;
