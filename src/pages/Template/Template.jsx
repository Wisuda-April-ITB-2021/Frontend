import React from "react";
import { Footer } from "../../components/Template/Footer";
import { Navbar } from "../../components/Template/Navbar";

export const Template = ({ children, footer }) => {
  return (
    <>
      <Navbar />
      {children}
      {footer && <Footer />}
    </>
  );
};
