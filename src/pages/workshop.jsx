import React from "react";
import { StaticQuery, graphql } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Button from "@components/Button";
import SEO from "@components/SEO";
// import Content from "@components/Content";
// import Section from "@components/Section";
import WorkshopDetails from "@components/WorkshopDetails";

import "./workshops.scss";

const Workshops = ({ data }) => {
  const { allWorkshopsJson, speakerImages } = data;
  const workshops = allWorkshopsJson.edges.map(e => e.node);

  return (
    <Layout>
      <SEO title="revo.js Workshop" />

      <Header type="main" image="workshops-image">
        <h1>Workshop</h1>
        <br />
        <strong className="cfp-important light-faded mono">
          a full day of "testing, testing..."
        </strong>
        <br />
        <strong className="cfp-important highlight mono">
          2nd of October, at DevPlant
        </strong>
        <br />
        <br />
        <br />
        <a href={`#${workshops[0].id}`}>
          <Button>Learn more</Button>
        </a>
      </Header>

      {workshops.map((workshop, index) => {
        const speakerImageFluid = speakerImages.edges.find(e =>
          workshop.image.includes(e.node.base)
        );

        return (
          <WorkshopDetails
            key={workshop.id}
            data={workshop}
            image={speakerImageFluid}
          />
        );
      })}
    </Layout>
  );
};

export default props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWorkshopsJson {
            edges {
              node {
                id
                firstname
                lastname
                bio
                image
                title
                company
                twitter
                workshop
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
      render={data => <Workshops data={data} {...props} />}
    />
  );
};
