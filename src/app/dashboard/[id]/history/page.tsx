import DashboardHistory from "@/components/dashboard/history/Dashboard_history";
import { createClient } from "@/components/supabase/server";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (params.id !== data.user?.id) {
    redirect("/");
  }
  return (
    <div>
      <DashboardHistory />
    </div>
  );
}
