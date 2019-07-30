import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Navigation from "@components/Navigation";
import Footer from "@components/Footer";

export default ({
  location,
  children,
  title,
  noFooterSeparation,
  ...props
}) => {
  const _title = title || "revo.js conference";
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{_title}</title>
          <meta
            name="Description"
            content="revo.js - Technology Focused. Community Driven. JavaScript Conference."
          />
        </Helmet>
      </HelmetProvider>

      <Navigation location={location} />

      <main role="main" {...props}>
        {children}
      </main>

      <Footer noFooterSeparation={noFooterSeparation} />
    </>
  );
};
