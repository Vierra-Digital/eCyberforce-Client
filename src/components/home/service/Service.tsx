"use client";

import Image from "next/image";
import Vector from "./img/Vector.svg";
import Cyber from "./img/cyber-security.png";
import Icon from "./img/Icon.svg";
import styles from "./css/Service.module.css";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function Service() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      animate={{ y: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
      initial={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={styles.container}
    >
      <div className={styles.header}>
        <h6>Our Service</h6>
        <div className={styles.title}>
          <h2>The MacroProbe software-as-a-Service (SaaS)</h2>
        </div>
        <p>
          Experience the power of Macroprobe v1.3, a cutting-edge Software as a
          Service (SaaS) platform meticulously crafted for unrivaled excellence
          in machine learning anomaly detection, wireless and internet access
          monitoring, and comprehensive data center/cloud oversight.
        </p>
      </div>
      <div className={styles.Sevice_container}>
        <div className={styles.Sevice}>
          <div>
            <h2>Machine Learning Anomaly Detections</h2>
          </div>
          <div className={styles.list}>
            <h3>Wireless/Internet Access Monitoring Services</h3>
            <ul>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Troubleshooting Network, Online Services
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Cybersecurity using Big Data{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                User-Experience Monitoring{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Cybersecurity Monitoring (DDOS, Botnet and{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Blacklist Monitoring){" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Network Capacity Planning for The Internet{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Service Analysis{" "}
              </li>
            </ul>
          </div>
          <div>
            {" "}
            <h3>Data Center/Cloud Monitoring Services</h3>
          </div>
          <div>
            {" "}
            <h3>Deep Learning Forecast</h3>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={Cyber} alt="" className={styles.cyber} />
        </div>
      </div>
      <div className={styles.more}>
        <h3>
          Learn More <Image src={Icon} width={10} height={10} alt="" />
        </h3>
      </div>
    </motion.div>
  );
}

export default Service;
