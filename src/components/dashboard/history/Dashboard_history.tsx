import styles from "./css/history.module.css";

// icone
import { CiFilter } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";

import { SlArrowDown } from "react-icons/sl";
import Columns from "./columns/Columns";
import Image from "next/image";
import Modal from "../utils/modal/Modal";

function Dashboard_history() {
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
        <table className={styles.table}>
          <colgroup>
            <col className={styles.col_one} />
            <col className={styles.col_two} />
            <col className={styles.col_three} />
            <col className={styles.col_fourth} />
            <col className={styles.col_five} />
          </colgroup>
          <thead>
            <tr>
              <th>
                <div>
                  <h5>Order #</h5>
                  <span>
                    <SlArrowDown size={9} />
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <h5>Date</h5>{" "}
                  <span>
                    <SlArrowDown size={9} />
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <h5>Status</h5>
                  <span>
                    <SlArrowDown size={9} />
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <h5>Total</h5>{" "}
                  <span>
                    <SlArrowDown size={9} />
                  </span>
                </div>
              </th>
              <th>
                <div>
                  <h5>Action</h5>{" "}
                  <span>
                    <SlArrowDown size={9} />
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 1, 1, 1, 1, 1, 1, 1].map((index) => (
              <Columns
                order="#8786"
                date="January 5,2024"
                status="Paid"
                total="$1500"
                action="View Details"
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard_history;
