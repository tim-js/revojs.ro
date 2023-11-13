import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Section from "@components/Section";
import CardPhotos from "@components/CardPhotos";
import TalkVideo from "@components/TalkVideo";
import Button from "@components/Button";

import { mergeTalkRecordings } from "../2019/media";
import { day1, day2 } from "@data/2023/agenda";
import * as styles from "./media.module.scss";

const Media = ({ data }) => {
  const { allTalksJson, allSpeakersJson, recordingsImages } = data;

  const talks = allTalksJson.edges.map((e) => e.node);
  const speakers = allSpeakersJson.edges.map((e) => e.node);
  const images = recordingsImages.edges.map((e) => e.node);

  const recordings = mergeTalkRecordings(
    [...day1.talks, ...day2.talks],
    talks,
    speakers,
    images
  );

  return (
    <Layout title="revo.js Media" noFooterSeparation>
      <Header centered type="secondary" className={styles.header}>
        <h1 className={`title2023 ${styles.title}`}>Media</h1>
        <OutboundLink
          className={styles.afterMovie}
          href="https://youtu.be/Bfvts5TXSTE?si=zkbSjL90hjNPyDrB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.afterMovieTitle}>2023 After Movie</h2>
        </OutboundLink>
      </Header>

      <Section light className={`${styles.mediaPhotos}`}>
        <section>
          <h2 className={`${styles.mediaHeading} big revo-font`}>Photos</h2>

          <ul className={`${styles.mediaPhotosList}`}>
            <li>
              <CardPhotos
                white
                href="https://drive.google.com/drive/folders/18FczA1PJV3w4aDdz_TwWaaMWMWa0UMa4?usp=share_link"
                img={
                  <GatsbyImage
                    image={data.imgConference.childImageSharp.gatsbyImageData}
                    alt="Black and white photo from revo.js 2023 conference, showing the conference venue with participants in audience"
                  />
                }
                heading={
                  <span>
                    Conference <br />
                    photos
                  </span>
                }
              />
            </li>

            <li>
              <CardPhotos
                white
                href="https://drive.google.com/drive/folders/1FRn5ZXIJ1DeQWiEfuXWJCkhNRFXQskep?usp=share_link"
                img={
                  <GatsbyImage
                    image={data.imgAfterParty.childImageSharp.gatsbyImageData}
                    alt="Black and white photo from revo.js 2023 After Party, showing participants talking"
                  />
                }
                heading={
                  <span>
                    After Party <br />
                    photos
                  </span>
                }
              />
            </li>
          </ul>
        </section>
      </Section>

      <Section centered dark>
        <section>
          <h2 className={`${styles.mediaHeading} big revo-font`}>
            Video Recordings
          </h2>

          <ul className={styles.mediaVideosList}>
            {recordings.map((video) => {
              return (
                <li key={video.title}>
                  <TalkVideo video={video} className={styles.mediaVideo} />
                </li>
              );
            })}
          </ul>

          <OutboundLink
            href="https://www.youtube.com/playlist?list=PL701JjUqw62n3kKSg19n6T7EFHiBja6LU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>View entire playlist</Button>
          </OutboundLink>
        </section>
      </Section>
    </Layout>
  );
};

const MediaPage = () => {
  const data = useStaticQuery(graphql`
    {
      imgConference: file(
        relativePath: { eq: "photos/img-conference-2023.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            transformOptions: { grayscale: true }
          )
        }
      }
      imgAfterParty: file(
        relativePath: { eq: "photos/img-afterparty-2023.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            transformOptions: { grayscale: true }
          )
        }
      }
      allTalksJson {
        edges {
          node {
            talkId
            talk
            edition
            recordingUrl
            recordingImage
            speakers {
              speakerId
            }
          }
        }
      }
      allSpeakersJson {
        edges {
          node {
            speakerId
            firstname
            lastname
          }
        }
      }
      recordingsImages: allFile(
        filter: { relativePath: { glob: "talks-2023/*" } }
      ) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(width: 400, height: 400, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `);
  return <Media data={data} />;
};

export default MediaPage;
