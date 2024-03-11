"use client";

import styles from "./css/Products.module.css";
import Image from "next/image";
import image_removebg from "./img/removebg.png";
import Icon from "./img/Icon.svg";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function Products() {
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
        <h6>Our Products</h6>
        <div className={styles.title}>
          <h2>&quot;Unleashing Unrivaled Protection</h2>
        </div>
        <div className={styles.text}>
          <p>
            Explore the Pinnacle of Cybersecurity Excellence with Our Featured
            Product&quot;
          </p>
        </div>
      </div>
      <div className={styles.frame_one}>
        <div className={styles.image}>
          <Image src={image_removebg} alt="" />
        </div>
        <div className={styles.section}>
          <h2>MacroProbe v.1.3</h2>
          <p>
            Experience the power of Macroprobe v1.3, a cutting-edge Software as
            a Service (SaaS) platform meticulously crafted for unrivaled
            excellence in machine learning anomaly detection, wireless and
            internet access monitoring, and comprehensive data center/cloud
            oversight.
          </p>
          <button>
            {" "}
            <h3>Start a free trial</h3>
          </button>
        </div>
      </div>
      <div className={styles.two_sections}>
        <div className={styles.section_one}>
          <div className={styles.container_section}>
            <h2>MacroProbe Global Manager (MGM) v1.3</h2>
            <p>
              The MacroProbe Global Manager v1.3 that can manage multiple
              MacroProbes from the Access License MacroProbe to the Distribution
              License MacroProbe to the Core License MacroProbe. It provides a
              Central Point of Management and Monitoring and Global Access,
              Global Data Aggregation and Big Data Monitoring for the
              MacroProbes it manages.
            </p>
            <button>
              <h3>Start a free trial</h3>
            </button>
          </div>
        </div>
        <div className={styles.section_two}>
          <h2>MacroProbeDL v1.4</h2>
          <p>
            Imagine you are in IT receiving end-user complaints about your
            Networks or Applications or Websites or Online Services or Cyber
            Securities, where do you go from here. While most of these User
            Complaints are pro-actively and automatically detected by
            eCyberForce MacroProbeML v1.3 Machine Learning Anomaly Detections
            that we automatically run the MacroProbeDL v.1.4 Deep Learning Root
            Cause Analysis to come up with the correct Diagnosis for each
            Anomaly Detected....that is the diagnosis for each of the User
            Complaints detected.
          </p>
          <button>
            <h3>Start a free trial</h3>
          </button>
        </div>
      </div>
      <div className={styles.more}>
        <h3>
          View All Products <Image src={Icon} width={10} height={10} alt="" />
        </h3>
      </div>
    </motion.div>
  );
}

export default Products;
