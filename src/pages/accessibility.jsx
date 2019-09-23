import React from "react";
import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

export default () => {
  return (
    <Layout title="revo.js Accessibility">
      <Header centered type="secondary">
        <h1>Accessibility</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              One of our main goals is to make this event accessible to anyone
              interested in the JavaScript ecosystem.
            </p>
            <p>
              Besides diversity and inclusion programs, we're also making
              efforts towards accessibility.
            </p>
          </Note>

          <section>
            <h2>Wheel chair access</h2>
            <p>
              The venue is fully accessible for participants in wheel chairs.
            </p>
          </section>

          <section>
            <h2>Live captions</h2>
            <p>
              We'll have <strong>live captions</strong> during all presentations
              for participants with various types of{" "}
              <strong>hearing impairment</strong>, but also for{" "}
              <strong>non-native English</strong> participants.
            </p>
            <p>
              We plan to use the transcripts in the video recordings of the
              talks, as well.
            </p>
          </section>

          <section>
            <h2>Inclusive presentation delivery</h2>
            <p>
              Last, but not least, we're addressing all{" "}
              <strong>visually impaired</strong> or <strong>dyslexic</strong>{" "}
              participants, by encouraging all speakers to{" "}
              <Link to="blog/conference-content-accessibility#5-describe-in-words-all-visual-content">
                describe in words all the visual content
              </Link>{" "}
              of their presentation.
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
