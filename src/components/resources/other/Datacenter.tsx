import Image from "next/image";
import styles from "./css/datacenter.module.css";

// images
import Rectangle_4_1 from "./img/Rectangle_4_1.png";
import Rectangle_4_2 from "./img/Rectangle_4_2.png";

function Datacenter() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>Data Center</h2>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.first_img}>
            <Image src={Rectangle_4_1} alt="" />
            <p>
              NETWORK, SERVICE AND CYBERSECURITY MONITORING FOR 2-TIERS DATA
              CENTER USING THE MACROPROBE + CYBEROBSERVATION APPLIANCE.
            </p>
          </div>
          <div className={styles.second_img}>
            <Image src={Rectangle_4_2} alt="" />
            <p>
              NETWORK, SERVICE AND CYBERSECURITY MONITORING FOR 3-TIERS DATA
              CENTER USING THE MACROPROBE + CYBEROBSERVATION APPLIANCE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Datacenter;
