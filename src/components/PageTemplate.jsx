import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "./PageTemplate.css";

export default props => (
  <>
    <Header />
    <main role="main">{props.children}</main>
    <Footer />
  </>
);
