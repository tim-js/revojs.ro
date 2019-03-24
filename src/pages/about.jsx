import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

import revojs from "@assets/revo.js.svg";
import timjs from "@assets/tim.js-logo.svg";
import banatit from "@assets/Banat_IT_Logo.svg";

export default () => {
  return (
    <Layout>
      <Header centered type="secondary">
        <h1>
          About{" "}
          <img
            style={{ height: "80px", verticalAlign: "bottom" }}
            className="revojs-text"
            src={revojs}
            alt="revo.js"
          />
        </h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p className="mono">
              <strong>
                Technology Focused. Community Driven.{" "}
                <span className="highlight">JavaScript Conference.</span>
              </strong>
            </p>
          </Note>

          <section>
            <h2>Organizers</h2>
            {/* <p>
              The revo.js conference is organized by <strong>tim.js</strong> in
              partnership with <strong>BanatIT</strong>.
            </p> */}

            <br />

            <h3>
              <OutboundLink href="https://timjs.ro">
                <img src={timjs} alt="tim.js" height="50" />
              </OutboundLink>
            </h3>
            <p>
              Founded in 2013, <strong>tim.js</strong> is the local JavaScript
              Community in Timisoara.
            </p>

            <br />
            <br />

            <h3>
              <OutboundLink href="https://banatit.ro">
                <img src={banatit} alt="Banat IT" height="45" />
              </OutboundLink>
            </h3>
            <p>
              Dedicated to all stakeholders in the local IT industry:
              universities, talent, researchers, IT employees, recruiters, and
              affiliated supporting services.
            </p>
          </section>

          <section>
            <h2>Core Team</h2>

            <p>
              This event takes place thanks to the many people involved at many
              different levels.
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
