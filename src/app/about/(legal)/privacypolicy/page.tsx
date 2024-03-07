import Legal from "@/components/about/_components/Legal";
import { privacyPolicyInfos } from "@/components/about/_constants";
import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import React from "react";

function Page() {
  return (
    <>
      <Navbar />
      <Legal type="Privacy Policy" Info={privacyPolicyInfos} />
      <Footer />
    </>
  );
}

export default Page;
