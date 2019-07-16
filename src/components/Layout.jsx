import React from "react";

import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import SEOcomponent from "@components/SEO";

export default ({ location, children, SEO, ...props }) => {
  const _SEO = SEO || <SEOcomponent />;
  return (
    <>
      {_SEO}

      <Navigation location={location} />

      <main role="main" {...props}>
        {children}
      </main>

      <Footer />
    </>
  );
};
