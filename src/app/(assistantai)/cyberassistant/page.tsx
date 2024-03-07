import Assistant from "@/components/assistant/Assistant";
import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import React from "react";

function Page() {
  return (
    <div>
      <Navbar />
      <Assistant />
      <Footer />
    </div>
  );
}

export default Page;
