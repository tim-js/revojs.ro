import React from "react";
import { Link } from "gatsby";
import Button from "@components/Button";
import Input from "@components/Input";
import addToMailchimp from "gatsby-plugin-mailchimp";

import Section from "@components/Section";

import "./updates.scss";

export default class UpdatesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value});
  }

  async handleSubmit(e) {
    e.preventDefault();
    const result = await addToMailchimp(this.state.email);
    console.log(result);
  }

  render() {
    return (
      <Section centered>
        <h2>Coming Soon</h2>

        <ul className="updates-list">
          <li>
            <Link to="/cfp/">
              <strong className="update-title mono">Call For Papers</strong>
              <p className="update-content light-faded">
                Some quick CTA text for papers, bla bla bla lorem ipsum now etc.
              </p>
            </Link>
          </li>
          <li>
            <Link to="/tickets/">
              <strong className="update-title mono">Tickets</strong>
              <p className="update-content light-faded">
                Some quick CTA text for papers, bla bla bla lorem ipsum now etc.
              </p>
            </Link>
          </li>
        </ul>


        <div className="keep-me-updated">
          <form onSubmit={this.handleSubmit}>
              <Input type="text" value={this.state.email} onChange={this.handleChange} placeholder="email"/>
              <Button onClick={this.handleSubmit}>Submit</Button>
          </form>
        </div>

      </Section>
    );
  }
};
