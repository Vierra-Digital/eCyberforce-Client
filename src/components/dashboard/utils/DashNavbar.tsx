"use client";

import { motion } from "framer-motion";
import styles from "./css/DashNavbar.module.css";
import Image from "next/image";
import Logo from "./img/Logo.png";
import Size from "./img/Vector.png";
import Profile from "./img/Account.png";
import { Archivo } from "next/font/google";
import { useState } from "react";
import Svgcomp from "./img/Svgcomp";
import { useRouter } from "next/navigation";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function DashboardNavbar({
  userid,
  email,
  name,
}: {
  userid: any;
  email: any;
  name: any;
}) {
  const button = {
    account: [
      {
        url: "Profile",
        redirect: "profile",
      },
      {
        url: "Order History",
        redirect: "history",
      },
      {
        url: "Downloads",
        redirect: "downloads",
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
  const router = useRouter();
  const [hover, setHover] = useState(false);
  const [ind, setInd] = useState(0);
  function hoverer(index: number, hover: any) {
    setInd(index);
    setHover(hover);
  }
  const [nav, setNav] = useState(false);

  const variants = {
    open: { width: "240px" },
    closed: { width: "90px" },
  };

  const navButtons = {
    width: nav ? "0px" : "max-content",
    overflow: nav ? "hidden" : "show",
    PointerEvent: nav ? "none" : "auto",
    flexShrink: "0",
    transition: "width 0.3s ease",
  };

  const text = {
    display: nav ? "none" : "block",
  };

  const svg = {
    marginLeft: nav ? "5px" : "0px",
  };

  return (
    <motion.div
      className={styles.Container}
      animate={nav ? "closed" : "open"}
      variants={variants}
      initial={{ width: "240px" }}
    >
      <div className={styles.Top}>
        <Image src={Logo} className={styles.LogoImage} alt={"Logo"} />
        <div className={styles.ButtonWidth} onClick={() => setNav(!nav)}>
          <Image src={Size} className={styles.SizeImage} alt={""} />
        </div>
      </div>
      <div className={styles.Account}>
        <Image src={Profile} alt={""} className={styles.AccountPic} />
        <div className={styles.AccountInfo} style={navButtons}>
          <div className={styles.AccountName}>
            <p className={archivo.className}>{name}</p>
          </div>
          <div className={styles.AccountEmail}>
            <p className={archivo.className}>{email}</p>
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
              onClick={() =>
                router.push(`/dashboard/${userid}/${bop.redirect}`)
              }
            >
              <div style={svg}>
                <Svgcomp
                  type={`${bop.url}`}
                  fill={hover && ind == index ? "#9538fe" : "#000000"}
                />
              </div>
              <div
                className={styles.ButtonUrl}
                style={{ color: hover && ind == index ? "#9538fe" : "#000000" }}
              >
                <p className={archivo.className} style={text}>
                  {bop.url}
                </p>
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
              <div style={svg}>
                <Svgcomp
                  type={`${bop.url}`}
                  fill={hover && ind == index + 100 ? "#9538fe" : "#000000"}
                />
              </div>
              <div
                className={styles.ButtonUrl}
                style={{
                  color: hover && ind == index + 100 ? "#9538fe" : "#000000",
                }}
              >
                <p className={archivo.className} style={text}>
                  {bop.url}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardNavbar;
