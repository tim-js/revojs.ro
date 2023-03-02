import React, { useEffect } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
import Section from "@components/Section";
// import Note from "@components/Note";
// import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";

import { day0, day1, day2 } from "@data/2019/agenda";
import { getEdition } from "@utils";

import "./agenda.scss";

const edition = getEdition();

const Agenda = ({ data }) => {
  const { allTalksJson, allSpeakersJson, speakerImages } = data;

  const talks = allTalksJson.edges.map((e) => e.node);
  const speakers = allSpeakersJson.edges.map((e) => e.node);
  const images = speakerImages.edges.map((e) => e.node);

  day0.workshops = mergeWorkshopDetails(day0.workshops, speakers, images);
  day1.talks = mergeTalkDetails(day1.talks, talks, speakers, images);
  day2.talks = mergeTalkDetails(day2.talks, talks, speakers, images);

  useEffect(() => {
    const mainNavLinks = document.querySelectorAll(".agenda-nav a");

    function onScroll() {
      const scrolled = window.scrollY;

      mainNavLinks.forEach((link) => {
        const section = document.querySelector(link.hash);

        if (
          section.offsetTop - 200 <= scrolled &&
          section.offsetTop + section.offsetHeight > scrolled + 200
        ) {
          setActive(link);
        } else {
          removeActive(link);
        }
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll);
    // console.log("add effect");
    return () => {
      window.removeEventListener("scroll", onScroll);
      // console.log("remove effect");
    };
  }, []);

  return (
    <Layout title="revo.js Agenda">
      <Header type="main" image="agenda-image">
        <h1>Agenda</h1>
        <br />
        <strong className="speakers-important light-faded mono">
          <span className="highlight">
            Change can’t be scheduled but it can kindle from our revo.agenda.
          </span>
        </strong>
      </Header>

      <div className="agenda-nav-wrapper">
        <nav className="agenda-nav">
          <a href="#workshop-day">
            <strong className="mono">Oct 2nd</strong>
            {/* <span>Workshop Day</span> */}
          </a>
          <a href="#conference-day1">
            <strong className="mono">Oct 3rd</strong>
            {/* <span>Conference Day 1</span> */}
          </a>
          <a href="#conference-day2">
            <strong className="mono">Oct 4th</strong>
            {/* <span>Conference Day 2</span> */}
          </a>
        </nav>
      </div>

      <Section light className="agenda-section">
        <section id="workshop-day" className="agenda-content">
          <WorkshopDay data={day0} />
        </section>

        <section id="conference-day1" className="agenda-content">
          <ConferenceDay data={day1} />
        </section>

        <section id="conference-day2" className="agenda-content">
          <ConferenceDay data={day2} />
        </section>

        {/* <div style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <p className="cta-text">Don't miss out to see these great talks</p>
          <PurchaseTicket label="Grab your conference ticket" white />
        </div> */}
      </Section>
    </Layout>
  );

  function WorkshopDay({ data }) {
    const { dateIso, workshops } = data;

    return (
      <>
        <DayHeader data={data} />
        <ul className="agenda-slots">
          {workshops.map((workshop) => (
            <li key={workshop.time} className="agenda-slot talk">
              <time
                dateTime={`${dateIso}T${workshop.time}:00`}
                className="slot-time"
              >
                {workshop.time}
              </time>
              <Workshop data={workshop} />
            </li>
          ))}
        </ul>
      </>
    );
  }

  function ConferenceDay({ data }) {
    const { dateIso, talks } = data;

    return (
      <>
        <DayHeader data={data} />
        <ul className="agenda-slots">
          {talks.map((talk) => (
            <li
              key={talk.time}
              className={`agenda-slot ${talk.talkId ? "talk" : "break"}`}
            >
              <time
                dateTime={`${dateIso}T${talk.time}:00`}
                className="slot-time"
              >
                {talk.time}
              </time>
              <Slot slot={talk} />
            </li>
          ))}
        </ul>
      </>
    );
  }

  function setActive(link) {
    if (!link.classList.contains("active")) {
      link.classList.add("active");
      // console.log("SET ACTIVE", link.hash);
    }
  }

  function removeActive(link) {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
      // console.log("REMOVE ACTIVE", link.hash);
    }
  }
};

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allTalksJson {
            edges {
              node {
                talkId
                talk
                abstract
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
                image
                title
                company
                twitter
                bio
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
      render={(data) => <Agenda data={data} {...props} />}
    />
  );
};

function Workshop({ data }) {
  return (
    <div className="agenda-slot-content">
      <Link to={`/${edition}/workshop/`}>
        <h3>{data.title}</h3>
      </Link>
      <span>{data.description}</span>
      <SpeakersDetails list={data.speakers} />
    </div>
  );
}

function DayHeader({ data }) {
  const { day, date, title } = data;
  return (
    <header className="agenda-day-header">
      <h2 className="agenda-day-date">
        <span className="agenda-day-weekday">{day},</span> {date}
      </h2>
      <span className="agenda-day-title">{title}</span>
    </header>
  );
}

function SpeakersDetails({ list }) {
  return (
    <figure className="agenda-speakers">
      {list.map((speaker) => (
        <div key={speaker.lastname}>
          <Img
            fluid={speaker.speakerImage.image.fluid}
            alt={`${speaker.firstname} ${speaker.firstname} photo`}
            className="talk-speaker-image"
          />
        </div>
      ))}

      <span>
        {list.map((speaker, i) => {
          return (
            <React.Fragment key={speaker.speakerId}>
              {i > 0 && " & "}
              <Link to={`/${edition}/speakers/${speaker.speakerId}`}>
                {`${speaker.firstname} ${speaker.lastname}`}
              </Link>
            </React.Fragment>
          );
        })}
      </span>
    </figure>
  );
}

function Slot({ slot }) {
  if (slot.talkId) {
    return (
      <>
        <div className="agenda-slot-content">
          <Link to={`/${edition}/agenda/${slot.talkId}`}>
            <h3>{slot.title}</h3>
          </Link>
          <SpeakersDetails list={slot.speakers} />
        </div>
      </>
    );
  } else if (slot.description) {
    return (
      <div className="agenda-slot-content">
        <h3>{slot.description}</h3>
      </div>
    );
  } else if (slot.placeholder) {
    return (
      <div className="agenda-slot-content" style={{ alignSelf: "center" }}>
        <span>{slot.placeholder}</span>
      </div>
    );
  }
}

function mergeSpeakerDetails(speakersIdList, speakers, images) {
  return speakersIdList.map((speaker) => {
    const speakerData = speakers.find((s) => s.speakerId === speaker.speakerId);
    const speakerImage = images.find((e) => speakerData.image.includes(e.base));
    return {
      ...speakerData,
      speakerImage,
    };
  });
}

function mergeWorkshopDetails(workshops, speakers, images) {
  return workshops.map((workshop) => {
    const speakersDetails = mergeSpeakerDetails(
      workshop.speakers,
      speakers,
      images
    );

    return {
      ...workshop,
      speakers: speakersDetails,
    };
  });
}

function mergeTalkDetails(agenda, talks, speakers, images) {
  return agenda.map((slot) => {
    const { talkId } = slot;

    if (!talkId) {
      return slot;
    }

    const talkDetails = talks.find((talk) => talk.talkId === talkId);
    const speakersDetails = mergeSpeakerDetails(
      talkDetails.speakers,
      speakers,
      images
    );

    return {
      ...slot,
      title: talkDetails.talk,
      speakers: speakersDetails,
    };
  });
}
