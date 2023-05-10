import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
import Section from "@components/Section";
import CardPhotos from "@components/CardPhotos";
import TalkVideo from "@components/TalkVideo";
import Button from "@components/Button";

import "./media.scss";

import { day1, day2 } from "@data/2019/agenda";

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
      <Header centered type="secondary" className="media-header">
        <h1>Media</h1>

        <OutboundLink
          className="after-movie"
          href="https://www.youtube.com/watch?v=KY9ZVsGnTes&amp;list=PL701JjUqw62nHoRho4RJ3KJSLCRG08r1Z&amp;index=19&amp;t=0s"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>2019 After Movie</h2>
        </OutboundLink>
      </Header>

      <Section light className="media media-photos">
        <section>
          <h2 className="media-heading">Photos</h2>

          <ul className="media-photos-list index-speakers-list">
            <li>
              <CardPhotos
                white
                href="https://www.facebook.com/pg/revojsro/photos/?tab=album&album_id=520124138546934"
                img={
                  <GatsbyImage
                    image={data.imgWorkshop.childImageSharp.gatsbyImageData}
                    alt="Black and white photo from revo.js 2019 workshop with Gleb Bahmutov"
                  />
                }
                heading={
                  <span>
                    Workshop <br />
                    photos
                  </span>
                }
              />
            </li>

            <li>
              <CardPhotos
                white
                href="https://www.facebook.com/pg/revojsro/photos/?tab=album&album_id=519964821896199"
                img={
                  <GatsbyImage
                    image={data.imgConference.childImageSharp.gatsbyImageData}
                    alt="Black and white photo from revo.js 2019 conference, showing the conference venue with all the participants"
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
                href="https://www.facebook.com/pg/revojsro/photos/?tab=album&album_id=520281835197831"
                img={
                  <GatsbyImage
                    image={data.imgAfterParty.childImageSharp.gatsbyImageData}
                    alt="Black and white photo from revo.js 2019 After Party, showing participants sitting at the table and talking"
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

            <li>
              <CardPhotos
                white
                href="https://vrhub.ro/wp-content/uploads/vr360/vr.revo.js/"
                img={
                  <GatsbyImage
                    image={data.img360.childImageSharp.gatsbyImageData}
                    alt="revo.360 degrees"
                  />
                }
                heading={
                  <span>
                    360&deg; panoramic
                    <br />
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
          <h2 className="media-heading">Video Recordings</h2>

          <ul className="media-videos-list">
            {recordings.map((video) => {
              return (
                <li key={video.title}>
                  <TalkVideo video={video} />
                </li>
              );
            })}
          </ul>

          <OutboundLink
            href="https://www.youtube.com/playlist?list=PL701JjUqw62nHoRho4RJ3KJSLCRG08r1Z"
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
      imgWorkshop: file(relativePath: { eq: "photos/img-workshop-2019.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      imgConference: file(
        relativePath: { eq: "photos/img-conference-2019.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      imgAfterParty: file(
        relativePath: { eq: "photos/img-afterparty-2019.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      img360: file(relativePath: { eq: "360_image.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
      recordingsImages: allFile(filter: { relativePath: { glob: "talks/*" } }) {
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
  return <Media data={data} />;
};

export default MediaPage;

function mergeTalkRecordings(agenda, talks, speakers, images) {
  const recordings = [];

  agenda.forEach((slot) => {
    const { talkId } = slot;

    if (!talkId) {
      return;
    }

    const talkDetails = talks.find((talk) => talk.talkId === talkId);
    const talkImage = images.find((img) =>
      talkDetails.recordingImage.includes(img.base)
    );
    const speakersDetails = mergeSpeakerDetails(
      talkDetails.speakers,
      speakers,
      images
    );

    recordings.push({
      title: talkDetails.talk,
      url: talkDetails.recordingUrl,
      speakers: speakersDetails,
      talkImage,
    });
  });

  return recordings;
}

function mergeSpeakerDetails(speakersIdList, speakers, images) {
  return speakersIdList.map((speaker) => {
    const speakerData = speakers.find((s) => s.speakerId === speaker.speakerId);
    return {
      ...speakerData,
    };
  });
}
