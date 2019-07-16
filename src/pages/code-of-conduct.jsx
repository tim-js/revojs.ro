import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";

export default () => {
  return (
    <Layout title="revo.js Code of Conduct">
      <Header centered type="secondary">
        <h1>Code of Conduct</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              All attendees, speakers, sponsors and volunteers at our conference
              are required to agree with the following code of conduct.
            </p>
            <p>
              Organisers will enforce this code throughout the event. We expect
              cooperation from all participants to help ensure a safe
              environment for everybody.
            </p>
          </Note>

          <section>
            <h2>No harassment</h2>
            <p>
              Harassment includes any offensive verbal or written comments
              related, but not limited to any of the following:
            </p>
            <ul className="bullet">
              <li>gender, gender identity or expression;</li>
              <li>sexual orientation, race, ethnicity, religion;</li>
              <li>age, disability, physical appearance, body size;</li>
              <li>technology choices;</li>
              <li>
                deliberate intimidation, stalking, following, harassing
                photography or recording;
              </li>
              <li>sustained disruption of talks or other events;</li>
              <li>sexual images in public spaces;</li>
              <li>
                inappropriate physical contact and unwelcome sexual attention.
              </li>
            </ul>

            <br />
            <p>
              We expect all participants to follow these rules at the
              conference, workshop venues and conference-related social events.
            </p>
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
              </strong>
            </p>

            <p>
              Conference staff can be identified as they'll be wearing branded
              clothing and/or badges.
            </p>

            <p>
              Conference staff will be happy to help participants contact venue
              security or local law enforcement, provide escorts, or otherwise
              assist those experiencing harassment to feel safe for the duration
              of the conference.
            </p>

            <p>
              <strong className="highlight">We value your attendance.</strong>
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
