import React from "react";
import { Sora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "../css/Navbar.module.css"
import {motion} from "framer-motion"

type SideProps = {
  onClick: () => void;
  isclicked: boolean;
};

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "400"],
});

export default function Sidebar({ onClick , isclicked}: SideProps) {
  return (
    <motion.div 
    className="fixed top-0 left-0 h-[100vh] w-full 2sm:hidden flex flex-col items-start bg-white z-[999999]"
    initial={{ x: "-100%" }}
    animate={{ x: isclicked ? 0 : "-100%" }}
    transition={{ duration: 0.2 }}
    >
      <div className="flex gap-2 items-center justify-between px-4 py-4 2sm:hidden w-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={234}
            height={46}
          />
        </Link>
        <button onClick={onClick}>
          <span className="text-5xl font-light text-[rgb(217,219,224)]">
            &times;
          </span>
        </button>
      </div>

      <div className="flex flex-col mt-12 2sm:hidden w-full">
        <div className="flex flex-col divide-y divide-solid">
          {SideBarUrl.map((item, index) => {
            return (
              <Link key={index} href={item.url} className="flex my-1 mx-4">
                <div className="flex items-center justify-center text-center">
                  <h2
                    className={`text-[rgb(63,65,70)] font-bold text-lg mt-4 ${sora.className}`}
                  >
                    {item.text}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <h2
            className={`text-[rgb(63,65,70)] font-bold text-xl mx-4 my-2 py-4 border-y ${sora.className}`}
          >
            Login
          </h2>
        </div>
        <button className={styles.sidebutton}>
          <p className={`${sora.className}`}>Create An Account</p>
        </button>
      </div>
    </motion.div>
  );
}

const SideBarUrl = [
  {
    url: "/",
    text: "Home",
    icon: "",
  },
  {
    url: "/products",
    text: "Products & Services",
    icon: "",
  },
  {
    url: "/releases",
    text: "Releases",
    icon: "",
  },
  {
    url: "/resources",
    text: "Recources",
    icon: "",
  },
];
