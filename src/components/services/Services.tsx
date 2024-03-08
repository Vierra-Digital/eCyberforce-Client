import styles from "./css/services.module.css";
import Image from "next/image";
import image_removebg from "./img/removebg.png";
const cards = [
  {
    title: "MacroProbe v.1.3",
    p: "The MacroProbe v1.3 Software Supports on Windows 11, 10 and 8. This $50/month Access License Subscription used for Monitoring Networks, Online Services and Cybersecurity on Internet and Wireless.",
    button_title_one: "Product Details",
    button_title_two: "Order Now",
  },
  {
    title: "MacroProbe Global Manager (MGM) v1.3",
    p: "The MacroProbe Global Manager v1.3 that can manage multiple MacroProbes from the Access License MacroProbe to the Distribution License MacroProbe to the Core License MacroProbe.",
    button_title_one: "Product Details",
    button_title_two: "Order Now",
  },
  {
    title: "MacroProbeDL v1.4",
    p: "Imagine you are in IT receiving end-user complaints about your Networks or Applications or Websites or Online Services or Cyber Securities, where do you go from here.",
    button_title_one: "Product Details",
    button_title_two: "Order Now",
  },
  {
    title: "Consulting Service",
    p: "We provide Consulting Service for how to use the MacroProbe to monitor the Network, Online Services and Cybersecurity for Cyberspace Management deploy on Wireless, Internet, Cloud and Data Center.",
    button_title_one: "Product Details",
    button_title_two: "Order Now",
  },
  {
    title: "The MacroProbe v1.3",
    p: "This Core License provides monitoring Networks, Online Services and Cybersecurity on the Internet and Data Center cores.",
    button_title_one: "Product Details",
    button_title_two: "Order Now",
  },
];

function Services() {
  return (
    <div>
      <div className={styles.container} style={{ marginTop: "170px" }}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>Unleashing Unrivaled Protection</h2>
          </div>
          <div className={styles.text}>
            <p>
              Explore the Pinnacle of Cybersecurity Excellence with Our Featured
              Product&quot;
            </p>
          </div>
        </div>

        <div className={styles.cards}>
          {cards.map((c, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.img}>
                <Image src={image_removebg} alt="" />
              </div>
              <div className={styles.header_text}>
                <h2>{c.title}</h2>
                <p>{c.p}</p>
              </div>

              <div className={styles.buttons}>
                <button className={styles.button_first}>
                  {c.button_title_one}
                </button>
                <button className={styles.button_second}>
                  {c.button_title_two}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
