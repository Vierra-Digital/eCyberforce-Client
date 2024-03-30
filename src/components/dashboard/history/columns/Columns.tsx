"use client";
import { Sora } from "next/font/google";
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

const sora = Sora({
  subsets: ["latin"],
  weight: ["400"],
});
export function Columns({ order, date, status, total, index }: Iprops) {
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
          <p className={sora.className}>View Details</p>
        </button>
      </div>
    </div>
  );
}

// So take the index of clicked then

export function ColumnDownload({
  product,
  expire,
}: {
  product: any;
  expire: any;
}) {
  const { opened, openModal, closeModal } = useModalStore();

  return (
    <div className={styles.Container}>
      <div className={styles.LeftRows}>
        <div className={styles.Row}>{product}</div>
        <div className={styles.Row}>{expire}</div>
      </div>
      <div className={styles.Buttons}>
        {expire != "Never" ? (
          <button className={styles.ButtonRenew} onClick={openModal}>
            <p className={sora.className}>Renew</p>
          </button>
        ) : (
          <button className={styles.ButtonDetails} onClick={openModal}>
            <p className={sora.className}>View Details</p>
          </button>
        )}
        <button className={styles.ButtonDownload}>
          <p className={sora.className}>Download</p>
        </button>
      </div>
    </div>
  );
}
