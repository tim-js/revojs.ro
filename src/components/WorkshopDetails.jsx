import React from "react";
import Img from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import Content from "@components/Content";
import Section from "@components/Section";
import { WorkshopTicket } from "@components/CTA";
import "./workshopDetails.scss";

const Company = name => (name ? `at ${name}` : null);

export default props => {
  const {
    id,
    workshop,
    firstname,
    lastname,
    title,
    company,
    twitter,
    bio
  } = props.data;
  return (
    <Section light>
      <Content centered style={{ maxWidth: "830px" }}>
        <h1 id={id} className="workshop-title">
          {workshop}
        </h1>

        <header className="workshop-header">
          <figure className="workshop-speaker-img">
            <Img fluid={props.image.node.image.fluid} alt="" />
          </figure>
          <div className="speaker-info">
            <h2 className="speaker-name">
              {firstname} {lastname}
            </h2>
            <span className="speaker-title">
              {title} {Company(company)}
            </span>
            <a
              className="speaker-twitter"
              href={`https://twitter.com/${twitter}`}
            >
              @{twitter}
            </a>
          </div>
        </header>

        <dl className="workshop-info">
          <dt>
            <strong>When and Where?</strong>
          </dt>
          <dd>
            9AM to 5PM,{" "}
            <OutboundLink href="https://devplant.ro/" target="_blank">
              DevPlant
            </OutboundLink>
            , 9 Gh. Lazar Street, Timisoara
          </dd>
          <dt>
            <strong>What’s included?</strong>
          </dt>
          <dd>Lunch, snacks, coffee and beverages</dd>
          <dt>
            <strong>Spots available</strong>
          </dt>
          <dd className="spots">24</dd>
        </dl>

        <div className="workshop-purchase-button">
          <WorkshopTicket label="Book your workshop spot" white />
        </div>

        <section>
          <h2>Workshop details</h2>
          <p>
            This workshop teaches how to test a modern web application using
            Cypress.io end-to-end test runner. The application uses Vue.js
            framework with Vuex data management and REST API calls, but the
            testing will be applicable to any modern web app.
          </p>

          <p>
            Knowledge of web development using JavaScript is required, plus some
            basic Node.js skills.
          </p>

          <section>
            <h3>Part 1: The Basics</h3>
            <ul>
              <li>How to install and run Cypress</li>
              <li>How Cypress scaffolds files</li>
              <li>Writing and running a basic test</li>
              <li>Setting up video recording and screenshots on failure</li>
              <li>Selector Playground</li>
              <li>Testing XHR requests</li>
              <li>Using data fixtures in your tests</li>
            </ul>
          </section>

          <section>
            <h3>Part 2: Core Concepts</h3>
            <ul>
              <li>Configuring Cypress via CLI, env, config files</li>
              <li>Retry-ability and custom assertions</li>
              <li>Writing custom commands</li>
              <li>Using custom Webpack or Browserify preprocessor</li>
              <li>Page Objects vs App Actions</li>
              <li>Testing individual Vue / React / X components</li>
              <li>Accessing OS via `cy.task`</li>
              <li>When not to use Cypress</li>
            </ul>
          </section>

          <section>
            <h3>Part 3: Testing Strategy</h3>
            <ul>
              <li>Using custom test reporters</li>
              <li>Running Cypress tests on CI</li>
              <li>Recording Cypress tests on the dashboard</li>
              <li>Testing in parallel</li>
              <li>Setting up data before the test</li>
              <li>Cypress module API</li>
              <li>Unit tests vs E2E tests</li>
              <li>Code coverage from E2E tests</li>
              <li>Function + Visual testing</li>
            </ul>
          </section>
        </section>

        <section>
          <h2>About {firstname}</h2>
          <div dangerouslySetInnerHTML={{ __html: bio }} />
        </section>

        <br />
        <br />
        <br />

        <WorkshopTicket label="Book your workshop spot" white />
        <br />
        <br />
        <p>
          <strong>Note</strong>: The workshop is not included in the conference
          ticket and requires a separate booking. If you have any questions,
          drop us a line at{" "}
          <a href="mailto:info@revojs.ro?subject=[workshop]">info@revojs.ro</a>.
        </p>
      </Content>
    </Section>
  );
};
