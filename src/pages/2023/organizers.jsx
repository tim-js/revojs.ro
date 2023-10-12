import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

import timjs from "@assets/tim.js-logo.svg";

import * as styles from "./organizers.module.scss";

const Organizers = ({ data }) => {
  const { allTeam2023Json, teamImages } = data;

  function getImage(image) {
    return teamImages.edges.find((e) => image.includes(e.node.base));
  }

  const team = allTeam2023Json.edges
    .map((e) => e.node)
    .map((member) => {
      const memberImage = getImage(member.image);

      return {
        ...member,
        memberImage,
      };
    });

  return (
    <Layout title="revo.js Organizers" noFooterSeparation>
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.organisers_image}`}>Organizers</h1>
        <div className="subtitle2023">
          Revolutions start small,
          <br />
          but not individually
        </div>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              revo.js is a community-driven conference, organized by{" "}
              <strong>tim.js</strong> through its NGO,{" "}
              <strong>Asociatia TIM.JS</strong>.
            </p>
          </Note>

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
              through meetups, workshops, and conferences, such as revo.js.
            </p>
            <p>
              We welcome everybody interested in any aspect of the JavaScript
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
          <ul className={styles.team_list}>
            {team.map((member) => (
              <li className={styles.team_member} key={member.name}>
                <GatsbyImage
                  image={
                    member.memberImage.node.childImageSharp.gatsbyImageData
                  }
                  alt={`${member.name} black and white photo`}
                />
                <strong className={styles.team_member_name}>
                  {member.name}
                  <span className={styles.team_member_title}>
                    {member.title}
                  </span>
                </strong>
              </li>
            ))}
          </ul>
        </section>

        <br />

        <section>
          <h2>
            <span style={{ fontSize: "2em" }}>Special Thanks</span>
          </h2>
          <p className="light-faded">
            We have to give a special shoutout to the ones that helped us during the year:
          </p>
          <ul className={styles.crew_list}>
            <li>Alex Iliescu</li>
            <li>Ami Totorean</li>
          </ul>
          <br />
          <p className="light-faded">
            And last, but surely not least, a huge hug to the extended
            crew that helped during the event:
          </p>
          <ul className={styles.crew_list}>
            <li>Bogdan Cubleșan</li>
            <li>Andrei Laza</li>
            <li>Athena Gândilă</li>
            <li>Arnold Ișpan</li>
          </ul>
        </section>
      </Section>
    </Layout>
  );
};

const OrganizersPage = (props) => {
  const data = useStaticQuery(
    graphql`
      {
        allTeam2023Json {
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
              childImageSharp {
                gatsbyImageData(
                  width: 240
                  height: 240
                  quality: 90
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    `
  );
  return <Organizers data={data} {...props} />;
};

export default OrganizersPage;
