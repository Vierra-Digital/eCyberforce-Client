import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import Releases from "@/components/releases/Releases";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <>
      <Navbar />
      <Releases />
      <Footer />
    </>
  );
}

export default Page;
