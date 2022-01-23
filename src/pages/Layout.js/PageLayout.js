import React from "react";
import Navbar from "../../componets/Navbar/Navbar";
import Footer from "../../componets/Footer/Footer";

const PageLayout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
