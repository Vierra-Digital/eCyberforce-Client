import styles from "./css/demos.module.css";

import Image from "next/image";
import icone from "./img/icone_watch.svg";
import image from "./img/video-im.png";

function Demos() {
  const cards = [
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
    { desc: "IT Data Center Services DDOS Cybersecurity Monitoring" },
  ];

  return (
    <>
      <div className={styles.header}>
        <h6>Our (SaaS) Products</h6>
        <h2>Demo Resources</h2>
      </div>
      <div className={styles.centent}>
        {cards.map((card, i) => (
          <div className={styles.card} key={i}>
            <h3 className={styles.desc}>{card.desc}</h3>
            <div className={styles.card_watch}>
              <Image src={icone} alt="" width={16} height={18} />
              <h4>Watch Now</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Demos;
