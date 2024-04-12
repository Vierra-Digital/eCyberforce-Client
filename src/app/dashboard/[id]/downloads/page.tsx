import Download from "@/components/dashboard/download/Download";
import { createClient } from "@/components/supabase/server";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (params.id !== data.user?.id) {
    redirect("/");
  }
  return (
    <>
      <Download />
    </>
  );
}
