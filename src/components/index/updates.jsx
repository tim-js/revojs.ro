import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";

import "./updates.scss";

export default () => {
  // return null;
  return (
    <Section centered>
      <h2>Updates</h2>

      <ul className="updates-list">
        <li>
          <strong className="update-title mono">Social revo.updates</strong>
          <p className="update-content light-faded">
            Follow the latest updates and happenings at revo.js on our{" "}
            <a
              href="https://twitter.com/revojsro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/revojsro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            and{" "}
            <a
              href="https://www.instagram.com/revo.js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            accounts.
          </p>
        </li>
        <li>
          {/* <Link to="/tickets/" className="updates-link"> */}
          <strong className="update-title mono">Let’s after-party!</strong>
          <p className="update-content light-faded">
            Meet us on October 4th, starting 19:00, at{" "}
            <a
              href="https://goo.gl/maps/J8tnRqY7F8KQB5618"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Charlatan's Pub
            </a>
            , for some revo.chat and revo.cheers!
          </p>
          {/* </Link> */}
        </li>
      </ul>
    </Section>
  );
};
