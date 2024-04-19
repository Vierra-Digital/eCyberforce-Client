import styles from "./Namemodal.module.css";
import { CSSProperties } from "react";
import { Archivo } from "next/font/google";
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
let opened: boolean = true;
function Namemodal() {
  const containerStyle = {
    pointerEvents: opened
      ? ("auto" as CSSProperties["pointerEvents"])
      : ("none" as CSSProperties["pointerEvents"]),
  };
  return (
    <div className={styles.Container} style={containerStyle}>
      <div className={styles.Modal}>
        <div className={styles.Title}>
          <div className={archivo.className}>Enter your username</div>
        </div>
        <div>
          <form className={styles.Form}>
            <label>First name:</label>
            <input type="text" id="fname" name="fname" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Namemodal;
