"use client";
import { motion } from "framer-motion";
import styles from "./css/Mobilenav.module.css";
import Image from "next/image";
import { useState } from "react";
import { Archivo } from "next/font/google";
import Profile from "./img/Account.png";
import Svgcomp from "./img/Svgcomp";
import { useRouter } from "next/navigation";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

function Mobilenav({ userid }: { userid: any }) {
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
  const [drop, setDrop] = useState(false);
  const variant = {
    open: {
      height: "max-content",
      border: "1px solid #ededf8",
      boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0.1)",
      paddingBottom: "40px",
    },
    closed: {
      height: 0,
      border: "1px solid #ffffff00",
      boxShadow: "0px 10px 10px 10px rgba(0, 0, 0, 0)",
      paddingBottom: "0px",
    },
  };
  const [hover, setHover] = useState(false);
  const [ind, setInd] = useState(0);
  function hoverer(index: number, hover: any) {
    setInd(index);
    setHover(hover);
  }
  return (
    <div className={styles.Container}>
      <div className={styles.Upper}>
        <div
          className={styles.Ham}
          style={{
            background: drop ? "#683AF1" : "#ffffff",
            transition: "background 0.3 ease-in-out",
          }}
          onClick={() => setDrop(!drop)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.4844 4.6875H3.51562C3.38672 4.6875 3.28125 4.79297 3.28125 4.92188V6.79688C3.28125 6.92578 3.38672 7.03125 3.51562 7.03125H26.4844C26.6133 7.03125 26.7188 6.92578 26.7188 6.79688V4.92188C26.7188 4.79297 26.6133 4.6875 26.4844 4.6875ZM26.4844 22.9688H3.51562C3.38672 22.9688 3.28125 23.0742 3.28125 23.2031V25.0781C3.28125 25.207 3.38672 25.3125 3.51562 25.3125H26.4844C26.6133 25.3125 26.7188 25.207 26.7188 25.0781V23.2031C26.7188 23.0742 26.6133 22.9688 26.4844 22.9688ZM26.4844 13.8281H3.51562C3.38672 13.8281 3.28125 13.9336 3.28125 14.0625V15.9375C3.28125 16.0664 3.38672 16.1719 3.51562 16.1719H26.4844C26.6133 16.1719 26.7188 16.0664 26.7188 15.9375V14.0625C26.7188 13.9336 26.6133 13.8281 26.4844 13.8281Z"
              style={{
                transition: "fill 0.3s ease-in-out",
                fill: drop ? "#ffffff" : "#5C35CB70",
              }}
            />
          </svg>
        </div>
        <div className={styles.Logo}>
          <Image src="/logo.svg" alt="logo" width={234} height={46} />
        </div>
      </div>
      <motion.div
        className={styles.Dropdown}
        variants={variant}
        animate={drop ? "open" : "closed"}
        initial={{
          height: 0,
          boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)",
        }}
      >
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
                onClick={() =>
                  router.push(`/dashboard/${userid}/${bop.redirect}`)
                }
              >
                <div>
                  <Svgcomp
                    type={`${bop.url}`}
                    fill={hover && ind == index ? "#9538fe" : "#000000"}
                  />
                </div>
                <div
                  className={styles.ButtonUrl}
                  style={{
                    color: hover && ind == index ? "#9538fe" : "#000000",
                  }}
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
                <div>
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
                  <p className={archivo.className}>{bop.url}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Mobilenav;
