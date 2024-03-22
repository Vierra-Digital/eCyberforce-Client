import styles from "./Column.module.css";

interface Iprops {
  order: string;
  date: string;
  status: string;
  total: string;
  action: string;
}

function Columns({ order, date, status, total, action }: Iprops) {
  return (
    <div className={styles.Container}>
      <div className={styles.LeftRows}>
        <div className={styles.Row}>{order}</div>
        <div className={styles.Row}>{date}</div>
        <div className={styles.Row}>{status}</div>
        <div className={styles.Row}>{total}</div>
      </div>
      <div>
        <button className={styles.Button}>{action}</button>
      </div>
    </div>
  );
}

export default Columns;
