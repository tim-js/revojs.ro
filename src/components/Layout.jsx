import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Layout.css";

export default props => (
  <>
    <Header />
    <main role="main">{props.children}</main>
    <Footer />
  </>
);
