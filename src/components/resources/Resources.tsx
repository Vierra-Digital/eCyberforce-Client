import Image from "next/image";
import Frame_img from "./img/Frame_image.jpg";
import styles from "./css/resources.module.css";
import Vector from "./img/Vector.svg";

function Resources() {
  return (
    <div>
      <div className={styles.Frame_img}>
        <Image src={Frame_img} className={styles.Frame_img} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>MACROPROBE V1.3 SOFTWARE IS NOW AVAILABLE FOR WINDOWS:</h2>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2 className={styles.price}>$50</h2>
            <p>Access License: Supports on Windows 11, 10 and 8</p>
            <button>Order Now</button>
            <div className={styles.list}>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Supports Windows 11, 10 and 8
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Install on Windows Laptop or Desktop
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Please see &rdquo;Hardware Support & Price&rdquo; tab for more
                  detail
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Deploy and Monitor Wireless and Internet Access{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.price}>$200</h2>
            <p>
              Distribution License: Supports on Windows Server 2019 and 2016
            </p>
            <button>Order Now</button>
            <div className={styles.list}>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Deploy and Monitor Wireless and Internet Access
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Please see &rdquo;Hardware Support & Price&rdquo; tab for more
                  detail{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Deploy and Monitor Internet and Data Center Distributions
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.price}>$400</h2>
            <p>Core License: Supports on Windows 2019 and 2016</p>
            <button>Order Now</button>
            <div className={styles.list}>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Supports Windows Server 2019 and 2016{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Please see &rdquo;Hardware Support & Price&rdquo; tab on this
                  site for more detail
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Deploy and Monitor the Data Center Cores{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
