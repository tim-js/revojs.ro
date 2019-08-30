import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";

import "./updates.scss";

export default () => {
  return (
    <Section centered>
      <h2>Updates</h2>

      <ul className="updates-list">
        <li>
          <Link to="/workshop/#efficient-end-2-end-testing-with-cypress-io">
            <strong className="update-title mono">Workshop SOLD OUT</strong>
            <p className="update-content light-faded">
              Gleb’s workshop on Efficient End-to-End Testing with Cypress.io is fully booked. Worry not, conference tickets are still available. 
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">
              Last Chance at Regular Tickets
            </strong>
            <p className="update-content light-faded">
              Hurry up and grab your Regular Ticket until the 31st of August. Change waits for no one.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
