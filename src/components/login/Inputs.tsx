"use client";
import styles from "./css/inputs.module.css";
import { useState } from "react";
import { InputHTMLAttributes } from "react";

interface Iprops
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  type: "text" | "number" | "email" | "password" | "tel";
  label: string;
  idInput: string;
}

function Inputs({ type, label, idInput, ...res }: Iprops) {
  const [leingt, setLeingt] = useState<boolean>();

  return (
    <div className={styles.container}>
      <div className={styles.container_input}>
        <label
          className={`${styles.label} ${leingt ? styles.focus : ""}`}
          htmlFor={idInput}
        >
          {label}
        </label>
        <input
          {...res}
          id={idInput}
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setLeingt(true);
            }
            if (e.target.value.length == 0) {
              setLeingt(false);
            }
          }}
          className={styles.input}
          type={type}
        />
      </div>
    </div>
  );
}

export default Inputs;
