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
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h3>
              <OutboundLink
                href="https://timjs.ro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={timjs} alt="tim.js" height="60" />
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
              is the local JavaScript Community in Timișoara, Romania.
            </p>
            <p>
              It's main purpose is to bring JavaScript enthusiasts together and
              facilitate knowledge sharing between its members through meetups,
              workshops and conferences such revo.js.
            </p>
            <p>
              We welcome everybody interested in any part of the JavaScript
              ecosystem, whether you're a beginner that just started learning,
              or an expert with decades of experience.
            </p>
          </section>
        </Content>
      </Section>

      <Section className="organizers-team">
        <section>
          <h2>Core Team</h2>
          <p>
            This event takes place only because the following humans got
            involved:
          </p>
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
