import React from "react";
import Helmet from "react-helmet";

import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default props => (
  <>
    <Helmet>
      <title>revo.js conference</title>
      <meta
        name="Description"
        content="revo.js - Technology Focused. Community Driven. JavaScript Conference."
      />
    </Helmet>
    <Navigation location={props.location} />
    <main role="main">{props.children}</main>
    <Footer />
  </>
);
