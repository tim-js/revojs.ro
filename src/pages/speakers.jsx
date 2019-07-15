import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import SpeakersListIndex from "@components/SpeakersListIndex";
import { PurchaseTicket } from "@components/CTA";

import "./speakers.scss";

const Speakers = ({ data }) => {
  const { allSpeakersJson, speakerImages } = data;
  const speakers = allSpeakersJson.edges.map(e => e.node);
  // const offset = (allSpeakersJson.edges.length % 2) + 1;

  return (
    <Layout title="revo.js Speakers">
      <Header type="main" image="speakers-image">
        <h1>Speakers</h1>
        <br />
      </Header>

      {/* <Section light>
        <Content centered style={{ textAlign: "center" }}>
          <h1>Meet the speakers</h1>
          <br />
          <br />
          <br />
        </Content>
      </Section> */}

      <SpeakersListIndex speakers={speakers} images={speakerImages} />

      {/* <ul className="speakers-list">
        {speakers.map((speaker, index) => {
          const speakerImageFluid = speakerImages.edges.find(e =>
            speaker.image.includes(e.node.base)
          );

          const type = (index + offset) % 2 === 0 ? "odd" : "even";

          return (
            <li key={speaker.id}>
              <Link to={`/speakers/${speaker.id}`} className="speakers-link">
                <Speaker
                  data={speaker}
                  image={speakerImageFluid}
                  type={type}
                  first={index === 0}
                />
              </Link>
            </li>
          );
        })}
      </ul> */}

      <Section light>
        <Content centered style={{ textAlign: "center" }}>
          <p>Don't miss your chance to meet these wonderful speakers.</p>
          <br />
          <PurchaseTicket white />
        </Content>
      </Section>
    </Layout>
  );
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allSpeakersJson {
            edges {
              node {
                id
                firstname
                lastname
                image
                title
                company
                talk
                abstract
              }
            }
          }
          speakerImages: allFile(
            filter: { relativePath: { glob: "speakers/*" } }
          ) {
            edges {
              node {
                base
                image: childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <Speakers data={data} {...props} />}
    />
  );
};
