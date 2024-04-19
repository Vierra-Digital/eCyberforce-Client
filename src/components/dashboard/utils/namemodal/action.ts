"use server";

import { createClient } from "@/components/supabase/server";
import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/)
    .min(3, "Name needs to be over 3 characters long"),
});
export default async function updateName(formData: FormData) {
  const validation = schema.safeParse({
    name: formData.get("username"),
  });
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (validation.success) {
    console.log(validation.success);
  } else {
    console.log(validation.error.message);
  }
}
