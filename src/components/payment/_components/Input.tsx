"use client";
import Image from "next/image";
import styles from "../css/input.module.css";
import { useState } from "react";
import { InputHTMLAttributes } from "react";

interface Iprops
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  type: "text" | "number" | "email" | "password" | "tel" | "select";
  label: string;
  idInput: string;
  icon?: string
}

function Inputs({ type, label, icon, idInput, ...res }: Iprops) {
  const [leingt, setLeingt] = useState<boolean>();

  return (
    <div className={styles.container}>
        
      <div className={styles.container_input}>
        <label
          className={`${styles.label} ${leingt ? styles.focus : ""}`}
          htmlFor={idInput}
        >
            {icon && 
        <Image 
        src={icon}
        alt="icon"
        width={24}
        height={24}
        />
        }
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
