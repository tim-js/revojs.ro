import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";

import revojs from "@assets/revo.js.svg";

export default () => {
  return (
    <Layout>
      <Header centered>
        <Content>
          <h1>
            About{" "}
            <img
              style={{ height: "80px", verticalAlign: "bottom" }}
              className="revojs-text"
              src={revojs}
              alt="revo.js"
            />
          </h1>
          <br />
          <span className="light-faded">
            Technology Focused. Community Driven. JavaScript Conference.
          </span>
        </Content>
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h2 className="first">Organizers</h2>
            <p>
              The revo.js conference is organized by <strong>tim.js</strong> in
              partnership with <strong>BanatIT</strong>.
            </p>

            <h3>
              <OutboundLink href="https://timjs.ro">tim.js</OutboundLink>
            </h3>
            <p>The local JavaScript Community, active since 2013.</p>

            <h3>
              <OutboundLink href="https://banatit.ro">BanatIT</OutboundLink>
            </h3>
            <p>
              Dedicated to all stakeholders in the local IT industry:
              universities, talent, researchers, IT employees, recruiters, and
              affiliated supporting services.
            </p>
          </section>

          <section>
            <h2>Team</h2>

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
