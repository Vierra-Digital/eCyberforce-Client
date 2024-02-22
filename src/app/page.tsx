import Chooseus from "@/components/home/chooseus/Chooseus";
import Hero from "@/components/home/hero/Hero";
import Products from "@/components/home/products/Products";
import Service from "@/components/home/service/Service";
import Solution from "@/components/home/solution/Solution";
import Footer from "@/components/home/utils/Footer";
import Navbar from "@/components/home/utils/Navbar";
import React from "react";

function Page() {
  const Container = {
    display: "flex",
    flexDirection: "column",
    width: "clamp(1px,100vw,1920px)",
    justifyContent: "space-between",
    margin: "0 auto",
  } as any;
  return (
    <div style={Container}>
      <Navbar />
      <Hero />
      <Service />
      <Products />
      <Chooseus />
      <Solution />
      <Footer />
    </div>
  );
}

export default Page;
