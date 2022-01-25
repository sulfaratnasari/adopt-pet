import React from "react";

import PageLayout from "../Layout.js/PageLayout";
import dataPets from "../Beranda/FeaturedData";
import './LostAndFound.css'

const LostAndFound = () => {
  return (
    <PageLayout>
      <div style={{ padding: "0 0.5rem" }}>
        <div className="lost-pets">
          <h2>Lost Pets</h2>
          <h3>Pasang Iklan Kehilangan</h3>
          <div className="feature">
            {dataPets.map((pets) => {
              return (
                <div className="feature-item">
                  <img
                    src={pets.image}
                    style={{
                      width: "10rem",
                      height: "11rem",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  />
                  <h4>
                    {pets.name}, <span>{pets.sex}</span>
                  </h4>
                  <p>{pets.age} old</p>
                  <p> Brider: {pets.brider}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Found-pets">
          <h2>Found Pets</h2>
          <h3>Pasang Iklan Penemuan</h3>
          <div className="feature">
            {dataPets.map((pets) => {
              return (
                <div className="feature-item">
                  <img
                    src={pets.image}
                    style={{
                      width: "10rem",
                      height: "11rem",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  />
                  <h4>
                    {pets.name}, <span>{pets.sex}</span>
                  </h4>
                  <p>{pets.age} old</p>
                  <p> Brider: {pets.brider}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LostAndFound;
