import React, { useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
// import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
import Section from "@components/Section";
// import Note from "@components/Note";
// import Button from "@components/Button";
import { PurchaseTicket } from "@components/CTA";

import { day0, day1, day2 } from "@data/2023/agenda";
import { getEdition } from "@utils";

import * as styles from "./agenda.module.scss";

const edition = getEdition();
const ACTIVE_CLASS = styles.active;

const Agenda = ({ data }) => {
  const { allTalksJson, allSpeakersJson, speakerImages } = data;

  const talks = allTalksJson.edges
    .map(e => e.node)
    .filter(t => t.edition === edition);
  const speakers = allSpeakersJson.edges
    .map(e => e.node)
    .filter(s => s.edition === edition);
  const images = speakerImages.edges.map(e => e.node);

  day0.workshops = mergeWorkshopDetails(day0.workshops, speakers, images);
  day1.talks = mergeTalkDetails(day1.talks, talks, speakers, images);
  day2.talks = mergeTalkDetails(day2.talks, talks, speakers, images);

  useEffect(() => {
    const mainNavLinks = document.querySelectorAll(`.${styles.nav} a`);
    
    function onScroll() {
      const scrolled = window.scrollY;
      
      mainNavLinks.forEach(link => {
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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Layout title="revo.js Agenda">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.agenda_image}`}>Agenda</h1>
        <p className="subtitle2023">
          Will be announced later in August. Stay tuned...
        </p>
      </Header>

      <div className={`${styles.nav_wrapper}`}>
        <nav className={styles.nav}>
          <a href="#workshop-day">
            <span className={styles.nav_title}>{day0.title}</span>
            <strong className="mono">Oct 4th</strong>
          </a>
          <a href="#conference-day1">
            <span className={styles.nav_title}>{day1.title}</span>
            <strong className="mono">Oct 5th</strong>
          </a>
          <a href="#conference-day2">
            <span className={styles.nav_title}>{day2.title}</span>
            <strong className="mono">Oct 6th</strong>
          </a>
        </nav>
      </div>

      <div className={styles.content_wrapper}>
        <section id="workshop-day" className={styles.content}>
          <WorkshopDay data={day0} />
        </section>

        <section id="conference-day1" className={styles.content}>
          <ConferenceDay data={day1} />
        </section>

        <section id="conference-day2" className={styles.content}>
          <ConferenceDay data={day2} />
        </section>

        <div style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <p  className={styles.cta}>Don't miss out to see these great talks</p>
          <PurchaseTicket label="Grab your conference ticket" white />
        </div>

        <p className={styles.note}>
          <strong>NOTE:</strong> minor changes to the agenda might occur
        </p>
      </div>
    </Layout>
  );

  function WorkshopDay({ data }) {
    const { dateIso, workshops } = data;

    return (
      <>
        <DayHeader data={data} />

        <ul className={styles.slots}>
          {workshops.map(workshop => (
            <li key={workshop.time} className={`${styles.slot} ${styles.talk}`}>
              <time
                dateTime={`${dateIso}T${workshop.time}:00`}
                className={styles.slot_time}
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

        <ul className={styles.slots}>
          {talks.map(talk => (
            <li
              key={talk.time}
              className={`${styles.slot} ${talk.talkId ? styles.talk : styles.coffee}`}
            >
              <time
                dateTime={`${dateIso}T${talk.time}:00`}
                className={styles.slot_time}
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
    if (!link.classList.contains(ACTIVE_CLASS)) {
      link.classList.add(ACTIVE_CLASS);
    }
  }

  function removeActive(link) {
    if (link.classList.contains(ACTIVE_CLASS)) {
      link.classList.remove(ACTIVE_CLASS);
    }
  }
};

const AgendaPage = (props) => {
  const data = useStaticQuery(graphql`
    {
      allTalksJson {
        edges {
          node {
            talkId
            talk
            abstract
            edition
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
  return <Agenda data={data} {...props} />;
};

export default AgendaPage;

function Workshop({ data }) {
  return (
    <div className={styles.slot_content}>
      <Link to={`/${edition}/workshop/`}>
        <h3 className={styles.slot_title}>{data.title}</h3>
      </Link>
      <span>{data.description}</span>
      <SpeakersDetails list={data.speakers} />
    </div>
  );
}

function DayHeader({ data }) {
  const { day, date, title } = data;
  return (
    <header className={styles.day_header}>
      <h2 className={styles.day_title}>
        <span className={styles.day_weekday}>{day},</span> {date}
      </h2>
      <span className={styles.day_title}>{title}</span>
    </header>
  );
}

function SpeakersDetails({ list }) {
  return (
    <figure className={styles.speakers}>
      {list.map(speaker => (
        <div key={speaker.lastname}>
          <Img
            fluid={speaker.speakerImage.image.fluid}
            alt={`${speaker.firstname} ${speaker.firstname} photo`}
            className={styles.speaker_image}
          />
        </div>
      ))}

      <span>
        {list.map((speaker, i) => {
          return (
            <React.Fragment key={speaker.jsonId}>
              {i > 0 && " & "}
              <Link to={`/${edition}/speakers/${speaker.jsonId}`}>
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
        <div className={styles.slot_content}>
          <Link to={`/${edition}/agenda/${slot.talkId}`}>
            <h3 className={styles.slot_title}>{slot.title}</h3>
          </Link>
          <SpeakersDetails list={slot.speakers} />
        </div>
      </>
    );
  } else if (slot.description) {
    return (
      <div className={styles.slot_content}>
        <h3 className={styles.slot_title}>{slot.description}</h3>
      </div>
    );
  } else if (slot.placeholder) {
    return (
      <div className={styles.slot_content} style={{ alignSelf: "center" }}>
        <span>{slot.placeholder}</span>
      </div>
    );
  }
}

function mergeSpeakerDetails(speakersIdList, speakers, images) {
  return speakersIdList.map(speaker => {
    const speakerData = speakers.find(s => s.jsonId === speaker.jsonId);
    const speakerImage = images.find(e => speakerData.image.includes(e.base));
    return {
      ...speakerData,
      speakerImage,
    };
  });
}

function mergeWorkshopDetails(workshops, speakers, images) {
  return workshops.map(workshop => {
    const speakersDetails = mergeSpeakerDetails(
      workshop.speakers,
      speakers,
      images,
    );

    return {
      ...workshop,
      speakers: speakersDetails,
    };
  });
}

function mergeTalkDetails(agenda, talks, speakers, images) {
  return agenda.map(slot => {
    const { talkId } = slot;

    if (!talkId) {
      return slot;
    }

    const talkDetails = talks.find(talk => talk.jsonId === talkId);
    const speakersDetails = mergeSpeakerDetails(
      talkDetails.speakers,
      speakers,
      images,
    );

    return {
      ...slot,
      title: talkDetails.talk,
      speakers: speakersDetails,
    };
  });
}
