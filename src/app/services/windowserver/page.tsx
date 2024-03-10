import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import ServiceTab from "@/components/services/_components/ServiceTab";
import { windowserverImg } from "@/components/services/_constants";
import { winserviceInfo } from "@/components/services/_constants";
import React from "react";

function Page() {
  return (
    <>
      <Navbar />
      <ServiceTab
        title="The MacroProbe v1.3 Windows Server 2019 and 2016. "
        price={200}
        imgLink={windowserverImg}
        info={winserviceInfo}
      />
      <Footer />
    </>
  );
}

export default Page;
