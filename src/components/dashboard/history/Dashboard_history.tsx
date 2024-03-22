import styles from "./css/history.module.css";

// icone
import { CiFilter } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";

import { SlArrowDown } from "react-icons/sl";
import Columns from "./columns/Columns";
import Image from "next/image";
import Modal from "../utils/modal/Modal";

function DashboardHistory() {
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
        {/* <Modal state={false} debug={undefined} /> */}
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
            {[1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <Columns
                order="#8786"
                date="January 5,2024"
                status="Paid"
                total="$1500"
                action="View Details"
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
