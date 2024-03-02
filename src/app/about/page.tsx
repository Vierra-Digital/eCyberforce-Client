
import About from "@/components/about/About";
import Footer from "@/components/home/utils/Footer";
import { Sora } from "next/font/google";
import React from "react";

const sora = Sora({
  subsets: ["latin"],
  weight: ["500"],
});
function Page() {
  return (
    <>
      <About />
      <Footer />
    </>
  );
}

export default Page;
