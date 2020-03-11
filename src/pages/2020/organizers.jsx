import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Title2020 from "@components/Title2020";

import timjs from "@assets/tim.js-logo.svg";

import "./organizers.scss";

const Organizers = ({ data }) => {
  const { allTeam2020Json, teamImages } = data;

  function getImage(image) {
    return teamImages.edges.find(e => image.includes(e.node.base));
  }

  const team = allTeam2020Json.edges
    .map(e => e.node)
    .map(member => {
      const memberImage = getImage(member.image);

      return {
        ...member,
        memberImage
      };
    });

  return (
    <Layout title="revo.js Organizers" noFooterSeparation>
      <Header type="main" centered>
        <Title2020>organizers</Title2020>
        <div className="subtitle2020">
          Revolutions start small, but not individually
        </div>
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h2 style={{ textAlign: "center" }}>
              <OutboundLink
                href="https://timjs.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={timjs} alt="tim.js" height="100" />
              </OutboundLink>
            </h2>
            <br />
            <p>
              Founded in 2013,{" "}
              <OutboundLink
                href="https://timjs.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                tim.js
              </OutboundLink>{" "}
              is the local JavaScript Community in Timișoara, Romania.
            </p>
            <p>
              Its main purpose is to{" "}
              <strong>bring JavaScript enthusiasts together</strong> and{" "}
              <strong>facilitate knowledge sharing</strong> between its members
              through meetups, workshops and conferences, such revo.js.
            </p>
            <p>
              We welcome everybody interested in any part of the JavaScript
              ecosystem, whether they're a beginner who just started learning,
              or an expert with decades of experience.
            </p>
          </section>
        </Content>
      </Section>

      <Section centered dark>
        <section>
          <h2 className="big">Core Team</h2>
          <p className="light-faded">
            This event takes place only because the following humans got
            involved:
          </p>
          <br />
          <br />
          <ul className="team-list">
            {team.map(member => (
              <li className="team-member" key={member.name}>
                <Img
                  fluid={member.memberImage.node.image.fluid}
                  alt={`${member.name} black and white photo`}
                />
                <strong className="team-member-name">
                  {member.name}
                  <span className="team-member-title">{member.title}</span>
                </strong>
              </li>
            ))}
          </ul>
        </section>

        {/* <br />

        <section>
          <h2>
            <span style={{ fontSize: "2em" }}>Special Thanks</span>
          </h2>
          <p className="light-faded">
            Last, but surely not least, let's give a huge hug to the extended
            crew that helped during the event:
          </p>
          <br />
          <br />
          <ul className="crew-list">
            <li>Milena Vlad</li>
            <li>Mădălina Mohorîta</li>
            <li>Bogdan Cubleșan</li>
            <li>Marius Cristea</li>
            <li>Denis Troncotă</li>
          </ul>
        </section> */}
      </Section>
    </Layout>
  );
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allTeam2020Json {
            edges {
              node {
                name
                image
                title
              }
            }
          }
          teamImages: allFile(filter: { relativePath: { glob: "team/*" } }) {
            edges {
              node {
                base
                image: childImageSharp {
                  fluid(maxWidth: 240, maxHeight: 240, grayscale: true) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <Organizers data={data} {...props} />}
    />
  );
};
