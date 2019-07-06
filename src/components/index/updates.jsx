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
          <Link to="/workshops/#efficient-end-2-end-testing-with-cypress-io">
            <strong className="update-title mono">Workshop available</strong>
            <p className="update-content light-faded">
              Join Gleb's workshop on October 2nd and learn Efficient End-to-End
              Testing with Cypress.io.
            </p>
          </Link>
        </li>
        <li>
          <Link to="/tickets/">
            <strong className="update-title mono">
              Regular Tickets On Sale
            </strong>
            <p className="update-content light-faded">
              The 50 Early Birds flew away. Regular tickets are now available.
            </p>
          </Link>
        </li>
      </ul>
    </Section>
  );
};
