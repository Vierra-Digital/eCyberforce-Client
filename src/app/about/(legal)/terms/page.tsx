import Legal from "@/components/about/_components/Legal";
import { termsInfos } from "@/components/about/_constants";
import Footer from "@/components/home/utils/Footer";
import React from "react";

function Page() {
  return(
    <>
    <Legal type="Terms and conditions" Info={termsInfos}/>
    <Footer />
    </>
  );
}

export default Page;
