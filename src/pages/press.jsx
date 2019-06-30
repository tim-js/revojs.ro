import React from "react";
import { Link } from "gatsby";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";
import Button from "@components/Button";

import logo from "@assets/press/01.logo.svg";
import symbol from "@assets/press/02.symbol.svg";
import logoDiagram from "@assets/press/03.logo_diagram.svg";
import symbolDiagram from "@assets/press/04.symbol_diagram.svg";
import colorStory from "@assets/press/05.color_story.svg";
import logoDarkBg from "@assets/press/06.logo_dark-grey-bg.svg";
import logoWhiteBg from "@assets/press/07.logo_white-bg.svg";
import logoOrangeBg from "@assets/press/08.logo_orange-bg.svg";
import logoMonochromeBlackBg from "@assets/press/09.logo_monochrome_black-bg.svg";
import logoMonochromeWhiteBg from "@assets/press/10.logo_monochrome_white-bg.svg";

import "./press.scss";

export default () => {
  return (
    <Layout title="revo.js Press Info">
      <Header centered type="secondary">
        <h1>Press Info</h1>
      </Header>

      <Section light>
        <Content centered>
          <Note>
            <p>
              Want to write about revo.js? We’re happy and thankful you want to
              spread the word.
            </p>
          </Note>

          <section>
            <h2>Content Essentials</h2>
            <p>
              Whether you want to write a full-fledged article or craft a
              snippet, our <Link to="/about">About page</Link> has the essential
              information to get you started. Feel free to use the descriptions
              you find there as such.{" "}
            </p>

            <p>
              For the latest happenings, our social media pages are a good
              source of what’s on our agenda at every stage.{" "}
            </p>

            <p>
              If you’re still craving more details or want to do a
              revo.interview, don’t hesitate to contact us at{" "}
              <a href="mailto:info@revojs.ro?subject=[press]">info@revojs.ro</a>
              .
            </p>
          </section>

          <section className="visual-guide">
            <h2>Visual Guidelines</h2>
            <p>
              We’re only at the first edition of revo.js, but we plan to have a
              long and prosperous conference life. To make that happen, please
              help us maintain a consistent visual identity so that every
              JavaScript enthusiast can recognize us in a jiffy. Here are our
              visual guidelines:
            </p>
            <h3>The Logo and Symbol</h3>
            <p>
              The logo is a very important expression of our brand identity. It
              should not be distorted or redrawn when used in communications.
              Please follow our guidance when using it, as it is vital that it
              is applied consistently.
            </p>
            <figure>
              <img src={logo} alt="revo.js logo" />
            </figure>
            <p>
              The symbol should be used alone when the logo is too small to
              achieve maximum impact. We only encourage the usage of the symbol
              alone when it’s an absolut must and the full logo does not fit at
              all.
            </p>
            <figure>
              <img src={symbol} alt="revo.js symbol" />
            </figure>
            <h3>Clear space and Sizing</h3>
            <p>
              The logo or symbol should always be surrounded by generous white
              space. The diagram below shows the minimum amount of clear space
              needed. It is based on the x-height of the revo.js text.
            </p>
            <figure>
              <img src={logoDiagram} alt="" />
              <img src={symbolDiagram} alt="" />
            </figure>
            <p>
              The minimum digital size for the logo or symbol should be{" "}
              <strong>25px (height)</strong>, and the minimum print size should
              be <strong>1cm (height)</strong>.
            </p>
            <h3>Color</h3>
            <figure>
              <img
                src={colorStory}
                alt="revolution red + JavaScript yellow = revorange"
              />
            </figure>
            <p>
              Our logo is primary used on our dark grey and black backgrounds,
              using the color combinations listed below. It can also be used on
              white in its colored form, or on our orange background.
            </p>
            <figure>
              <img src={logoDarkBg} alt="" />
              <img src={logoWhiteBg} alt="" />
              <img src={logoOrangeBg} alt="" />
            </figure>
            <dl className="colors mono">
              <dt className="highlight">revorange:</dt>
              <dd className="highlight">#F45919</dd>
              <dt className="dark">dark grey:</dt>
              <dd className="dark">#15161A</dd>
            </dl>
            <br />
            <br />
            <p>
              If the background clashes with our primary colors, we suggest the
              usage of our monochromatic versions (white for dark backgrounds,
              black for light backgrounds){" "}
            </p>
            <figure>
              <img src={logoMonochromeBlackBg} alt="" />
              <img src={logoMonochromeWhiteBg} alt="" />
            </figure>
          </section>

          <br />
          <br />
          <br />
          <a href="/revo.js-logo-kit.zip">
            <Button white>Download Logo Kit</Button>
          </a>
        </Content>
      </Section>
    </Layout>
  );
};
