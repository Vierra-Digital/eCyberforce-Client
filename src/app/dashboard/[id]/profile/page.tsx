import Form from "@/components/dashboard/utils/Form";
import React from "react";
import styles from "@/components/dashboard/personal/Personal.module.css";
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
      <h1
        className={`text-[#18181B] text-[32px] font-medium`}
        style={{
          textAlign: "center",
          marginRight: "30px",
        }}
      >
        Personal Information
      </h1>

      <div className={styles.FormContainer}>
        <form>
          <div className={styles.FormSplitter}>
            <Form content={"First name"} type={"text"} />
            <Form content={"Last name"} type={"text"} />
          </div>
          <Form content={"Email"} type={"text"} />
          <div className={styles.FormSplitter}>
            <Form content={"Phone"} type={"number"} />
            <Form content={"Country"} type={"text"} />
          </div>
          <Form content={"Address"} type={"text"} />
          <button className={styles.FormsSubmit}>Save</button>
        </form>
      </div>
    </div>
  );
}
