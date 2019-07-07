import React, { useEffect } from "react";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
// import Note from "@components/Note";
// import Button from "@components/Button";

import "./agenda.scss";

export default () => {
  useEffect(() => {
    const mainNavLinks = document.querySelectorAll(".agenda-nav a");

    function onScroll() {
      const scrolled = window.scrollY;
      // console.log({ scrolled });

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

  return (
    <Layout title="revo.js Agenda">
      <Header type="main" image="agenda-image">
        <h1>Agenda</h1>
      </Header>

      <Section light>
        <Content centered>
          <nav className="agenda-nav">
            <a href="#workshops-day">
              <strong>Workshop</strong> Day
            </a>
            <a href="#conference-day1">
              <strong>Conference</strong> Day #1
            </a>
            <a href="#conference-day2">
              <strong>Conference</strong> Day #2
            </a>
          </nav>

          <section
            id="workshops-day"
            className="agenda-content genda-workshops"
          >
            <h2>Workshop Day</h2>

            <p>Workshop with Gleb</p>
          </section>

          <section
            id="conference-day1"
            className="agenda-content agenda-conference"
          >
            <h2>Conference Day #1</h2>

            <p>agenda will be annouced soon</p>
          </section>

          <section
            id="conference-day2"
            className="agenda-content agenda-conference"
          >
            <h2>Conference Day #2</h2>

            <p>agenda will be annouced soon</p>
          </section>
        </Content>
      </Section>
    </Layout>
  );

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
