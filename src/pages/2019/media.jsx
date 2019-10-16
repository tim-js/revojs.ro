import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
// import Button from "@components/Button";

import "./media.scss";

const Media = ({ data }) => {
  console.log(data);
  return (
    <Layout title="revo.js Media">
      <Header centered type="secondary">
        <h1>Media</h1>
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h2>After Movie</h2>
            <p>
              The after movie in currently in post production and will be
              published soon.
            </p>
          </section>
          <section>
            <h2>Photos</h2>

            <div className="media-photos">
              <OutboundLink
                href="https://www.facebook.com/pg/revojsro/photos/?tab=album&album_id=520124138546934"
                target="_blank"
                rel="noopener noreferrer"
                className="media-photo-category"
              >
                <figure>
                  <Img
                    fluid={data.imgWorkshop.childImageSharp.fluid}
                    alt="Black and white photo from revo.js 2019 workshop with Gleb Bahmutov"
                  />
                  <caption>Workshop photos</caption>
                </figure>
              </OutboundLink>

              <OutboundLink
                href="https://www.facebook.com/pg/revojsro/photos/?tab=album&album_id=519964821896199"
                target="_blank"
                rel="noopener noreferrer"
                className="media-photo-category"
              >
                <figure>
                  <Img
                    fluid={data.imgConference.childImageSharp.fluid}
                    alt="Black and white photo from revo.js 2019 conference, showing the conference venue with all the participants"
                  />
                  <caption>Conference photos</caption>
                </figure>
              </OutboundLink>

              <OutboundLink
                href="https://www.facebook.com/pg/revojsro/photos/?tab=album&album_id=520281835197831"
                target="_blank"
                rel="noopener noreferrer"
                className="media-photo-category"
              >
                <figure>
                  <Img
                    fluid={data.imgAfterParty.childImageSharp.fluid}
                    alt="Black and white photo from revo.js 2019 After Party, showing participants sitting at the table and talking"
                  />
                  <caption>After Party photos</caption>
                </figure>
              </OutboundLink>
            </div>
          </section>

          <section>
            <h2>Video Recordings</h2>
            <p>
              The video recordings of the talks are currently in post production
              editing and will be published very soon.
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imgWorkshop: file(relativePath: { eq: "photos/img-workshop-2019.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgConference: file(
        relativePath: { eq: "photos/img-conference-2019.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imgAfterParty: file(
        relativePath: { eq: "photos/img-afterparty-2019.png" }
      ) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Media data={data} />;
};
