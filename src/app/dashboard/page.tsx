import { createClient } from "@/components/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!data.user) {
    return redirect("/");
  }
  if (data.user) {
    return redirect(`/dashboard/${data.user.id}/profile`);
  }
}
