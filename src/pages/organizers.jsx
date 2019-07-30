import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

import timjs from "@assets/tim.js-logo.svg";
import banatit from "@assets/Banat_IT_Logo.svg";

import "./organizers.scss";

export default () => {
  return (
    <Layout title="revo.js Organizers">
      <Header centered type="secondary">
        <h1 className="about-title">Organizers</h1>
      </Header>

      <Section light className="blog-post">
        <Content centered>
          <section>
            <h2>Main Organizers</h2>

            <div className="about-organizers">
              <section>
                <h3>
                  <OutboundLink
                    href="https://timjs.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={timjs} alt="tim.js" height="30" />
                  </OutboundLink>
                </h3>
                <p>
                  Founded in 2013,{" "}
                  <OutboundLink
                    href="https://timjs.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    tim.js
                  </OutboundLink>{" "}
                  is the local JavaScript Community in Timisoara, committed to
                  encourage, inspire and share JavaScript knowledge among its
                  members.
                </p>
              </section>
              <section>
                <h3>
                  <OutboundLink
                    href="https://banatit.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={banatit} alt="Banat IT" height="30" />
                  </OutboundLink>
                </h3>
                <p>
                  Dedicated to all stakeholders in the local IT industry:
                  universities, talent, researchers, IT employees, recruiters,
                  and affiliated supporting services,{" "}
                  <OutboundLink
                    href="https://banatit.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Banat IT
                  </OutboundLink>{" "}
                  is an NGO created by a passionate group of professionals.
                </p>
              </section>
            </div>

            <section>
              <h2>Core Team</h2>

              <p>
                This event takes place only because the following humans got
                involved:
                <ul className="organizers-team">
                  <li>
                    <strong>Andrei Pfeiffer</strong>
                  </li>
                  <li>
                    <strong>Lucian Pacurar</strong>
                  </li>
                  <li>
                    <strong>Cassian Lup</strong>
                  </li>
                  <li>
                    <strong>Ilona Iftode</strong>
                  </li>
                  <li>
                    <strong>Simina Sirbu</strong>
                  </li>
                  <li>
                    <strong>Andreea Nicu</strong>
                  </li>
                  <li>
                    <strong>Andrea Sisak</strong>
                  </li>
                  <li>
                    <strong>Ion Mosincat</strong>
                  </li>
                  <li>
                    <strong>Horia Radu</strong>
                  </li>
                  <li>
                    <strong>Ovidiu Bite</strong>
                  </li>
                  <li>
                    <strong>Anca Spatariu</strong>
                  </li>
                  <li>
                    <strong>Amalia Sisak</strong>
                  </li>
                </ul>{" "}
                and many many others.
              </p>
            </section>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
