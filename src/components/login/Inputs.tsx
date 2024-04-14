import { redirect } from "next/navigation";
import styles from "./css/inputs.module.css";
import { createClient } from "../supabase/server";
let email: string;
let error: boolean;
let clicked: boolean = false;

async function Inputs() {
  const signIn = async (formData: FormData) => {
    "use server";

    const supabase = createClient();
    email = formData.get("email") as string;

    if (!email.includes("@")) {
      error = true;
      return;
    } else {
      error = false;
    }
    const { data: userdata, error: serverError } =
      await supabase.auth.signInWithOtp({
        email,
        // options:{

        // }
      });
    if (serverError) {
      return redirect("/error?message=Could not authenticate user with signin");
    }
    clicked = true;
  };
  const useOTP = async (formData: FormData) => {
    "use server";
    const otp = formData.get("otp") as string;

    const supabase = createClient();

    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    if (error) {
      return redirect("/error?message=Could not authenticate user with otp");
    }
    return redirect("/dashboard");
  };

  return (
    <div className={styles.container} style={{ marginTop: "-20px" }}>
      {!clicked && (
        <form>
          <div className={styles.container_input}>
            <label
              className={`${styles.label} ${styles.focus}`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className={styles.input}
              type="email"
              required
            />
          </div>
          <div
            className={styles.Verify}
            style={{ color: !error ? "#8d93a0" : "red" }}
          >
            {clicked && !error
              ? `Code sent! Copy the code and paste here`
              : clicked && error
              ? "Email must include @"
              : ""}
          </div>
          <h3>
            By continuing, you accept
            <span> Terms & Conditions </span> and
            <span> Privacy Policy</span>
          </h3>

          <button
            type="submit"
            // onClick={() => handleSubmit()}
            formAction={signIn}
          >
            Get Sign-in Link
          </button>
        </form>
      )}
      {clicked && (
        <form>
          <div className={styles.container_input}>
            <label
              className={`${styles.label} ${styles.focus}`}
              htmlFor="email"
            >
              Code
            </label>
            <input name="otp" className={styles.input} required />
          </div>
          <div
            className={styles.Verify}
            style={{ color: !error ? "#8d93a0" : "red" }}
          >
            {clicked && !error
              ? `Code sent! Copy the code and paste here`
              : clicked && error
              ? "Email must include @"
              : ""}
          </div>
          <h3>
            By continuing, you accept
            <span> Terms & Conditions </span> and
            <span> Privacy Policy</span>
          </h3>

          <button type="submit" formAction={useOTP}>
            Verify Code
          </button>
        </form>
      )}
    </div>
  );
}

export default Inputs;
