import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import Confirmation from "@/components/payment/confirmation/Confirmation";
import React from "react";

function Page() {
  return (
    <>
    <Navbar />
    <Confirmation />
    <Footer />
    </>
  );
}

export default Page;
