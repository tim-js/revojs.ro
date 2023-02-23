import React /*, { useEffect }*/ from "react";
import { StaticQuery, graphql /*, Link*/ } from "gatsby";
// import Img from "gatsby-image";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
// import Content from "@components/Content";
// import Section from "@components/Section";
// import Note from "@components/Note";
// import Button from "@components/Button";
// import { PurchaseTicket } from "@components/CTA";

// import { day0, day1, day2 } from "@data/2023/agenda";
// import { getEdition } from "@utils";

import styles from "./agenda.module.scss";

// const edition = getEdition();

const Agenda = ({ data }) => {
  // const { allTalksJson, allSpeakersJson, speakerImages } = data;

  // const talks = allTalksJson.edges
  //   .map(e => e.node)
  //   .filter(t => t.edition === edition);
  // const speakers = allSpeakersJson.edges
  //   .map(e => e.node)
  //   .filter(s => s.edition === edition);
  // const images = speakerImages.edges.map(e => e.node);

  // day0.workshops = mergeWorkshopDetails(day0.workshops, speakers, images);
  // day1.talks = mergeTalkDetails(day1.talks, talks, speakers, images);
  // day2.talks = mergeTalkDetails(day2.talks, talks, speakers, images);

  /*
  useEffect(() => {
    const mainNavLinks = document.querySelectorAll(".agenda-nav a");

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
    // console.log("add effect");
    return () => {
      window.removeEventListener("scroll", onScroll);
      // console.log("remove effect");
    };
  }, []);
  */

  return (
    <Layout title="revo.js Agenda" noFooterSeparation>
      <Header type="main" centered>
        <h1 className={`title2023 ${styles.agenda_image}`}>Agenda</h1>
        <p className="subtitle2023">
          Will be annouced later. <br /> Stay tuned...
        </p>
      </Header>

      {/* <div className="agenda-nav-wrapper">
        <nav className="agenda-nav">
          <a href="#workshop-day">
            <strong className="mono">Oct 7nd</strong>
          </a>
          <a href="#conference-day1">
            <strong className="mono">Oct 8rd</strong>
          </a>
          <a href="#conference-day2">
            <strong className="mono">Oct 9th</strong>
          </a>
        </nav>
      </div> */}

      {/* <Section light className="agenda-section">
        <section id="workshop-day" className="agenda-content">
          <WorkshopDay data={day0} />
        </section>

        <section id="conference-day1" className="agenda-content">
          <ConferenceDay data={day1} />
        </section>

        <section id="conference-day2" className="agenda-content">
          <ConferenceDay data={day2} />
        </section>

        <div style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <p className="cta-text">Don't miss out to see these great talks</p>
          <PurchaseTicket label="Grab your conference ticket" white />
        </div>

        <p className="agenda-note">
          <strong>NOTE:</strong> minor changes to the agenda might occur
        </p>
      </Section> */}
    </Layout>
  );
  /*
  function WorkshopDay({ data }) {
    const { dateIso, workshops } = data;

    return (
      <>
        <DayHeader data={data} />
        <ul className="agenda-slots">
          {workshops.map(workshop => (
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
          {talks.map(talk => (
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
  */
};

export default (props) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allTalksJson {
            edges {
              node {
                id
                talk
                abstract
                edition
                speakers {
                  id
                }
              }
            }
          }
          allSpeakersJson {
            edges {
              node {
                id
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

/*
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
      {list.map(speaker => (
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
            <React.Fragment key={speaker.id}>
              {i > 0 && " & "}
              <Link to={`/${edition}/speakers/${speaker.id}`}>
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
  return speakersIdList.map(speaker => {
    const speakerData = speakers.find(s => s.id === speaker.id);
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

    const talkDetails = talks.find(talk => talk.id === talkId);
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
*/
