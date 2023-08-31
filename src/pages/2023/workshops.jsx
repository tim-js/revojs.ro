import React from "react";
import { useStaticQuery, graphql } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Button from "@components/Button";
import Content from "@components/Content";
import Note from "@components/Note";
import Section from "@components/Section";
import Subscribe from "@components/Subscribe";
// import WorkshopDetails from "@components/WorkshopDetails";

import * as styles from "./workshops.module.scss";

const Workshops = ({ data }) => {
  const { allWorkshopsJson, speakerImages } = data;
  const workshops = allWorkshopsJson.edges.map((e) => e.node);

  return (
    <Layout title="revo.js Workshop">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.workshops_image}`}>Workshops</h1>
        <p className="subtitle2023">
          Unfortunately, we won't have any workshops this year ;(
        </p>

        {/* <br />
        <br />

        <a href="#subscribe">
          <Button>Subscribe for Updates</Button>
        </a> */}

      </Header>

      <Section light>
        <Content centered>

          <Note>
            {/* <p>
              All workshops will take place on the <strong>4th of October</strong>, before the conference.
            </p>
            <p>
              Workshops are not included in the conference ticket.<br />They require separate purchase.
            </p> */}
            <p>
              Due to reasons beyond our control, we were unable to bring you workshops this year, as we have initially planned.
            </p>
            <p>
              If you were eager to attend the workshop(s), we're very sorry for letting you down. However, we'll make sure that the 2 conference days will be a blast.
            </p>
          </Note>

          {/* <section id="subscribe">
            <br />
            <h2>Stay up to date</h2>
            <p>Subscribe to find out when Tickets go on sale:</p>
            <Subscribe light />
          </section> */}

        </Content>
      </Section>


      {/* {workshops.map((workshop, index) => {
        const speakerImageFluid = speakerImages.edges.find((e) =>
          workshop.image.includes(e.node.base)
        );

        return (
          <WorkshopDetails
            key={workshop.workshopId}
            data={workshop}
            image={speakerImageFluid}
          />
        );
      })} */}
    </Layout>
  );
};

const WorkshopsPage = (props) => {
  const data = useStaticQuery(graphql`
    {
      allWorkshopsJson {
        edges {
          node {
            workshopId
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
      speakerImages: allFile(filter: { relativePath: { glob: "speakers/*" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 400
                transformOptions: { grayscale: true }
                layout: CONSTRAINED
              )
            }
          }
        }
      }
    }
  `);
  return <Workshops data={data} {...props} />;
};

export default WorkshopsPage;
