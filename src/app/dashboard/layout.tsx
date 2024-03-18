import DashboardNavbar from "@/components/dashboard/utils/DashNavbar";
import DashboardSearch from "@/components/dashboard/utils/DashboardSearch";
import styles from "@/components/dashboard/Main.module.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.Container}>
      <DashboardNavbar />
      <div className={styles.MainContainer}>
        <DashboardSearch />
        <div style={{ paddingLeft: "30px" }}>{children}</div>
      </div>
    </div>
  );
}
