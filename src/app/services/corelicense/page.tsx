import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import ServiceTab from "@/components/services/_components/ServiceTab";
import { corelicenseImg } from "@/components/services/_constants";
import { licenceInfo } from "@/components/services/_constants";
import React from "react";

function Page() {
  return (
    <>
    <Navbar />
    <ServiceTab title="The MacroProbe v1.3 [Core License]" price={400} imgLink={corelicenseImg} info={licenceInfo} />
    <Footer />
    </>
  );
}

export default Page;
