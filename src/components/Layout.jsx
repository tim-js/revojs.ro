import React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "./Layout.css";

export default props => (
  <>
    <Helmet>
      <title>revo.js conference</title>
      <meta
        name="Description"
        content="revo.js - Technology Focused. Community Driven. JavaScript Conference."
      />
    </Helmet>
    <Header />
    <main role="main">{props.children}</main>
    <Footer />
  </>
);
