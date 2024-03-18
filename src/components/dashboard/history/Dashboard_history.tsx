import styles from "./css/history.module.css";

// icone
import { CiFilter } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";

import { SlArrowDown } from "react-icons/sl";
import Columns from "./columns/Columns";

function Dashboard_history() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Order History</h1>
        <div className={styles.filter_date}>
          <div className={styles.date}>
            <span>
              <CiClock1 size={28} />
            </span>
            <h5>Select Date</h5>
          </div>
          <div className={styles.filter}>
            <span>
              <CiFilter size={28} />
            </span>
            <h5>Filters</h5>
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
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
            <Columns
              order="#8786"
              date="January 5,2024"
              status="Paid"
              total="$1500"
              action="View Details"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard_history;
