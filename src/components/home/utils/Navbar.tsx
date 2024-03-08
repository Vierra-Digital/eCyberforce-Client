"use client";
import Image from "next/image";
import styles from "./css/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import Sidebar from "./_components/Sidebar";
import { Sora } from "next/font/google";
import { useScroll } from "./hook/usescroll";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500"],
});
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const scroll = useScroll();
  return (
    <div
      className={`bg-transparent pt-8 fixed top-0 left-0 w-full backdrop-blur-[8px] z-[9999] ${
        scroll ? "shadow-md" : ""
      }`}
    >
      {clicked && <Sidebar onClick={handleClick} isclicked={clicked} />}
      <div className="2sm:px-[64px] px-[32px] gap-[24px] flex flex-col">
        <div className="flex items-center justify-between px-[16px]">
          <button className="flex 2sm:hidden" onClick={handleClick}>
            <Image src="/ham.svg" alt="ham" width={24} height={24} />
          </button>
          <div className="w-full 2sm:w-fit flex items-center justify-center">
            <Image src="/logo.svg" alt="logo" width={234} height={46} />
          </div>
          <div className="2sm:flex gap-[20px] items-center hidden">
            <Link href="/support" className="flex gap-1 items-center">
              <p className={`text-[14px] tracking-wide ${sora.className}`}>
                Support
              </p>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.66667L4.375 5L7.5 1.66667"
                  stroke="#18181B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <button className={styles.button}>Download</button>
            <div className="flex items-center gap-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4375 0.4375C8.54622 0.4375 6.69741 0.998331 5.12486 2.04907C3.55232 3.09981 2.32667 4.59327 1.60291 6.34059C0.879143 8.08791 0.689774 10.0106 1.05875 11.8656C1.42772 13.7205 2.33846 15.4244 3.6758 16.7617C5.01313 18.099 6.71701 19.0098 8.57195 19.3788C10.4269 19.7477 12.3496 19.5584 14.0969 18.8346C15.8442 18.1108 17.3377 16.8852 18.3884 15.3126C19.4392 13.7401 20 11.8913 20 10C19.997 7.46478 18.9886 5.03425 17.1959 3.24158C15.4033 1.44891 12.9727 0.440477 10.4375 0.4375ZM18.0847 6.4375H14.3178C13.9079 4.73724 13.1603 3.13677 12.1194 1.73125C13.4116 1.9968 14.6239 2.5606 15.6596 3.3777C16.6953 4.19479 17.5257 5.24258 18.0847 6.4375ZM18.875 10C18.8756 10.8257 18.7547 11.647 18.5159 12.4375H14.5494C14.8169 10.8235 14.8169 9.17649 14.5494 7.5625H18.5159C18.7547 8.35297 18.8756 9.17428 18.875 10ZM10.4375 18.4375C10.4141 18.4376 10.391 18.4328 10.3696 18.4232C10.3483 18.4137 10.3292 18.3997 10.3138 18.3822C9.10625 17.0819 8.21938 15.4122 7.71875 13.5625H13.1563C12.6556 15.4122 11.7688 17.0819 10.5613 18.3822C10.5458 18.3997 10.5267 18.4137 10.5054 18.4232C10.484 18.4328 10.4609 18.4376 10.4375 18.4375ZM7.46657 12.4375C7.17783 10.8253 7.17783 9.17467 7.46657 7.5625H13.4084C13.6972 9.17467 13.6972 10.8253 13.4084 12.4375H7.46657ZM2 10C1.99937 9.17428 2.12036 8.35297 2.35907 7.5625H6.32563C6.05811 9.17649 6.05811 10.8235 6.32563 12.4375H2.35907C2.12036 11.647 1.99937 10.8257 2 10ZM10.4375 1.5625C10.4609 1.56237 10.484 1.56724 10.5054 1.57678C10.5267 1.58632 10.5458 1.60031 10.5613 1.61781C11.7688 2.91813 12.6556 4.58781 13.1563 6.4375H7.71875C8.21938 4.58781 9.10625 2.91813 10.3138 1.61781C10.3292 1.60031 10.3483 1.58632 10.3696 1.57678C10.391 1.56724 10.4141 1.56237 10.4375 1.5625ZM8.75563 1.73125C7.71474 3.13677 6.96711 4.73724 6.55719 6.4375H2.79032C3.3493 5.24258 4.17975 4.19479 5.21545 3.3777C6.25114 2.5606 7.46343 1.9968 8.75563 1.73125ZM2.79032 13.5625H6.55719C6.96711 15.2628 7.71474 16.8632 8.75563 18.2687C7.46343 18.0032 6.25114 17.4394 5.21545 16.6223C4.17975 15.8052 3.3493 14.7574 2.79032 13.5625ZM12.1194 18.2687C13.1603 16.8632 13.9079 15.2628 14.3178 13.5625H18.0847C17.5257 14.7574 16.6953 15.8052 15.6596 16.6223C14.6239 17.4394 13.4116 18.0032 12.1194 18.2687Z"
                  fill="#111111"
                />
              </svg>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.375 1.66667L4.5 5L7.625 1.66667"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3109 15.4062C16.2398 13.5262 14.5672 12.0614 12.5624 11.2476C13.5594 10.4999 14.2958 9.45742 14.6674 8.26793C15.0389 7.07844 15.0268 5.80218 14.6327 4.61996C14.2387 3.43773 13.4826 2.40946 12.4717 1.68081C11.4607 0.952155 10.2461 0.560059 8.99994 0.560059C7.75377 0.560059 6.53918 0.952155 5.52823 1.68081C4.51727 2.40946 3.76121 3.43773 3.36714 4.61996C2.97306 5.80218 2.96095 7.07844 3.33252 8.26793C3.70409 9.45742 4.4405 10.4999 5.43744 11.2476C3.43269 12.0614 1.76013 13.5262 0.689006 15.4062C0.622635 15.5129 0.578399 15.6319 0.558927 15.756C0.539456 15.8802 0.545148 16.007 0.575663 16.1289C0.606178 16.2508 0.660894 16.3653 0.736558 16.4657C0.812223 16.566 0.907291 16.6501 1.01611 16.713C1.12493 16.7759 1.24528 16.8162 1.37 16.8317C1.49473 16.8471 1.62128 16.8373 1.74215 16.8028C1.86301 16.7684 1.9757 16.71 2.07354 16.6311C2.17138 16.5522 2.25236 16.4545 2.31166 16.3437C3.72729 13.8968 6.22729 12.4374 8.99994 12.4374C11.7726 12.4374 14.2726 13.8976 15.6882 16.3437C15.8168 16.5503 16.0206 16.6989 16.2567 16.758C16.4928 16.8171 16.7426 16.7821 16.9533 16.6603C17.1641 16.5386 17.3192 16.3396 17.3859 16.1056C17.4526 15.8715 17.4257 15.6207 17.3109 15.4062ZM4.93744 6.4999C4.93744 5.69642 5.1757 4.91097 5.6221 4.2429C6.06849 3.57482 6.70297 3.05412 7.44529 2.74664C8.18762 2.43916 9.00445 2.35871 9.7925 2.51546C10.5805 2.67221 11.3044 3.05913 11.8726 3.62728C12.4407 4.19543 12.8276 4.9193 12.9844 5.70735C13.1411 6.4954 13.0607 7.31223 12.7532 8.05455C12.4457 8.79688 11.925 9.43135 11.2569 9.87775C10.5889 10.3241 9.80343 10.5624 8.99994 10.5624C7.92288 10.5612 6.89029 10.1328 6.12869 9.37115C5.36709 8.60956 4.93868 7.57696 4.93744 6.4999Z"
                  fill="#111111"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="2sm:flex items-center justify-center hidden">
          <div className="flex items-center gap-[30px]">
            {NavbarLinks.map((link) => (
              <div key={link.key} className="flex items-center gap-1 pb-[10px]">
                <Link
                  href={link.url}
                  className={`text-[16px] tracking-wide ${sora.className}`}
                >
                  {link.text}
                </Link>
                {link.img && (
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.375 1.66667L4.5 5L7.625 1.66667"
                      stroke="#18181B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const NavbarLinks = [
  { text: "Home", url: "/", key: "Home" },
  {
    text: "Products & Services",
    url: "/products",
    key: "product",
    img: "true",
  },
  { text: "Releases", url: "/releases", key: "releases" },
  { text: "Resources", url: "/resources", key: "resources", img: "true" },
];
