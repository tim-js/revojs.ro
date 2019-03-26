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

import "./about.scss";

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

            <p>
              revo.js is the first JavaScript conference in Timisoara, organized
              by the tim.js community with the help of BanatIT and many other
              friends.
            </p>

            <p>
              The not-for-profit event aims to bring JavaScript enthusiasts two
              full days of tech-focused talks, community networking and
              thought-provoking ideas meant to stir up change, the only const
              there is.
            </p>
          </Note>

          <section>
            <h2>Who should attend?</h2>

            <ul className="bullet">
              <li>
                Anybody who <strong>writes</strong> JavaScript
              </li>
              <li>
                Anybody who wants to <strong>learn</strong> JavaScript
              </li>
              <li>
                Anybody who enjoys to <strong>talk</strong> about JavaScript
              </li>
              <li>
                Anybody who wishes to <strong>teach</strong> JavaScript
              </li>
            </ul>
          </section>

          <section>
            <h2>Organizers</h2>

            <div className="about-organizers">
              <section>
                <h3>
                  <OutboundLink href="https://timjs.ro" target="_blank">
                    <img src={timjs} alt="tim.js" height="30" />
                  </OutboundLink>
                </h3>
                <p>
                  Founded in 2013, <strong>tim.js</strong> is the local
                  JavaScript Community in Timisoara, commited to encourage,
                  inspire and share JavaScript knowledge among its members.
                </p>
              </section>
              <section>
                <h3>
                  <OutboundLink href="https://banatit.ro" target="_blank">
                    <img src={banatit} alt="Banat IT" height="30" />
                  </OutboundLink>
                </h3>
                <p>
                  Dedicated to all stakeholders in the local IT industry:
                  universities, talent, researchers, IT employees, recruiters,
                  and affiliated supporting services.
                </p>
              </section>
            </div>

            {/* <section>
              <h3>Core Team</h3>

              <p>
                This event takes place thanks to the many people involved at
                many different levels.
              </p>
            </section> */}
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
