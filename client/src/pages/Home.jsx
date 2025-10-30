import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Work from "./Work/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
    </div>
  );
};

export default Home;
