import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import ImageData from "./ImageData";
import "./ImageSlide.css";

const ImageSlide = ({ slider }) => {
  const [current, setCurrent] = useState(0);
  const length = slider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current == 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slider) || slider.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide} />
      <AiOutlineArrowRight className="right-arrow" onClick={nextSlide} />
      {ImageData.map((img, index) => (
        <div
          className={index === current ? "slide-active" : "slide"}
          key={index}
        >
          {index === current && (
            <img
              className="image"
              src={img.image}
              alt="iklan"
              style={{ width: "50%" }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlide;
