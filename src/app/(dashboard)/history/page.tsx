import DashboardNavbar from "@/components/dashboard/utils/DashNavbar";
import React from "react";
import styles from "@/components/dashboard/Main.module.css";
import DashboardSearch from "@/components/dashboard/utils/DashboardSearch";

function Page() {
  return (
    <div className={styles.Container}>
      <DashboardNavbar />
      <div className={styles.MainContainer}>
        <DashboardSearch />
      </div>
    </div>
  );
}

export default Page;
