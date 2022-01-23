import React, {useState} from "react";
import { Typography, Menu } from "antd";

import PageLayout from "../Layout.js/PageLayout";
import "./AboutUs.css";

const { Title, Text } = Typography;

const AboutUs = () => {
  const [showVisi, setShowVisi] = useState(true);
  const [showMisi, setShowMisi] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  const handleVisi = () => {
    // setShowInitial(false);
    setShowVisi(true);
    setShowMisi(false);
    setShowProduct(false);
  };
  const handleMisi = () => {
    // setShowInitial(false);
    setShowVisi(false);
    setShowProduct(false);
    setShowMisi(true);
    console.log(1);
  };
  const handleProduct = () => {
    // setShowInitial(false);
    setShowVisi(false);
    setShowMisi(false);
    setShowProduct(true);
    console.log(2);
  };
  return (
    <PageLayout>
      <div style={{ height:'40.5rem'}}>
        <div style={{display:'flex', alignItems:'center', flexDirection:'column' }}>
        <Title style={{ marginTop:'8%', textAlign: "center", marginBottom: "2rem" }}>
          Tentang Kami
        </Title>
        <div>
          <Menu theme="light" mode="horizontal" style={{ padding: "1.5rem" }}>
            <Menu.Item key="1" onClick={handleVisi}>Visi</Menu.Item>
            <Menu.Item key="2" onClick={handleMisi}>Misi</Menu.Item>
            <Menu.Item key="3" onClick={handleProduct}>Produk</Menu.Item>
          </Menu>
        </div>
        <div style={{ marginTop: "1rem"}}>
          {showVisi?(
              <Text>Visi kami adalah menyeimbangkan dunia</Text>
          ): showMisi?(
              <Text>Misi Kami adalah menciptakan lingkungan yang ramah untuk hewan</Text>
          ):showProduct &&(
              <Text>Produk kami berupa kemudahan adopsi hewan kepada dan untuk orang-orang terpercaya</Text>
          )
          }
        </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
