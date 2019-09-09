import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
// import Note from "@components/Note";

export default () => {
  return (
    <Layout title="revo.js Speaker Info">
      <Header centered type="secondary">
        <h1>Speaker Info</h1>
      </Header>

      <Section light>
        <Content centered>
          <p>
            This page contains all the important information you need as a
            speaker for revo.js 2019:
            <ul>
              <li>
                <a href="#schedule">Schedule Overview</a>
              </li>
              <li>
                <a href="#contact">Contact information</a>
              </li>
              <li>
                <a href="#arrival">Arrival in Timișoara</a>
              </li>
              <li>
                <a href="#dinner">Speakers' Dinner</a>
              </li>
              <li>
                <a href="#venue">The Venue</a>
              </li>
              <li>
                <a href="#talk">Your Talk</a>
              </li>
              <li>
                <a href="#afterparty">After Party</a>
              </li>
              <li>
                <a href="#trip">Saturday Trip</a>
              </li>
              <li>
                and <a href="#more">more</a>.
              </li>
            </ul>
          </p>
          <p>
            <strong>Please bookmark this page.</strong>
          </p>

          <div className="blog-post">
            <section id="schedule">
              <h2>Schedule Overview</h2>
              <h3>Wed, 2nd of October</h3>
              <ul className="bullet">
                <li>
                  <strong>20:00 - Speakers’ Dinner</strong> (location TBD)
                </li>
              </ul>
              <h3>Thu, 3rd of October</h3>
              <ul className="bullet">
                <li>
                  <strong>8:00 - Conference Registration and Coffee</strong>
                  <br />
                  Please arrive at the venue at least 2 hours before your talk
                </li>
              </ul>
              <h3>Fri, 4th of October</h3>
              <ul className="bullet">
                <li>
                  <strong>8:30 - Conference Registration and Coffee</strong>
                  <br />
                  Please arrive at the venue at least 2 hours before your talk
                </li>
                <li>
                  <strong>19:00 - After Party</strong> at{" "}
                  <a
                    href="https://goo.gl/maps/J8tnRqY7F8KQB5618"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Charlatan's Pub
                  </a>
                </li>
              </ul>
              <h3>Sat, 5th of October</h3>
              <ul className="bullet">
                <li>
                  <strong>14:30 - Saturday Trip</strong> to the{" "}
                  <a
                    href="https://goo.gl/maps/6FvMtfjbMFSm1CZ47"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Recas Winery
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 id="contact">Contact information</h2>
              <p>
                <strong>Andrea Sisak</strong> is your contact during your stay
                in Timisoara. If you have any questions or problems, please talk
                to her.
              </p>
              <p>
                You can also contact <strong>Luci</strong> or{" "}
                <strong>Andrei</strong> at any time during your stay.
              </p>
              <h3>Andrea Sisak</h3>
              <strong>Phone</strong>: +40 741 063 012
              <br />
              <strong>Email</strong>: andrea.sisak@e-spres-oh.com
              <br />
              <h3>Luci Pacurar</h3>
              <strong>Phone</strong>: +40 726 356 446
              <br />
              <strong>Email</strong>: luci.pacurar@gmail.com
              <br />
              <strong>Twitter</strong>:{" "}
              <a
                href="https://twitter.com/lucianpacurar"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lucianpacurar
              </a>
              <h3>Andrei Pfeiffer</h3>
              <strong>Phone</strong>: +40 720 340 104
              <br />
              <strong>Email</strong>: andrei@upsidedown.ro
              <br />
              <strong>Twitter</strong>:{" "}
              <a
                href="https://twitter.com/pfeiffer_andrei"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pfeiffer_andrei
              </a>
            </section>

            <section>
              <h2 id="arrival">Arrival in Timișoara</h2>

              <h3>Travel from the airport</h3>
              <p>
                If you arrive by plane at the{" "}
                <strong>Traian Vuia Airport</strong> in Timișoara (
                <strong>TSR</strong>), there will be a person from our team
                waiting for you there.
              </p>
              <p>
                Andrea Sisak will coordinate every detail regarding
                transportation from/to the airport.
              </p>

              <h3>The hotel</h3>
              <p>
                During the conference, you will stay at{" "}
                <strong>Hotel Timișoara</strong>, situated in the center of the
                town. It is in walking distance of all the places you might want
                to visit during your stay.
              </p>

              <p>
                The hotel address is: Strada Mărășești 1-3, Timișoara.
                <br />
                Their phone number is: +40 256 498 852.
              </p>

              <p>
                You should know your check-in and check-out dates. If you don't,
                please contact Andrea. Your room is booked in your name and
                already paid for. Breakfast and WIFI are included.
              </p>
            </section>

            <section>
              <h2 id="dinner">Speakers’ dinner</h2>
              <p>
                <strong>Wednesday, 2nd of October</strong>, at{" "}
                <strong>20:00</strong>, there will be a speakers’ dinner. Andrea
                will reach out to those of you who are attending with further
                details about the location.
              </p>

              <p>
                It will be a great opportunity to meet the other speakers and
                the team behind revo.js.
              </p>

              <p>All costs are covered.</p>
            </section>

            <section>
              <h2 id="venue">The venue</h2>
              <p>
                Revo.js 2019 will take place at the{" "}
                <strong>Multifunctional Venue of CJT</strong> or Consiliul
                Județean Timiș (<strong>Timiș County Council</strong>
                ).
              </p>
              <p>
                The venue address is: Bulevardul Revoluției din 1989 nr. 17,
                Timișoara 300034.
                <br />
                It's a 15-minute walk from the hotel.
              </p>
              <h3>AV / Technical</h3>
              <p>
                The venue is equipped with a Full HD 1080P projector, having a
                1920x1080 resolution.
              </p>
              <p>
                On stage there will be an HDMI connection. We'll provide mini-DP
                and USB-C adapters if needed. If you need another type of
                adapter in order to connect your laptop to the HDMI, please
                bring your own.
              </p>
              <p>
                Also, if your presentation requires sound, please let us know
                before the conference.
              </p>
              <h3>WIFI</h3>
              <p>
                The venue has WIFI, but you should prepare your talk and demos
                as if there is no Internet connection available, as it might not
                function properly due to the large number of people who will use
                it.
              </p>
            </section>

            <section>
              <h2 id="talk">Your Talk</h2>
              <p>
                Be sure to make yourself familiar with the conference schedule
                and the time of your talk.
              </p>
              <p>
                <strong>
                  We encourage you to stay at the venue during the whole
                  conference.
                </strong>
              </p>
              <p>
                However, if that's not possible, please be at the venue{" "}
                <strong>at least 2 hours before</strong> it is your turn to
                enter the stage.
              </p>
              <p>
                The talks will be presented in pairs and there will be a break
                before each pair. During that break, we will need to make sure
                that everything related to your presentation works as expected.
              </p>
              <h3>Content accessibility</h3>
              <p>
                <strong>
                  There will be visually impaired people among the participants
                </strong>
                , so we are striving to make the content of the conference
                accessible to everybody.
              </p>
              <p>
                That’s why we strongly suggest you go through our{" "}
                <a
                  href="https://revojs.ro/blog/conference-content-accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Content Accessibility Guidelines
                </a>
                .
              </p>
              <h3>Live captions</h3>
              <p>
                There will be live captions for all talks, which will later be
                used for video captions on the recorded videos.{" "}
              </p>
              <p>
                In order for this to go as planned, please provide us with as
                much insight as possible about your presentation, before the
                conference:
              </p>
              <ul>
                <li>
                  <strong>Existing recordings</strong> of your talk;
                </li>
                <li>
                  <strong>Slides</strong>, even if they are not final;
                </li>
                <li>
                  <strong>Transcript</strong>, even if partial;
                </li>
                <li>
                  <strong>A list of specialized terms and technologies</strong>{" "}
                  that you will use in your delivery.
                </li>
              </ul>
              <p>
                Please send these by email at{" "}
                <a
                  href="mailto:info@revojs.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  info@revojs.ro
                </a>
                .
              </p>
              <h3>Q&A</h3>
              <p>We don’t plan to have on-stage Q&A sessions.</p>
              <p>
                However, <strong>we encourage face-to-face discussions</strong>,
                so it would be great if the participants had the chance to talk
                to you.
              </p>
              <p>
                Please let them know, at the end of your talk, where and when
                they can find you and talk to you.
              </p>
              <h3>Video recording</h3>
              <p>
                Your talk will be professionally recorded and published on our{" "}
                <a
                  href="https://www.youtube.com/user/timisoarajavascript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube channel
                </a>{" "}
                as fast as possible after the conference. If you don’t want your
                talk to be recorded and published, please let us know up front.
              </p>
              <p>
                All videos will be published under a{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc-sa/3.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY-NC-SA 3.0 licence
                </a>
                .
              </p>

              <p></p>
              <p>There won't be a livestream.</p>
            </section>

            <section>
              <h2 id="afterparty">After Party</h2>
              <p>
                We’ll have a networking <strong>After Party</strong> on{" "}
                <strong>Friday, the 4th of October</strong>, at{" "}
                <a
                  href="https://goo.gl/maps/J8tnRqY7F8KQB5618"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Charlatan's Pub
                </a>
                . The party will start at <strong>19:00</strong>.
              </p>
              <p>
                All participants are invited, so they’ll have a second chance to
                talk to you if they didn’t manage to do it during the
                conference.
              </p>
              <p>All costs are covered.</p>
            </section>

            <section>
              <h2 id="trip">Saturday Trip</h2>
              <p>
                <strong>Saturday</strong>, the <strong>5th of October</strong>,
                at <strong>15:00</strong>, we’ll go on a trip at the{" "}
                <a
                  href="https://goo.gl/maps/6FvMtfjbMFSm1CZ47"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Recas Winery
                </a>
                , 30km away from Timisoara.
              </p>
              <p>
                We’ll taste some of their mid and top wines, have a meal
                (non-vegetarian/vegetarian) and a guided tour of the winery.
              </p>
              <p>
                A bus will pick you up at the hotel, we’ll spend around 3-4
                hours there, then the bus will get you back to your hotel.
              </p>
              <p>All costs are covered.</p>
            </section>

            <section>
              <h2 id="more">Official hashtag</h2>
              <p>
                We would feel deeply honored if you mentioned us on social
                media.
              </p>
              <p>
                If you do, our official hashtag is <strong>#revojs</strong>.
              </p>
            </section>
          </div>
        </Content>
      </Section>
    </Layout>
  );
};
