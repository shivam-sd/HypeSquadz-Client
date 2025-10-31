import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Work from "./Work/Work";
import NumbersSection from "./Services/NumberSection";
import TrustedBy from "./Work/TrustedBy";
import CTASection from "./CTASection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <NumbersSection />
      <TrustedBy />
      <CTASection />
    </div>
  );
};

export default Home;
