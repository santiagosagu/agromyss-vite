import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
