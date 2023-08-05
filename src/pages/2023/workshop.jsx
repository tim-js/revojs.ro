import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Button from "@components/Button";
import Content from "@components/Content";
import Note from "@components/Note";
import Section from "@components/Section";
import Subscribe from "@components/Subscribe";
import WorkshopDetails2023 from "@components/WorkshopDetails2023";

import * as styles from "./workshop.module.scss";

import { getEdition } from "@utils";

const Workshops = ({ data }) => {
  const { allWorkshopsJson, speakerImages } = data;
  const edition = getEdition();
  const workshops = allWorkshopsJson.edges
    .map((e) => e.node)
    .filter((workshop) => workshop.edition === edition);

  return (
    <Layout title="revo.js Workshop">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.workshops_image}`}>Workshop</h1>
        <br />
        <div class="subtitle2023">Reactive programming with RxJS</div>
        <br />
        <strong className="cfp-important highlight mono">
          4th of October, at Hotel Timisoara
        </strong>
        <br />
        <br />
        <br />
        <a href={`#${workshops[0].workshopId}`}>
          <Button>Learn more</Button>
        </a>
      </Header>

      {/* <Section light>
        <Content centered>
          <Note>
            <p>
              All workshops will take place on the{" "}
              <strong>4th of October</strong>, before the conference.
            </p>
            <p>
              Workshops are not included in the conference ticket.
              <br />
              They require separate purchase.
            </p>
          </Note>

          <section id="subscribe">
            <br />
            <h2>Stay up to date</h2>
            <p>Subscribe to find out when Tickets go on sale:</p>
            <Subscribe light />
          </section>
        </Content>
      </Section> */}

      {workshops.map((workshop, index) => {
        const speakerImageFluid = speakerImages.edges.find((e) =>
          workshop.image.includes(e.node.base)
        );

        return (
          <WorkshopDetails2023
            key={workshop.workshopId}
            data={workshop}
            image={speakerImageFluid}
          />
        );
      })}
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
            edition
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
