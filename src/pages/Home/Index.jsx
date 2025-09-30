import React from "react";
import Header from "../../components/RootLayOut/Header/Index";
import Navbar from "../../components/RootLayOut/Navbar/Index";
import Banner from "../../components/Banner/Index";
import FlashSale from "../../components/RootLayOut/FlashSale/Index";
import Categories from "../../components/RootLayOut/Categories/Index";
import BestSellingProducts from "../../components/RootLayOut/BestSellingProducts/Index";
import EnhanceExperience from "../../components/RootLayOut/EnhanceExperience/Index";
import OurProducts from "../../components/RootLayOut/OurProducts/Index";
import NewArrival from "../../components/RootLayOut/NewArrival/Index";
import Services from "../../components/RootLayOut/Services/Index";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
      <Categories />
      <BestSellingProducts />
      <EnhanceExperience timeleft={6} />
      <OurProducts />
      <NewArrival/>
      <Services/>
    </div>
  );
};

export default Home;
