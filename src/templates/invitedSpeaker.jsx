import React from "react";
import { graphql, Link } from "gatsby";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Img from "gatsby-image";

import Button from "@components/Button";
import Layout from "@components/Layout";
import Section from "@components/Section";
import Content from "@components/Content";

import SpeakerInfo from "./SpeakerInfo";

import { getEdition } from "@utils";


export default props => {
  const { invitationsJson, file } = props.data;
  const edition = getEdition();

  const speaker = {
    ...invitationsJson,
    image: file
  };

  return (
    <Layout>
      <HelmetProvider>
        <Helmet>
          <title>
            revo.js {speaker.firstname} {speaker.lastname}
          </title>
        </Helmet>
      </HelmetProvider>

      <Section light className={`content-speaker`}>
        <Content centered>
          <figure className="speaker-image-wrapper">
            <div className="speaker-image" key={speaker.id}>
              <Img
                fluid={speaker.image.image.fluid}
                alt={`${speaker.firstname} ${speaker.lastname} photo`}
              />
            </div>
          </figure>
          <SpeakerInfo speaker={speaker} />

          <h2>Dear {speaker.firstname},</h2>
          <p>It would be a great honor to have you as a speaker on stage at revo.js 2020.</p>
          <p>The close knit community surrounding revo.js surprised everyone in 2019 with its passion and implication. We want to offer nothing but the best for them on our second edition, and that leads us to you.</p>
          <p>You probably hear this a lot, but we really mean it: Your knowledge, passion and willingness to teach others truly inspire us. </p>
          <p>Looking forward to hearing from you,<br />The revo.js team</p>
          
          <a href="mailto:info@revojs.ro?subject=[revo.speaker invite]">
            <Button white>Say "YES" to revo.js!</Button>
          </a>

          <h2>More about revo.js</h2>
          <ul>
            <li><strong>Two-day, single track</strong>, technology focused JavaScript conference</li>
            <li>Happening on <strong>October 8th - 9th 2020</strong>, in Timișoara, Romania</li>
            <li>Community driven, <strong>not-for-profit event</strong></li>
            <li><strong>16+ speakers</strong> (half invited, half selected through CFP)</li>
            <li>260+ attendees</li>
          </ul>
            
          <h2>What we're offering</h2>
          <ul>  
            <li>Full cover of travel expenses</li>
            <li>Full cover of accommodation expenses in a 4* hotel for 4 nights (October 7-11)</li>
            <li>Free access to the conference and all related happenings</li>
            <li>Speakers' meet & greet dinner one day before the event</li>
            <li>Saturday field trip with the core revo.js team, after the event</li>
          </ul>
          

          <h2>Good vibes from revo.js 2019</h2>

          <p>
            2019 was our very first edition and it turned out even greater than we expected! You can see for yourself 
            in our <strong><Link to={`/${edition}/media/`} className="index-speakers-link"> pictures </Link></strong> and 
            in the after movie below!
          </p>
          <p>
            We couldn't have done it without <strong><Link to={`/${edition}/speakers/`} className="index-speakers-link"> 
            all the 2019 speakers </Link></strong> who, besides delivering great content, turned out to be amazing humans. 
          </p>
          <p>
            We’d love for you to join this growing circle of revo.friends!
          </p>


          <iframe
            title="revo.js 2019 After Movie"
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/KY9ZVsGnTes"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>

          <p>
            <a href="mailto:info@revojs.ro?subject=[revo.speaker invite]">
              <Button white>Let us know what you think</Button>
            </a>
          </p>

        </Content>
      </Section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $image: String!) {
    invitationsJson(id: { eq: $id }) {
      id
      firstname
      lastname
      twitter
      title
      company
      image
    }

    file(relativePath: { eq: $image }) {
      base
      image: childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400, grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
