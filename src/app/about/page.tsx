import React from "react";
import About from "@/components/about/About";
import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";

function Page() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

export default Page;
