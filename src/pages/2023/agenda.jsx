import React, { useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import { OutboundLink } from "gatsby-plugin-google-gtag";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
import Section from "@components/Section";
// import Note from "@components/Note";
// import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";

import { day1, day2 } from "@data/2023/agenda";

import { getEdition } from "@utils";

import * as styles from "./agenda.module.scss";

const edition = getEdition();
const ACTIVE_CLASS = styles.active;

const Agenda = ({ data }) => {
  const { allTalksJson, allSpeakersJson, speakerImages } = data;

  const talks = allTalksJson.edges.map((e) => e.node);
  const speakers = allSpeakersJson.edges.map((e) => e.node);
  const images = speakerImages.edges.map((e) => e.node);

  // day0.workshops = mergeWorkshopDetails(day0.workshops, speakers, images);
  day1.talks = mergeTalkDetails(day1.talks, talks, speakers, images);
  day2.talks = mergeTalkDetails(day2.talks, talks, speakers, images);

  useEffect(() => {
    const mainNavLinks = document.querySelectorAll(`.${styles.nav} a`);

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

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Layout title="revo.js Agenda">
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.agenda_image}`}>Agenda</h1>
        {/* <p className="subtitle2023">
          Will be announced later in August. Stay tuned...
        </p> */}
      </Header>

      <div className={`${styles.nav_wrapper}`}>
        <nav className={styles.nav}>
          {/* <a href="#workshop-day">
            <span className={styles.nav_title}>{day0.title}</span>
            <strong className="mono">Oct 4th</strong>
          </a> */}
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
        {/* <section id="workshop-day" className={styles.content}>
          <WorkshopDay data={day0} />
        </section> */}

        <section id="conference-day1" className={styles.content}>
          <ConferenceDay data={day1} />
        </section>

        <section id="conference-day2" className={styles.content}>
          <ConferenceDay data={day2}>
            <AfterParty />
          </ConferenceDay>
        </section>

        {/* <div style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <p className={styles.cta}>Don't miss out to see these great talks</p>
          <PurchaseTicket label="Grab your conference ticket" white />
        </div> */}

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
          {workshops.map((workshop) => (
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

  function ConferenceDay({ data, children }) {
    const { dateIso, talks } = data;

    return (
      <>
        <DayHeader data={data} />

        <ul className={styles.slots}>
          {talks.map((talk) => (
            <li
              key={talk.time}
              className={`${styles.slot} ${
                talk.talkId ? styles.talk : styles.coffee
              }`}
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
          {children}
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

const AfterParty = () => {
  return (
    <li key="afterparty" className={`${styles.slot} ${styles.coffee}`}>
      <time dateTime={`19:00`} className={styles.slot_afterparty_time}>
        19:00
      </time>
      <div className={styles.slot_afterparty_content}>
        <span className={styles.slot_afterparty_title}>After party</span>
        <div className={styles.slot_afterparty}>
          <span className={styles.slot_afterparty_label}>Powered by</span>
          <img
            src={require(`@assets/sponsors/2023/visma_logo.svg`).default}
            alt="Visma Logo"
          />
        </div>
      </div>
    </li>
  );
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
      speakerImages: allFile(filter: { relativePath: { glob: "speakers/*" } }) {
        edges {
          node {
            base
            childImageSharp {
              gatsbyImageData(width: 400, height: 400, layout: CONSTRAINED)
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
      <div>
        <Link to={`/${edition}/workshop/`}>
          <h3 className={styles.slot_title}>{data.title}</h3>
        </Link>
        <div>{data.description}</div>

        <figure className={styles.speakers}>
          {data.speakers.map((speaker) => (
            <SpeakerPhoto speaker={speaker} />
          ))}

          <div>
            {data.speakers.map((speaker, i) => (
              <SpeakerInfo speaker={speaker} multiple={i > 0} />
            ))}
          </div>
        </figure>
      </div>
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

function SpeakerPhoto({ speaker }) {
  return (
    <div key={speaker.lastname}>
      <GatsbyImage
        image={speaker.speakerImage.childImageSharp.gatsbyImageData}
        alt={`${speaker.firstname} ${speaker.firstname} photo`}
        className={styles.speaker_image}
      />
    </div>
  );
}

function SpeakerInfo({ speaker, multiple = false }) {
  return (
    <React.Fragment key={speaker.speakerId}>
      {multiple > 0 && " & "}
      <Link to={`/${edition}/speakers/${speaker.speakerId}`}>
        {`${speaker.firstname} ${speaker.lastname}`}
      </Link>
    </React.Fragment>
  );
}

function Slot({ slot }) {
  if (slot.talkId) {
    // we have only 1 speaker / talk
    const speaker = slot.speakers[0];

    return (
      <Link to={`/${edition}/speakers/${speaker.speakerId}`}>
        <div className={styles.slot_content}>
          <SpeakerPhoto speaker={speaker} />
          <div>
            <strong className={styles.slot_title}>{slot.title}</strong>
            {`${speaker.firstname} ${speaker.lastname}`}
          </div>
        </div>
      </Link>
    );
  } else if (slot.description) {
    return (
      // <div className={styles.slot_content}>
      <span className={styles.slot_title}>{slot.description}</span>
      // </div>
    );
  } else if (slot.placeholder) {
    return (
      // <div className={styles.slot_content} style={{ alignSelf: "center" }}>
      <span>{slot.placeholder}</span>
      // </div>
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
