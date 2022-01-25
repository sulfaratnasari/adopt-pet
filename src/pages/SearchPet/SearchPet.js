import React from "react";
import { Row, Col, Input, Button } from "antd";
import PageLayout from "../Layout.js/PageLayout";
import dataPets from "../Beranda/FeaturedData";

import "./SearchPet.css";

const SearchPet = () => {
  return (
    <PageLayout>
      <div style={{ height: "88.8vh" }}>
        <div className="search-pet">
          <Row >
            <Col className="col-left">
              <Input placeholder="Jenis Peliharaan" />
            </Col>
            <Col className="col-right">
              <Input placeholder="daerah" />
            </Col>
            <Col className="col-left">
              <Input placeholder="Brider" />
            </Col>
            <Col className="col-right">
              <Input placeholder="Age" />
            </Col>
            <Col className="col-button">
              <Button>Search</Button>
            </Col>
          </Row>
        </div>
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
    </PageLayout>
  );
};

export default SearchPet;
