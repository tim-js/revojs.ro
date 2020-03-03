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
              We are committed to providing and nurturing a friendly, safe and
              welcoming environment for everybody.
            </p>
            <p>
              That's why all attendees, speakers, sponsors and volunteers at
              revo.js are required to adhere to the following code of conduct.
            </p>
          </Note>

          <section>
            <h2>No harassment</h2>
            <p>
              Harassment includes any verbal or written offensive comments
              related – but not limited to – any of the following:
            </p>
            <ul className="bullet">
              <li>gender, gender identity;</li>
              <li>sexual orientation;</li>
              <li>race, religion (or lack thereof);</li>
              <li>ethnicity, socioeconomic status;</li>
              <li>age, disability, physical appearance, body size;</li>
              <li>technology choices, level of experience;</li>
              <li>
                deliberate intimidation, stalking, following, harassing
                photography or recording;
              </li>
              <li>sustained disruption of talks or other events;</li>
              <li>sexual images in public spaces;</li>
              <li>
                inappropriate physical contact or unwelcome sexual attention.
              </li>
            </ul>

            <br />
            <p>
              We expect all participants to follow these rules at all times
              during the conference, workshops, after-party and at any other
              conference-related social event.
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
              If a participant engages in any harassing behavior, the conference
              organisers reserve the right to take any action deemed
              appropriate, including expelling the offender from the conference{" "}
              <strong className="highlight">with no refund</strong> and refusing
              future admission to conference-related events.
            </p>

            <p>
              Sponsors are also subject to the anti-harassment policy. In
              particular, sponsors should not use sexualised images or
              activities. Booth staff (including volunteers) are forbidden to
              use sexualised clothing/uniforms/costumes, or otherwise create a
              sexualised environment through any means.
            </p>
          </section>

          <section>
            <h2>Reporting</h2>
            <p>
              <strong>
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please notify a member of
                the conference staff immediately or write to us on{" "}
                <a href="mailto:coc@revojs.ro">coc@revojs.ro</a>.
              </strong>
            </p>

            <p>
              Our conference staff can be easily identified as they are wearing
              branded clothing and/or badges. They are happy to help
              participants contact the venue security or the local law
              enforcement, provide escorts, or otherwise assist and support
              those experiencing harassment to feel safe for the duration of the
              conference.
            </p>

            <p>
              We hope that, as a community, we can nurture together an
              environment that’s free from any prejudice, offensive behavior and
              harassment.
            </p>

            <p>
              <strong className="highlight">
                We really value your attendance and your willingness to follow
                our Code of Conduct.
              </strong>
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
