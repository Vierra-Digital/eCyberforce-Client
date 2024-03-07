import Image from "next/image";
import styles from "./css/sandbox.module.css";

// images
import Rectangle_3_1 from "./img/Rectangle_3_1.png";
import Rectangle_3_2 from "./img/Rectangle_3_2.png";

function Sandbox() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>MACROPROBE V1.3 SANDBOX</h2>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.first_img}>
            <Image src={Rectangle_3_1} alt="" />
            <button>Load Sandbox</button>
            <p>
              This is real Wireless Traffic. Try out the Machine Learning
              Anomaly Detection and Evidences. The Network Deployment is similar
              shown below for Wireless Deployment. Note that HelpDesk user role
              can only Monitor but are not allowed to Configure. Enjoy.
            </p>
          </div>
          <div className={styles.second_img}>
            <Image src={Rectangle_3_2} alt="" />
            <p>WIRELESS DEPLOYMENT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sandbox;
