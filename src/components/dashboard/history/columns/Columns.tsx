"use client";
import Modal from "../../utils/modal/Modal";
import useModalStore from "../../utils/modal/Store";
import styles from "./Column.module.css";

interface Iprops {
  order: string;
  date: string;
  status: string;
  total: string;
  action: string;
  index: number;
}

function Columns({ order, date, status, total, action, index }: Iprops) {
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
          {action}
        </button>
      </div>
      <Modal debug={index} key={index} />
    </div>
  );
}

export default Columns;
