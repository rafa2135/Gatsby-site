import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "normalize.css";
import "../assets/css/main.css";
type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
