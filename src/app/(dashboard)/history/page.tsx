import DashboardNavbar from "@/components/dashboard/utils/DashNavbar";
import React from "react";
import styles from "@/components/dashboard/Main.module.css";

function Page() {
  return (
    <div className={styles.Container}>
      <DashboardNavbar />
    </div>
  );
}

export default Page;
