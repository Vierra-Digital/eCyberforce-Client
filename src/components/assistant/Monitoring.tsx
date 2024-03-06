import React from "react";
import styles from "./css/monitoring.module.css";
import Image from "next/image";
import image_Monitoring from "./img/image_Monitoring.png";

function Monitoring() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h6>Our (SaaS) Products</h6>
        <div className={styles.title}>
          <h2>LOGSINTEL FOR CYBERSECURITY MONITORING SEPTEMBER FY2024</h2>
        </div>
        <h5>MACROPROBE V.1.4 </h5>

        <button>Coming Soon</button>
      </div>
      <div className={styles.content}>
        <h2>The Golden Faction for The Whole Cyberspace Management:</h2>
        <ol>
          <li>1) 1/3 = Event Logs Data Source (e.g, LogsIntel)</li>
          <li>2) 1/6 = Packet Flow Data Source (e.g, PacketIntel)</li>
          <li>
            3) 1/9 = User Skills (e.g, Network Administrator, System
            Administrator, Help Desk, Network Operator, Approver)
          </li>
          <li>4) 7/18 = The Tools Used (e.g., MacroProbe, MGM, CybersIntel)</li>
        </ol>

        <p>
          The MacroProbe v.1.4 will start collectings Windows Defender event
          logs, Windows Firewall event logs and Windows Security Logs for
          detecting Malware, Ransomware, DDOS, Spyware, etc. Cyber Attacks of
          what is known as LogsIntel of the Hosts on the On-line Services.  This
          LogsIntel is combined with our traditional PacketIntel packetflow data
          Communications on the Internet to determine the effects and impacts of
          the Cyber Attack at large on your Internet and On-line Services.  This
          provides the user the Tools for the Big Data in complete monitoring of
          their Cybersecurity on their Internet and On-line Services.  This
          MacroProbe v.1.4 will be available September FY2024.
        </p>
      </div>
      <div className={styles.image}>
        <h3>EXAMPLES OF WINDOWS DEFENDER EVENTS:1</h3>
        <Image src={image_Monitoring} alt="" />
      </div>
    </div>
  );
}

export default Monitoring;
