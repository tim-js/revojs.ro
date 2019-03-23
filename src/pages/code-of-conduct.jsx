import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";

import revojs from "@assets/revo.js.svg";

export default () => {
  return (
    <Layout>
      <Header centered>
        <div>
          <h1>Code of Conduct</h1>
          <Content centered>
            <br />
            <p className="light-faded">
              All attendees, speakers, sponsors and volunteers at our conference
              are required to agree with the following code of conduct.
              Organisers will enforce this code throughout the event. We expect
              cooperation from all participants to help ensure a safe
              environment for everybody.
            </p>
          </Content>
        </div>
      </Header>

      <Section light>
        <Content centered>
          <section>
            <h2 className="first">No harassment</h2>
            <p>
              Harassment includes offensive verbal or written comments related,
              but not limited to:
            </p>
            <ul className="bullet">
              <li>gender, gender identity or expression</li>
              <li>sexual orientation, race, ethnicity, religion</li>
              <li>age, disability, physical appearance, body size</li>
              <li>technology choices</li>
              <li>
                deliberate intimidation, stalking, following, harassing
                photography or recording
              </li>
              <li>sustained disruption of talks or other events</li>
              <li>sexual images in public spaces</li>
              <li>
                inappropriate physical contact and unwelcome sexual attention
              </li>
            </ul>

            <br />

            <p className="highlight">
              <strong>
                Participants asked to stop any harassing behavior are expected
                to comply immediately.
              </strong>
            </p>
          </section>

          <section>
            <h2>Enforcement</h2>
            <p>
              If a participant engages in harassing behavior, the conference
              organisers may take any action they deem appropriate, including
              warning the offender or expulsion from the conference{" "}
              <strong className="highlight">with no refund</strong>.
            </p>

            <p>
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualised images, activities,
              or other material. Booth staff (including volunteers) should not
              use sexualised clothing/uniforms/costumes, or otherwise create a
              sexualised environment.
            </p>
          </section>

          <section>
            <h2>Reporting</h2>
            <p>
              <strong>
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact a member of
                conference staff immediately.
              </strong>{" "}
              Conference staff can be identified as they'll be wearing branded
              clothing and/or badges.
            </p>

            <p>
              Conference staff will be happy to help participants contact venue
              security or local law enforcement, provide escorts, or otherwise
              assist those experiencing harassment to feel safe for the duration
              of the conference. We value your attendance.
            </p>

            <p>
              We expect all participants to follow these rules at conference,
              workshop venues and conference-related social events.
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
