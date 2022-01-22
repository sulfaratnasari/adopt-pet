import React from "react";
import {Layout} from 'antd'

import Navbar from "../../componets/Navbar/Navbar";
import ImageSlide from './ImageSlider/ImageSlide'
import Feature from './Featured'
import Search from './Search'
import ImageData from "./ImageSlider/ImageData";


const BerandaAdoptPets = () => {

  return (
    <Layout>
      <Navbar/>
      <ImageSlide slider={ImageData}/>
      <Search/>
      <Feature/>
    </Layout>
  );
};

export default BerandaAdoptPets;