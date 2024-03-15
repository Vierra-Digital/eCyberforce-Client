"use client";

import styles from "./css/demos.module.css";
import Image from "next/image";
import icone from "./img/icone_watch.svg";

import { motion } from "framer-motion";

function Demos() {
  const cards = [
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Internet Service DDOS Cybersecurity Monitoring" },
    { desc: "IT Wireless Router Cybersecurity Monitoring" },
    { desc: "IT Internet Service Monitoring" },
    { desc: "IT Service Analytics" },
    { desc: "IT Network Analytics" },
    { desc: "IT Unknown Traffic Discovery" },
    { desc: "IT Big Data Analytics" },
    { desc: "IT Service Monitoring" },
  ];

  return (
    <>
      <div className={styles.header}>
        <h6>Our (SaaS) Products</h6>
        <h2>Demo Resources</h2>
      </div>
      <div className={styles.centent}>
        {cards.map((card, i) => (
          <motion.div
            className={styles.card}
            key={i}
            initial={{ x: i % 2 ? -90 : 0, y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1, x: 0 }}
            transition={{
              duration: 1,
            }}
          >
            <h3 className={styles.desc}>{card.desc}</h3>
            <div className={styles.card_watch}>
              <Image src={icone} alt="" width={16} height={18} />
              <h4>Watch Now</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Demos;
