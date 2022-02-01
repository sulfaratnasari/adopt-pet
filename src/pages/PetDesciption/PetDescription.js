import React from "react";
import { Typography, Button } from "antd";

import PageLayout from "../Layout.js/PageLayout";
import petA from "../../componets/Images/pet/Cat_November_2010-1a.jpg";

const { Text, Title } = Typography;

const PetDescription = (props) => {
  console.log(props)
  return (
    <PageLayout>
      <div style={{ height: "41rem", display:'flex', alignItems:'center' }}>
        <div className="description" style={description}>
            <div className="content" style={content}>
          <div className="description-img" style={{ width: "40%"}}>
            <img src={petA} style={{ width: "85%", marginRight: '2rem', borderRadius:'10px',}} />
          </div>
          <div className="description-text" style={descriptionText}>
            
            <Title style={title}>{props.name}</Title>
            <Text style={text}>Jenis : {props.type}</Text>
            <Text style={text}>Umur : {props.age} - {props.sex}</Text>
            <Text style={{paddingTop:'1rem',fontSize:'0.9rem'}}>Deskripsi:</Text>
            <Text style={text}>{props.description}</Text>
          </div>
          </div>
          <div className="description-Btn" style={button}>
              <Button>Hubungi Kami</Button>

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const content = {
    display: "flex"
}

const description = {
  margin: "8% 25% 5% 25%",
  height: "80%",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
  padding: "2rem",
  position: 'relative'
  
};
const descriptionText={
    width: "70%", 
    display: 'flex' , 
    flexDirection:'column'
}
const title={
    fontSize:'2.5rem'

}
const text={
    fontSize:'0.9rem',
    padding:'0.3rem 0rem'

}
const button = {
    margin:'2rem 2rem',
    position:'absolute',
    bottom: '0',
    right: '0'

}


export default PetDescription;
