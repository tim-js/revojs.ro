import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Img from "gatsby-image";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";

import timjs from "@assets/tim.js-logo.svg";
import banatit from "@assets/Banat_IT_Logo.svg";

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
      <Header centered type="secondary">
        <h1>Organizers</h1>
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h2>Main Organizers</h2>

            <div className="organizers">
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
