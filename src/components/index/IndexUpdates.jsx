import React from "react";
import { Link } from "gatsby";

import Section from "@components/Section";
import Arrow from "@components/Arrow";

import "./indexUpdates.scss";

export default () => {
  return (
    <Section centered>
      <h2 className="big first">Updates</h2>

      <br />

      <ul className="updates-list">
        <li>
          <Link to="/covid19/" className="updates-link">
            <strong className="update-title mono">COVID-19 Updates</strong>
            <p className="update-content light-faded">
              Follow the latest revo.news on how the current pandemic influences
              our schedule.
            </p>
            <div className="arrow">
              <Arrow color="accent" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/2020/tickets/" className="updates-link">
            <strong className="update-title mono">Tickets</strong>
            <p className="update-content light-faded">
              The launch of Early Bird tickets is slightly postponed to May 1st.
              Stay tuned.
            </p>
            <div className="arrow">
              <Arrow color="accent" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/2020/cfp/" className="updates-link">
            <strong className="update-title mono">Call for Papers</strong>
            <p className="update-content light-faded">
              CFP continues as planned and opens on April 1st. We’re not fooling
              around.
            </p>
            <div className="arrow">
              <Arrow color="accent" />
            </div>
          </Link>
        </li>
        {/* 
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
        */}
      </ul>
    </Section>
  );
};
