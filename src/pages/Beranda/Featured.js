import React from "react";
import dataPets from "./FeaturedData";
import { useNavigate } from "react-router-dom";

import './Featured.css'

function Feature() {
  const navigate = useNavigate()
  const handleDescriptionPet = ()=>{
    navigate('/description')

  }
  return (
    <>
      <h3>Featured Pets</h3>
      <div className="feature">
        {dataPets.map((pets) => {
          return (
            <div className="feature-item" onClick={handleDescriptionPet()}>
              <img src={pets.image} style={{width:'10rem', height:'11rem', borderRadius:'10px 10px 0px 0px'}}/>
              <h4>{pets.name}, <span>{pets.sex}</span></h4>
              <p>{pets.age} old</p>
              <p> Brider: {pets.brider}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Feature;
