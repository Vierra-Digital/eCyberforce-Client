import Legal from "@/components/about/_components/Legal";
import { returnInfos } from "@/components/about/_constants";
import Footer from "@/components/home/utils/Footer";
import React from "react";

function Page() {
  return(
    <>
    <Legal type="Return Policy" Info={returnInfos}/>
    <Footer />
    </>
  );
}

export default Page;
