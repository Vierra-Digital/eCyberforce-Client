import Image from "next/image";
import Frame_img from "./img/Frame_image.jpg";
import styles from "./css/resources.module.css";
import Vector from "./img/Vector.svg";

function Hardware() {
  return (
    <div>
      <div className={styles.Frame_img}>
        <Image src={Frame_img} className={styles.Frame_img} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>
              RECOMMENDED HARDWARE FOR MACROPROBE + MACHINE LEARNING V1.3:
            </h2>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <p>
              Access License: Monitoring The Network Edge up to 300
              flows/minute/inferface
            </p>
            <button>Order Now</button>
            <div className={styles.list}>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Minimum 2.0Ghz CPU Clock
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Minimum 4 CPUs
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Minimum 8 Gbyte of Memory
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 8 CPUs
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 16 Gbyte of Memory
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 4 Terabyte of Disk Space
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  One Wireless Network Interface for Management
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  One Ethernet Network Interface for Promiscuous Monitoring
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  One Ethernet Network Interface for Promiscuous Monitoring
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  This hardware can be a laptop or desktop or low end server
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Bundle with Ubuntu 18.04.2 LTS Linux Desktop OS
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  $50/month Subscription Charge for Access License Software.
                  Customer Provides Dedicated Hardware
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  1-Month One Time Purchase or Subscription Purchase
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Free MacroProbe Software Upgrade and Support with Subscription
                  Purchase
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <p>
              Distribution License: Monitoring The Network Distribution for up
              to 3,000 flows/minute/interface
            </p>
            <button>Order Now</button>
            <div className={styles.list}>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Minimum 2.4Ghz CPU Clock
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 16 CPUs
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 32 Gbyte of Memory
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 4 Ethernet Interfaces for Promiscuous Monitoring
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 8 Terabyte of Disk Space
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  This hardware can be a mid-size server
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Bundle with Centos 7.6 Linux Server OS
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  $200/month Subscription Charge for Distribution License
                  Software. Customer Provides Dedicated Hardware
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  1-Month One Time Purchase or Subscription Purchase
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Free MacroProbe Software Upgrade and Support with Subscription
                  Purchase
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <p style={{ paddingBottom: "25px" }}>
              Core License: Monitoring Core for above 3,000
              flows/minute/interface
            </p>
            <button>Order Now</button>
            <div className={styles.list}>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Minimum 2.4Ghz CPU Clock
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  No Limit on the number of CPUs
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  No Limit on Memory
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  No Limit on Disk Space
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Maximum 4 Ethernet Interfaces for Promiscuous Monitoring
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  This hardware can be a high-end server
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Bundle with Centor 7.6 Linux Server OS
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  $400/month Core License Software. Customer Provides Dedicated
                  Hardware
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  1-Month One Time Purchase or Subscription Purchase
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Free MacroProbe Software Upgrade and Support with Subscription
                  Purchase{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hardware;
