import React from "react";
import Header from "../../components/RootLayOut/Header/Index";
import Navbar from "../../components/RootLayOut/Navbar/Index";
import Banner from "../../components/Banner/Index";
import FlashSale from "../../components/RootLayOut/FlashSale/Index";
import Categories from "../../components/RootLayOut/Categories/Index";
import BestSellingProducts from "../../components/RootLayOut/BestSellingProducts/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale/>
      <Categories/>
      <BestSellingProducts/>
    </div>
  );
};

export default Home;
