import React from "react";
import styles from "./css/assistant.module.css";
import Image from "next/image";
import image_assistant from "./img/image_assistant.png";

function Assistant() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>
              CYBER ASSISTANT AI FOR THE MACROPROBE V.1.4 SEPTEMBER FY2024
            </h2>
          </div>
          <h5>MACROPROBE V.1.4 </h5>

          <button>Coming Soon</button>
        </div>
        <div className={styles.content}>
          <p>
            The first generation of the user interface is the command line in
            DOS. The second generation of the user interface is the GUI in
            Windows 3.1.  The third generation of the user interface is the
            Cyber Assistant AI in Cyberspace.  The MacroProbe v.1.4 will have
            the Cyber Assistant AI to answer any user questions on networks,
            online services and cybersecurity domain knowledge collected by the
            MacroProbe v.1.4 translating from the natural language to SQL and
            Python in the form of any averages, tables, 2-D charts, 3-D charts,
            4-D charts and 5-D charts.  We also provide you direct SQL query in
            case an experienced user wants precise control to retrieve data
            collected by the MacroProbe v1.4.  This provide the user access to
            all data collected by the MacroProbe v.1.4.  We also provide
            backward compatibility in providing the MacroProbe v.1.3 GUI in case
            users are more comfortable with GUI user interface.  The MacroProbe
            v.1.4 will be available in September FY2024.
          </p>
        </div>
      </div>
      <div className={styles.image_container}>
        <Image src={image_assistant} alt="" className={styles.image} />

        <p className={styles.p}>CYBER ASSISTANT AI HOMEPAGE</p>
      </div>
    </div>
  );
}

export default Assistant;
