import React from "react";
import Header from "../../components/RootLayOut/Header/Index";
import Navbar from "../../components/RootLayOut/Navbar/Index";
import Banner from "../../components/Banner/Index";
import FlashSale from "../../components/RootLayOut/FlashSale/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale/>
    </div>
  );
};

export default Home;
