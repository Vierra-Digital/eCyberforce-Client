import DashboardNavbar from "@/components/dashboard/utils/DashNavbar";
import DashboardSearch from "@/components/dashboard/utils/DashboardSearch";
import styles from "@/components/dashboard/Main.module.css";
import Mobilenav from "@/components/dashboard/utils/Mobilenav";
import { createClient } from "@/components/supabase/server";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  return (
    <div className={styles.Container}>
      <DashboardNavbar
        userid={data.user?.id}
        name={data.user?.user_metadata.name}
        email={data.user?.email}
      />
      <div className={styles.MainContainer}>
        <Mobilenav
          userid={data.user?.id}
          name={data.user?.user_metadata.name}
          email={data.user?.email}
        />
        <DashboardSearch />
        <div style={{ paddingLeft: "30px", paddingTop: "30px" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
