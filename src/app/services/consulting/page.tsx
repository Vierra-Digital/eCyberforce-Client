import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import ServiceTab from "@/components/services/_components/ServiceTab";
import { consultingImg } from "@/components/services/_constants";
import { consultingInfo } from "@/components/services/_constants";
import React from "react";

function Page() {
  return (
    <>
    <Navbar />
    <ServiceTab title="Consulting Service" price={150} imgLink={consultingImg} info={consultingInfo}/>
    <Footer />
    </>
  );
}

export default Page;
