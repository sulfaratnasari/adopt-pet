import React from "react";
import dataPets from "./FeaturedData";


import './Featured.css'

function Feature() {
  return (
    <>
      <h3>Featured Pets</h3>
      <hr/>
      <div className="feature">
        {dataPets.map((pets) => {
          return (
            <div className="feature-item">
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
