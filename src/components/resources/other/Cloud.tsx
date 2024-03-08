import Image from "next/image";
import styles from "./css/cloud.module.css";

// images
import Rectangle_2 from "./img/Rectangle_2.png";

function Cloud() {
  return (
    <div>
      <div className={styles.container} style={{ marginTop: "150px" }}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>Cloud</h2>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.first_img}>
            <Image src={Rectangle_2} alt="" />
            <p>
              NETWORK, SERVICE AND CYBERSECURITY MONITORING SOLUTIONS FOR CLOUD
              USING THE VIRTUAL MACROPROBE + CYBEROBSERVATION APPLIANCE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cloud;
