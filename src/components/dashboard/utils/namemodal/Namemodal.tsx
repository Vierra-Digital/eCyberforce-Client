"use client";

import styles from "./Namemodal.module.css";
import { CSSProperties, useState } from "react";
import { Archivo } from "next/font/google";
import updateName from "./action";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Namemodal() {
  const [name, setName] = useState("");
  const containerStyle = {
    pointerEvents: true
      ? ("auto" as CSSProperties["pointerEvents"])
      : ("none" as CSSProperties["pointerEvents"]),
  };
  return (
    <div className={styles.Container} style={containerStyle}>
      <div className={styles.Modal}>
        <div className={styles.Title}>
          <div className={archivo.className}>Enter your username </div>
        </div>
        <div className={styles.FormContainer}>
          <form className={styles.Form} action={updateName}>
            <input
              type="text"
              name="username"
              className={styles.FormInput}
              maxLength={25}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className={styles.ButtonForm}>
              <div className={archivo.className}>Submit</div>
            </button>
          </form>

          <div className={styles.Max}>
            3-25 characters, only letters and numbers
          </div>
        </div>
      </div>
    </div>
  );
}

export default Namemodal;
