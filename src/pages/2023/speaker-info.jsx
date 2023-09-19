import React from "react";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
// import Note from "@components/Note";

const SpeakerInfo = () => {
  return (
    <Layout title="revo.js Speaker Info 2023">
      <Header centered type="secondary">
        <h1>Speaker Info</h1>
      </Header>

      <Section light>
        <Content centered>
          <p>
            This page contains all the important information you need as a
            speaker for revo.js 2023:
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
                <a href="#timisoara">Around Timișoara</a>
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
              <h3>Wed, 4th of October</h3>
              <ul className="bullet">
                <li>
                  <strong>19:00 - Speakers’ Dinner</strong> at{" "}
                  <a
                    href="https://goo.gl/maps/qUg2xCn4Vtkt2R9A6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PASO Local Cuisine
                  </a>
                </li>
              </ul>
              <h3>Thu, 5th of October</h3>
              <ul className="bullet">
                <li>
                  <strong>8:00 - Conference Registration and Coffee</strong>
                  <br />
                  Please arrive at the venue at least 2 hours before your talk
                </li>
              </ul>
              <h3>Fri, 6th of October</h3>
              <ul className="bullet">
                <li>
                  <strong>8:30 - Conference Registration and Coffee</strong>
                  <br />
                  Please arrive at the venue at least 2 hours before your talk
                </li>
                <li>
                  <strong>19:00 - After Party</strong> at{" "}
                  <a
                    href="https://goo.gl/maps/fQvZBzCc5Z5G94xA6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reciproc Café
                  </a>
                </li>
              </ul>
              <h3>Sat, 5th of October</h3>
              <ul className="bullet">
                <li>
                  <strong>11:00 - Saturday Trip</strong> to{" "}
                  <a
                    href="https://maps.app.goo.gl/5p4HGsYq7FXviMF7A"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    a traditional Romanian lunch
                  </a>{" "}
                  (pickup from the hotel)
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
                You can also contact <strong>Lucian</strong> or{" "}
                <strong>Andrei</strong> at any time during your stay.
              </p>
              <h3>Andrea Sisak</h3>
              <strong>Phone</strong>: +40 741 063 012
              <br />
              <h3>Lucian Pacurar</h3>
              <strong>Phone</strong>: +40 726 356 446
              <br />
              <strong>X (former Twitter)</strong>:{" "}
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
              <strong>X (former Twitter)</strong>:{" "}
              <a
                href="https://twitter.com/pfeiffer_andrei"
                target="_blank"
                rel="noopener noreferrer"
              >
                @pfeiffer_andrei
              </a>
              <br />
              <br />
              <p>
                You can also reach any of us by email at{" "}
                <a href="mailto:info@revojs.ro">info@revojs.ro</a>, or on our
                Slack workplace at{" "}
                <a
                  href="https://revoconference.slack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  revoconference.slack.com
                </a>
              </p>
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
                <a
                  href="https://goo.gl/maps/jSkmaqWhodQ3sF9V8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Hotel Timișoara</strong>
                </a>
                , situated in the center of the town. It is within walking
                distance of all the places you might want to visit during your
                stay.
              </p>
              <p>
                The <strong>hotel address</strong> is: Strada Mărășești 1-3,
                Timișoara.
                <br />
                Their <strong>phone number</strong> is: +40 256 498 852.
              </p>
              <p>
                You should know your check-in and check-out dates. If you don't,
                please contact Andrea. Your room is booked in your name and
                already paid for.
              </p>
              <p>Breakfast and WIFI are included.</p>
            </section>

            <section>
              <h2 id="dinner">Speakers’ dinner</h2>
              <p>
                <strong>Wednesday, 4nd of October</strong>, at{" "}
                <strong>19:00</strong>, there will be a speakers’ dinner at{" "}
                <a
                  href="https://goo.gl/maps/qUg2xCn4Vtkt2R9A6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PASO Local Cuisine
                </a>
                , 8 minutes away from your hotel.
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
                revo.js 2023 will take place at the{" "}
                <a
                  href="https://g.page/Iulius_Congress_Hall?share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Iulius Congress Hall</strong>{" "}
                </a>
                situated in the heart of Timisoara’s modern side, inside{" "}
                <strong>Iulius Town</strong>.
              </p>
              <p>
                The venue address is: Str. Aristide Demetriade nr. 1, Timișoara
                300088.
                <br />
                It's about 22-minute walk from the hotel.
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
                  <strong>Existing recordings</strong> of your talk, or;
                </li>
                <li>
                  <strong>Slides</strong>, even if they are not final, or;
                </li>
                <li>
                  <strong>Transcript</strong>, even if partial, or not final,
                  or;
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
                <strong>Friday, the 6th of October</strong>, at{" "}
                <a
                  href="https://goo.gl/maps/fQvZBzCc5Z5G94xA6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reciproc Café
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
                <strong>Saturday</strong>, the <strong>7th of October</strong>,
                at <strong>11:00</strong>, we’ll go on a trip to Coșteiu de Sus
                for a{" "}
                <a
                  href="https://maps.app.goo.gl/KZwW43vVFSyQVAM1A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  traditional Romanian lunch
                </a>
                , about 100km away from Timisoara.
              </p>
              <p>
                We’ll taste several traditional Romanian dishes. Both
                non-vegetarian and vegetarian options are available.
              </p>
              <p>
                A bus will pick you up at the hotel, we’ll spend around 3-4
                hours there, then the bus will get you back to your hotel.
              </p>
              <p>All costs are covered.</p>
            </section>

            <section>
              <h2 id="timisoara">Around Timișoara</h2>
              <p>
                We've put together a list of interesting places that you could
                and should visit during your stay in Timișoara. This year,
                Timișoara is an European Capital of Culture, so there are
                several events linked to this.
              </p>

              <h3 className="dark">Events</h3>
              <ul>
                <li>
                  <a
                    href="https://celebrare.timisoara2023.eu/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>City celebration</strong>
                  </a>{" "}
                  will have a lot of events for everyone.
                </li>
              </ul>

              <h3 className="dark">Points of interest</h3>
              <ul>
                <li>
                  <strong>The old city center,</strong> also called{" "}
                  <a
                    href="https://goo.gl/maps/w7t6s9s4bGThzbVq7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Union Square</strong>
                  </a>
                  , is the most beautiful part of the city, filled with history
                  and culture. Worth to walk around and enjoy the art nouveau
                  and baroque architecture.
                </li>
                <li>
                  <strong>The Historical Neighborhoods</strong> namely{" "}
                  <a
                    href="https://goo.gl/maps/bV9jpnkipmm8Urpp7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Fortress</strong>
                  </a>
                  , <strong>Fabric</strong>, <strong>Iosefin</strong> and{" "}
                  <strong>Elisabetin</strong> are a great way to experience the
                  history of Timișoara at your own pace.
                </li>
                <li>
                  <strong>Guided city tours</strong> are the best way to quickly
                  become acquainted with what makes Timișoara special. There are
                  a lot of stories to be told and several tours to choose from,
                  for example{" "}
                  <a
                    href="http://www.timisoaracitytours.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    City Tours
                  </a>
                  .
                </li>
                <li>
                  The{" "}
                  <a
                    href="https://goo.gl/maps/VbD3eBNQhb4H3MmL6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Art museum</strong>
                  </a>{" "}
                  is located in the Old Town and offers many temporary and
                  permanent exhibitions, like Corneliu Baba, Romanian and
                  European Art exhibitions.
                </li>
                <li>
                  <strong>The three synagogues</strong>, with their specific
                  architecture, are well worth a visit.{" "}
                  <a
                    href="https://goo.gl/maps/iRUx9WFMCAe5CvEGA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Stronghold Synagogue
                  </a>{" "}
                  was built around 1863-1865 in Moorish style.{" "}
                  <a
                    href="https://goo.gl/maps/8JqbuZLrmag5bQi19"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Iosefin Synagogue
                  </a>
                  , also called the Orthodox Temple, is located in Iosefin
                  neighborhood. The last one is the{" "}
                  <a
                    href="https://goo.gl/maps/w6Dx178qvggKUnCr8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fabric New Synagogue
                  </a>
                  , which is a Neologue synagogue in the Fabric neighborhood.
                </li>
                <li>
                  <strong>Trip to Herneacova.</strong> If you want to make a
                  trip outside the city,{" "}
                  <a
                    href="https://www.herneacova.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Herneacova
                  </a>{" "}
                  is a popular destination. There is a restaurant, an adventure
                  parc and, if you're up for it, you can also do horse riding.
                </li>
                <li>
                  <strong>Trip to Bazoș.</strong> If you prefer a quiet walk
                  outside the city,{" "}
                  <a
                    href="https://goo.gl/maps/EePt3SQGbab3aqAx8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bazoș Dendrological park
                  </a>{" "}
                  is a great destination. There's also a restaurant nearby.
                </li>
              </ul>

              <h3 className="dark">Specialty Coffee</h3>
              <ul>
                <li>
                  <a
                    href="https://goo.gl/maps/dhiHvfYNWLe5KNMV6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Doppio</strong>
                  </a>{" "}
                  offers different coffee almost everyday. It's only a few steps
                  away from your hotel.
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/DZpjzxfS8fPZwR9L9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Ovride</strong>
                  </a>{" "}
                  offers 2 types of coffee to choose from. Great place for a
                  quick bite, also.
                </li>
                <li>
                  <a
                    href="https://g.page/Typica?share"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Typica</strong>
                  </a>{" "}
                  is situated in the Union Square.
                </li>
              </ul>

              <h3 className="dark">Bars</h3>
              <ul>
                <li>
                  <a
                    href="https://goo.gl/maps/AnGHFdFXLKEP1ptE8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Taproom</strong>
                  </a>
                  . Beer. Craft. Tap. Local. Nothing more, nothing less. By{" "}
                  <a
                    href="https://www.facebook.com/BeretaTM/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bereta
                  </a>
                  .
                </li>
                <li>
                  <a
                    href="https://goo.gl/maps/Fctqk5CaZZJnKURJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Scârț, a chill place.</strong>
                  </a>{" "}
                  Good music, chill vibes, art, theatre and wicked interior
                  design. Also home of the{" "}
                  <a
                    href="https://www.facebook.com/comunistconsumersmuseum/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Communist Consumer Museum
                  </a>
                  . Definitely worth the visit.
                </li>
              </ul>
            </section>

            <h3 className="dark">Restaurants</h3>
            <ul>
              <li>
                <a
                  href="https://goo.gl/maps/bu8NBJTah53rsgU58"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Curtea Berarilor</strong>
                </a>{" "}
                is the way to go for traditional food and beer.
              </li>
              <li>
                <strong>Little Hanoi</strong> is ideal if you want to taste
                delicious Vietnamese food. They have 2 locations you can choose
                from,{" "}
                <a
                  href="https://goo.gl/maps/eVnWW7QMWQrvhPU79"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Little Hanoi Bistro
                </a>{" "}
                and{" "}
                <a
                  href="https://goo.gl/maps/zcJYnA1u1FbyovDj8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Little Hanoi Restaurant.
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/ZUV5Cv5KyedUUFq2A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>August Pasta Bar</strong>
                </a>{" "}
                is the go-to place for pasta lovers.
              </li>
            </ul>

            <h3 className="dark">How to pay?</h3>
            <p>
              The official Romanian currency is RON (aka LEI).
              <br />
              <a
                href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=EUR&To=RON"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>1 EUR = 4.97 RON</strong>
              </a>
              <br />
              <a
                href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=RON"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>1 USD = 4.63 RON</strong>
              </a>
            </p>
            <p>
              Most bars, restaurants and shops accept card payment (Visa,
              Mastercard, Maestro, etc).
            </p>

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

export default SpeakerInfo;
