import React from "react";
import Hero from "../components/Hero";
import LatestCollecction from "../components/LatestCollecction";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollecction />
      <BestSellers />
    </div>
  );
};

export default Home;
