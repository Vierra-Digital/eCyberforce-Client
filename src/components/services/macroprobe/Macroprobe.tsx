import Image from "next/image";
import styles from "./css/macroprobe.module.css";

// images
import Vector from "./img/Vector.svg";
import More from "./img/More.svg";
import Rectangle__1 from "./img/Rectangle__1.png";
import Rectangle__2 from "./img/Rectangle__2.png";

import X from "./img/icone_X.svg";
import Instagram from "./img/icone_Instagram.svg";
import Facebook from "./img/icone_Facebook.svg";

import ac from "./img/radix_ac.svg";
import de from "./img/rediix_de.svg";

import pas from "./img/Pagination.svg";

function Macroprobe() {
  return (
    <div className={styles.container} style={{ marginTop: "170px" }}>
      <div className={styles.header}>
        <h6>Our (SaaS) Products</h6>
        <div className={styles.title}>
          <h2>MacroProbe v.1.3</h2>
        </div>
        <div className={styles.images}>
          <div className={styles.img_one}>
            <Image src={Rectangle__1} className={styles.image_main} alt="" />
            <p>NETWORK PERFORMANCE ANOMALY</p>
          </div>
          <div className={styles.img_two}>
            <Image src={Rectangle__2} alt="" />
            <p>APPLICATION PERFORMANCE ANOMALY</p>
          </div>
        </div>
        <Image src={pas} alt="" width={80} style={{ margin: "40px auto" }} />
      </div>

      <div className={styles.content}>
        <div className={styles.marc}>
          <div className={styles.title}>
            <h3>MacroProbe v.1.3</h3>
          </div>
          <h5>Release date: </h5>
          <p>
            The MacroProbe v1.3 Software Supports on Windows 11, 10 and 8. This
            $50/month Access License Subscription used for Monitoring Networks,
            Online Services and Cybersecurity on Internet and Wireless.
          </p>
          <h5>Product Details</h5>
          <p>
            <span>UPC: </span>645781965591
          </p>
          <p>
            <span>Brand: </span> MacroProbe v1.3 Access License
          </p>
          <p className={styles.text_ma}>
            The MacroProbe v1.3 Software Supports on Windows 11, 10 and 8. This
            Access License (MacroProbe + CyberObservation) provides manual and
            automatic Passive Monitoring of Network, Online Services, and
            Cybersecurity Monitorings on Wireless and Internet.
          </p>
          <h6 className={styles.Features}>Features:</h6>
          <div className={styles.Lists}>
            <div className={styles.list}>
              <h5>
                Machine Learning Anomaly Detection on Big Data Monitored
                Elements:
              </h5>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Network Performance
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Application Performance
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Server Performance{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Internet Service
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Generic Internet Services{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  User Experiences{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  2-Tiers Data Center Services
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  DDOS
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Blacklist
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Botnet
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Remote Hacking
                </li>
              </ul>
            </div>
            <div className={styles.list}>
              <h5>DDOS:</h5>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Synflood Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  UDP Flood Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  ICMP Flood Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Application Flood Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Big DDOS Monitor{" "}
                </li>
              </ul>
            </div>
            <div className={styles.list}>
              <h5>Botnet:</h5>
              <ul>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Synflood Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Malicious URL Botnet Detections
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Malicious Email Botnet Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Malicious Email + URL Phishing{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Detections{" "}
                </li>
                <li>
                  <Image src={Vector} width={10} height={10} alt="" />
                  Malicious Remote Access Detections
                </li>
              </ul>
            </div>
          </div>
          <h4 className={styles.chow_more}>
            <Image src={More} width={10} height={10} alt="" />
            Show more
          </h4>
          <h5>Access License:</h5>
          <p>
            Monitoring The Network Edge for up to 300 flows/minute/interface.
            The Hardware Requirements for the machine to run this Patent Pending
            MacroProbe v1.2.3 Access License are:
          </p>
          <div className={styles.list}>
            <ul>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Supported on Windows 11, 10, and 8{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Minimum 2.0Ghz base CPU Clock{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Minimum 4 CPUs
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Minimum 8 GB of Memory{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Maximum 8 CPUs{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Maximum 16 GB of Memory{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Maximum 4 TB of Disk Space{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                One Wireless Network Interface for Management{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                One Ethernet Network Interface for Promiscuous Monitoring{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                This hardware can be a laptop or desktop or low-end server{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                $50/month Subscription Charge for Access License Software
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                1-Month One Time Purchase or Subscription Purchase{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                This hardware can be a laptop or desktop or low-end server{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Free MacroProbe Software Upgrade and Support with Subscription
                Purchase{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                MacroProbe Software Version 1.3{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                After Purchase, eCyberForce will email you a Link for Digital
                Download the MacroProbe v1.3 Software and Documentations{" "}
              </li>
            </ul>
          </div>
          <h5>Share Product</h5>
          <div className={styles.media}>
            <Image src={X} className="cursor-pointer" alt="" />
            <Image src={Instagram} className="cursor-pointer" alt="" />
            <Image src={Facebook} className="cursor-pointer" alt="" />
          </div>
        </div>
        <div className={styles.subscribe}>
          <h2>
            <span>$150.00</span> in stock
          </h2>
          <button className={styles.one}>
            <Image src={ac} width={20} height={20} alt="" />
            One time Purchase
          </button>
          <button className={styles.sub}>
            <Image src={de} width={20} height={20} alt="" />
            Subscribe
          </button>
          <button className={styles.add}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Macroprobe;
