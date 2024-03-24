"use client";
import Modal from "../../utils/modal/Modal";
import useModalStore from "../../utils/modal/Store";
import styles from "./Column.module.css";

interface Iprops {
  order: any;
  date: any;
  status: any;
  total: any;
  index: number;
}

function Columns({ order, date, status, total, index }: Iprops) {
  const { opened, openModal, closeModal } = useModalStore();

  return (
    <div className={styles.Container}>
      <div className={styles.LeftRows}>
        <div className={styles.Row}>{order}</div>
        <div className={styles.Row}>{date}</div>
        <div className={styles.Row}>{status}</div>
        <div className={styles.Row}>{total}</div>
      </div>
      <div>
        <button className={styles.Button} onClick={openModal}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default Columns;
