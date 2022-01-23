import React from "react";

import PageLayout from "../Layout.js/PageLayout";
import ImageSlide from './ImageSlider/ImageSlide'
import Feature from './Featured'
import Search from './Search'
import ImageData from "./ImageSlider/ImageData";



const BerandaAdoptPets = () => {
  return (
    <PageLayout>
      <ImageSlide slider={ImageData}/>
      <Search/>
      <Feature/>
    </PageLayout>
  );
};

export default BerandaAdoptPets;