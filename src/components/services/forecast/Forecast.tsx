import Image from "next/image";
import Vector from "./img/Vector.svg";
import styles from "./css/forecast.module.css";
import Frame_img from "./img/Frame_img.png";

function Forecast() {
  return (
    <>
      <div className={styles.Frame_img}>
        <Image src={Frame_img} className={styles.Frame_img} alt="" />
      </div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h6>Our (SaaS) Products</h6>
          <div className={styles.title}>
            <h2>MacroProbeDL v1.4 in January FY2024.</h2>
          </div>

          <p>DEEP LEARNING FORECAST WILL BE AVAILABLE ON JANUARY FY2024</p>

          <button className={styles.button}>Coming Soon</button>
        </div>
        <div className={styles.content}>
          <p>
            Just like Forecasting Stock Price and the Weather, our MacroProbe
            v.1.4 Comprehensive Data Collections allow the MacroProbeDL v.1.4 in
            complementary to perform Deep Learning Forecast on the following Big
            Data Monitor Elements such as:
          </p>
          <div className={styles.list}>
            <ul>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Link Capacity Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Application Capacity Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Server Capacity Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Internet Service Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Online Services Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                User Experiences Forecast
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                2-Tiers Data Center Services{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                DDOS Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Blacklist Forecast{" "}
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Botnet Forecast
              </li>
              <li>
                <Image src={Vector} width={10} height={10} alt="" />
                Remote Hacking Forecast{" "}
              </li>
            </ul>
          </div>
          <p>
            We hope that the MacroProbeDL v1.4 will provide the tools that
            organizations need to proactively monitor, plan and forecast
            appropriately to perform Capacity Planning of their Infrastructure.
          </p>
        </div>
      </div>
    </>
  );
}

export default Forecast;
