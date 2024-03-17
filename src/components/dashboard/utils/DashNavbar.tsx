"use client";

import { motion } from "framer-motion";
import styles from "./DashNavbar.module.css";
import Image from "next/image";
import Logo from "./img/Logo.png";
import Size from "./img/Vector.png";
import Profile from "./img/Account.png";
import { Archivo, Sora } from "next/font/google";
import { SetStateAction, useState } from "react";
import Svgcomp from "./img/Svgcomp";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function DashboardNavbar() {
  const button = {
    account: [
      {
        url: "Profile",
      },
      {
        url: "Order History",
      },
      {
        url: "Downloads",
      },
    ],
    problem: [
      {
        url: "Support",
      },
      {
        url: "FAQ",
      },
    ],
  };
  const [hover, setHover] = useState(false);
  const [ind, setInd] = useState(0);
  function hoverer(index: number, hover: any) {
    setInd(index);
    setHover(hover);
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Top}>
        <Image src={Logo} className={styles.LogoImage} alt={"Logo"} />
        <div className={styles.ButtonWidth}>
          <Image src={Size} className={styles.SizeImage} alt={""} />
        </div>
      </div>
      <div className={styles.Account}>
        <Image src={Profile} alt={""} className={styles.AccountPic} />
        <div className={styles.AccountInfo}>
          <div className={styles.AccountName}>
            <p className={archivo.className}>Last Name</p>
          </div>
          <div className={styles.AccountEmail}>
            <p className={archivo.className}>Somebody@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.Column}>
        <div className={styles.ColumnName}>ACCOUNT</div>
        <div className={styles.ButtonsContainer}>
          {button.account.map((bop, index) => (
            <div
              className={styles.Button}
              key={index}
              onMouseEnter={() => hoverer(index, true)}
              onMouseLeave={() => hoverer(index, false)}
            >
              <Svgcomp
                type={`${bop.url}`}
                fill={hover && ind == index ? "#9538fe" : "#000000"}
              />
              <div
                className={styles.ButtonUrl}
                style={{ color: hover && ind == index ? "#9538fe" : "#000000" }}
              >
                <p className={archivo.className}>{bop.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.Column}>
        <div className={styles.ColumnName}>HAVE A PROBLEM</div>
        <div className={styles.ButtonsContainer}>
          {button.problem.map((bop, index) => (
            <div
              className={styles.Button}
              key={index + 100}
              onMouseEnter={() => hoverer(index + 100, true)}
              onMouseLeave={() => hoverer(index + 100, false)}
            >
              <Svgcomp
                type={`${bop.url}`}
                fill={hover && ind == index + 100 ? "#9538fe" : "#000000"}
              />
              <div
                className={styles.ButtonUrl}
                style={{
                  color: hover && ind == index + 100 ? "#9538fe" : "#000000",
                }}
              >
                <p className={archivo.className}>{bop.url}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
