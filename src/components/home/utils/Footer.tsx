import Image from "next/image";
import styles from "./css/Footer.module.css";
import { Archivo, Sora } from "next/font/google";
import Link from "next/link";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400"],
});
function Footer() {
  return (
    <div className={styles.Container}>
      <div className="flex">
        <div className="flex items-end">
          <Image
            src="/bug.png"
            alt="bug"
            width={316}
            height={100}
            className="w-[114px] sm:w-[240px] lg:w-[316px] mt-[120px]"
          />
        </div>
        <div className="flex items-center justify-center flex-col text-center font-medium gap-6 lg:w-[700px] w-[500px] sm:w-[600px] lg:ml-24 sm:ml-6 ml-2 mt-10">
          <h1
            className={`lg:text-[32px] text-[24px] leading-[42px] ${sora.className}`}
          >
            Get our cybersecurity solution now and ensure the protection of your
            digital assets.
          </h1>
          <p className={`text-[16px] leading-[26px] ${sora.className}`}>
            Don&rsquo;t wait any longer, download our cyber solution today and
            ensure your online security.
          </p>
          <button className={styles.button}>Download Now</button>
        </div>
        <div className="lg:mt-[-150px] mt-[-24px] w-fit">
          <Image
            src="/drone.png"
            alt="bug"
            width={500}
            height={100}
            className="w-[150px] sm:w-[300px] lg:w-[413px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="lg:flex sm:grid grid-cols-2 block text-center sm:text-start gap-[60px] mt-12 lg:mt-20 ml-[-10px] lg:ml-0">
          {FooterLinks.map((links, index) => (
            <div key={index} className="flex flex-col gap-[16px]">
              <h2
                className={`text-[16px] leading-[24px] font-semibold mt-10 lg:mt-0 ${sora.className}`}
              >
                {links.topic}
              </h2>
              {links.links.map((link, index) => (
                <ul key={index} className="w-[170px]">
                  <Link href={link.url}>
                    <p className="text-wrap">{link.text}</p>
                  </Link>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center p-20 mt-10">
        <div
          className={`lg:flex block text-center gap-[42px] text-[14px] font-normal ${archivo.className}`}
        >
          <p className="mb-2 lg:mb-0">
            Copyright 2023 Alexersion LTD. All rights reserved.{" "}
          </p>
          <p>
            All code practices follow the MIT public developer license. All
            assets and materials registered in Cambridge Massachusetts
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

const FooterLinks = [
  {
    topic: "Company",
    links: [
      { text: "About", url: "/", key: "About" },
      { text: "Contact us", url: "/", key: "Contact us" },
      { text: "Releases", url: "/", key: "Releases" },
    ],
  },
  {
    topic: "Products",
    links: [
      { text: "MacroProbe v1.3", url: "/", key: "MacroProbe v1.3" },
      { text: "Global Manager v1.3", url: "/", key: "Global Manager v1.3" },
      { text: "Consulting Service", url: "/", key: "Consulting Service" },
      { text: "Consulting Service", url: "/", key: "Consulting Service" },
      {
        text: "MacroProbe v1.3(Core License)",
        url: "/",
        key: "MacroProbe v1.3(Core License)",
      },
      {
        text: "MacroProbe v1.3(Distribution License)",
        url: "/",
        key: "MacroProbe v1.3(Distribution License)",
      },
    ],
  },
  {
    topic: "Resources",
    links: [
      { text: "Windows Support", url: "/", key: "Windows Support" },
      { text: "Recommended Hardware", url: "/", key: "Recommended Hardware" },
      { text: "Cloud", url: "/", key: "Cloud" },
      { text: "Data Center", url: "/", key: "Data Center" },
      { text: "Internet and Wireless", url: "/", key: "Internet and Wireless" },
    ],
  },
  {
    topic: "Legal",
    links: [
      { text: "Legal Notice", url: "/", key: "Legal Notice" },
      { text: "Privacy Policy", url: "/", key: "Privacy Policy" },
      { text: "Terms of Use", url: "/", key: "Terms of Use" },
    ],
  },
];
