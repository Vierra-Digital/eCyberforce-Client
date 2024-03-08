import Image from "next/image";
import styles from "./css/internet.module.css";

// images
import Rectangle_1_1 from "./img/Rectangle_3_2.png";
import Rectangle_1_2 from "./img/Rectangle_1_2.png";

function Internet() {
  return (
    <div>
      <div className={styles.container} style={{ marginTop: "170px" }}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>Internet and Wireless</h2>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.first_img}>
            <Image src={Rectangle_1_1} alt="" />
            <p>
              NETWORK, SERVICE AND CYBERSECURITY MONITORING SOLUTIONS FOR
              WIRELESS USING THE MACROPROBE + CYBEROBSERVATION APPLIANCE.
            </p>
          </div>
          <div className={styles.second_img}>
            <Image src={Rectangle_1_2} alt="" />
            <p>
              NETWORK, SERVICE AND CYBERSECURITY MONITORING SOLUTIONS FOR
              WIRELESS USING THE MACROPROBE + CYBEROBSERVATION APPLIANCE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internet;
