import React from "react";
// import { OutboundLink } from "gatsby-plugin-google-analytics";

import Layout from "@components/Layout";
import Header from "@components/layout/Header";
import Content from "@components/Content";
import Section from "@components/Section";
import Note from "@components/Note";
import Button from "@components/Button";

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
              spread the word. Here are a few details and materials that will
              help you.
            </p>
            <p>
              Feel free to use the descriptions as such and please follow our
              visual guidelines:
            </p>
          </Note>

          <section>
            <h2>What we’re all about:</h2>
            <h3>English</h3>
            <p>
              revo.js is the first JavaScript conference in Timisoara, Romania,
              taking place between the 3rd and 4th of October. The conference
              aims to bring JavaScript enthusiasts two full days of tech-focused
              talks, community networking and thought-provoking ideas meant to
              inspire change, the only constant there is.
            </p>
            <h3>Română</h3>
            <p>
              revo.js este prima conferință de JavaScript din Timișoara,
              România, ce va avea loc între 3 și 4 octombrie. Conferința dorește
              să le ofere pasionaților de JavaScript două zile pline de
              prezentări cu subiecte technice, interacțiuni cu cele mai mari
              comunități de profil și idei menite să inspire schimbare, singura
              constantă într-o lume în continuă transformare.
            </p>
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
