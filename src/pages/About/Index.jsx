import React from "react";
import BreadCrumb from "../../components/CommonComponents/BreadCrumb";
import OurStory from "../../components/AboutComponents/OurStory/Index";
import Engagements from "../../components/AboutComponents/Engagements/Index";
import Founders from "../../components/AboutComponents/Founders/Index";
import Services from "../../components/homepage/Services/Index";


const About = () => {
  return (
    <div className="">
      <BreadCrumb className="mb-[42px]" />
      <OurStory />
      <Engagements/>
      <Founders/>
      <Services/>
    </div>
  );
};

export default About;
