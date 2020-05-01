import React from "react";
// import { Link } from "gatsby";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";
import Text from "@components/Text";

export default () => {
  return (
    <Layout title="revo.js COVID-19 Updates">
      <Header centered type="secondary">
        <h1>COVID-19 Updates</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              In the midst of the current COVID-19 pandemic, we were all faced
              with several tough decisions.
            </p>
            <p>
              Unfortunately, after carefully monitoring the situation and
              considering all possible scenarios, we had to make the toughest
              decision event organizers can make.
            </p>
          </Note>

          <section>
            <h2> revo.js 2020 is cancelled</h2>
            <p>
              Undoubtedly, we didn’t take this decision with an easy heart. On
              the contrary. Our hearts were telling us to continue preparations
              as planned.
            </p>
            <p>
              Still, our reasoning reinforced our belief that cancelling is the
              wisest and most correct thing we can do at this given moment,
              based on the data we have available. Here is why:
            </p>

            <ul>
              <li>
                <h3>Safety comes first</h3>
                <p>
                  Currently, there’s no way to guarantee we’ll be able to offer
                  a 100% safe environment in October, even if we’ll be legally
                  allowed to organize the event by then.
                </p>
              </li>
              <li>
                <h3>Too many unknowns</h3>
                <p>
                  We’re flexible and adaptable, but the current degree of
                  uncertainty regarding{" "}
                  <strong>travelling and social gatherings measures</strong>{" "}
                  makes it impossible for us to predict whether or not things
                  will pick up. We are reasonably sure we would have had to
                  cancel at a much later date.
                </p>
              </li>
              <li>
                <h3>Won’t compromise quality</h3>
                <p>
                  Even if by October we would be legally allowed to hold the
                  event, we’re certain that we would have been forced to make
                  compromises with regards to quality and to the overall
                  experience. The current economic and social context would have
                  definitely taken its toll on our conference and would have
                  chipped away from revo.js’ atmosphere.
                </p>
              </li>
            </ul>

            <h2>What's next?</h2>
            <p>
              <strong>We plan to revolve in 2021</strong> with our second
              edition and make it up to everybody for this gap year. Once we
              have more certainty as to when this pandemic will subside, we’ll
              get back to you with fresh news.
            </p>

            <p>
              Until then, we want to{" "}
              <Text color="accent" bold>
                thank everybody who was involved
              </Text>
              , one way or another, in the organizing of this 2020 edition. Our
              lineup of{" "}
              <strong>speakers, sponsors, supporters and CFP applicants</strong>{" "}
              were more than ready to push to the finish line. We tip our hats
              to all of you, our revo.crew.
            </p>

            <br />

            <p>
              <Text color="accent" bold>
                Stay healthy, stay safe.
              </Text>
            </p>
          </section>
        </Content>
      </Section>
    </Layout>
  );
};
