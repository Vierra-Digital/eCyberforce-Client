"use client";

import { useState, useRef } from "react";
import styles from "./css/Form.module.css";

function Form({ type, content }: { type: any; content: any }) {
  const ref = useRef<HTMLInputElement | any>();
  const [focus, setFocus] = useState(false);
  const [test, setTest] = useState(false);
  const [input, setInput] = useState("");
  const main = {
    backgroundColor:
      test || input ? "rgba(252, 252, 252, 0.05)" : "rgba(252, 252, 252, 0)",
    border:
      test || input ? "1px solid rgb(112, 160, 255)" : "1px solid #ecebf8",
  };
  const word = {
    fontSize: focus || input != "" ? "12px" : "14px",
    marginTop: focus || input != "" ? "-6px" : "23px",
  };
  function onFocus() {
    ref.current.focus();
  }
  function onInput() {
    setFocus(true);
    setTest(true);
  }
  function onLeave() {
    setFocus(false);
    setTest(false);
  }
  const typebutton = type ? type : "text";
  return (
    <div className={styles.FormGroup} onClick={() => onFocus()} style={main}>
      <label style={word} className={styles.Label}>
        {content}
      </label>
      <div className={styles.Form}>
        <input
          className={styles.FormInput}
          onFocus={() => onInput()}
          onBlur={() => onLeave()}
          onChange={(e) => setInput(e.target.value)}
          ref={ref}
          type={`${typebutton}`}
        />
      </div>
    </div>
  );
}

export default Form;
