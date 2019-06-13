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
    <Layout title="About revo.js">
      <Header centered type="secondary">
        <h1 className="about-title">
          About <img className="about-logo-text" src={revojs} alt="revo.js" />
        </h1>
        <strong className="about-important light-faded mono">
          <span>Technology Focused.</span>
          <span>Community Driven.</span>
          <span className="highlight">JavaScript Conference.</span>
        </strong>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              revo.js is the first JavaScript conference in Timisoara, organized
              by the <strong>tim.js community</strong> with the help of{" "}
              <strong>BanatIT</strong> and many other friends.
            </p>
          </Note>

          <section>
            <h2>What’s revo.js all about?</h2>

            <p>
              revo.js is a not-for-profit event taking place between the 3rd and
              4th of October 2019 at Consiliul Județean Timiș. The conference
              aims to bring JavaScript enthusiasts two full days of tech-focused
              talks, community networking and thought-provoking ideas meant to
              stir up change, the only const there is.
            </p>

            <ul className="bullet">
              <li>2 days, single track conference</li>
              <li>community driven, not-for-profit event</li>
              <li>16+ international speakers</li>
              <li>300 participants</li>
            </ul>
          </section>

          <section>
            <h2>Who should attend?</h2>

            <ul>
              <li>
                Anybody who <strong>writes</strong> JavaScript
              </li>
              <li>
                Anybody who wants to <strong>learn</strong> JavaScript
              </li>
              <li>
                Anybody who enjoys <strong>talking</strong> about JavaScript
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
                  Founded in 2013,{" "}
                  <OutboundLink href="https://timjs.ro" target="_blank">
                    tim.js
                  </OutboundLink>{" "}
                  is the local JavaScript Community in Timisoara, committed to
                  encourage, inspire and share JavaScript knowledge among its
                  members.
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
                  and affiliated supporting services,{" "}
                  <OutboundLink href="https://banatit.ro" target="_blank">
                    Banat IT
                  </OutboundLink>{" "}
                  is an NGO created by a passionate group of professionals.
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
