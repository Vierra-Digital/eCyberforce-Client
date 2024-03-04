import Legal from "@/components/about/_components/Legal";
import { shippingInfos } from "@/components/about/_constants";
import Footer from "@/components/home/utils/Footer";
import React from "react";

function Page() {
  return(
    <>
    <Legal type="Shipping & Payment Info" Info={shippingInfos}/>
    <Footer />
    </>
  );
}

export default Page;
