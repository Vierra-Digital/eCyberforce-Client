import { Archivo } from "next/font/google";
import styles from "./Dashboardsearch.module.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function DashboardSearch() {
  return (
    <div className={styles.Container}>
      <div className={styles.SearchBar}>
        <div></div>
        <div className={styles.SearchWord}>
          <p className={archivo.className}>Search Orders</p>
        </div>
      </div>
      <div className={styles.Logout}>
        <div className={styles.LogoutSvg}></div>
        <div className={styles.LogoutWord}>Logout</div>
      </div>
    </div>
  );
}

export default DashboardSearch;
