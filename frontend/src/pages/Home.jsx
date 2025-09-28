import React from "react";
import Hero from "../components/Hero";
import LatestCollecction from "../components/LatestCollecction";
import BestSellers from "../components/BestSellers";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollecction />
      <BestSellers />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
