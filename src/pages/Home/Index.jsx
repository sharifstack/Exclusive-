import React from "react";
import Header from "../../components/RootLayOut/Header/Index";
import Navbar from "../../components/RootLayOut/Navbar/Index";
import Banner from "../../components/homepage/Banner/Index";
import FlashSale from "../../components/homepage/FlashSale/Index";
import Categories from "../../components/homepage/Categories/Index";
import BestSellingProducts from "../../components/homepage/BestSellingProducts/Index";
import EnhanceExperience from "../../components/homepage/EnhanceExperience/Index";
import OurProducts from "../../components/homepage/OurProducts/Index";
import NewArrival from "../../components/homepage/NewArrival/Index";
import Services from "../../components/homepage/Services/Index";
import Footer from "../../components/RootLayOut/Footer/Index";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Categories />
      <BestSellingProducts />
      <EnhanceExperience timeleft={6} />
      <OurProducts />
      <NewArrival />
      <Services />
    </div>
  );
};

export default Home;
