import React from "react";
import Button from "./Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";

export const PurchaseTicket = ({ label = "Grab Your Ticket", ...props }) => {
  return (
    <OutboundLink
      className="tickets-cta"
      href="https://ti.to/revojs/revojs2019"
      target="_blank"
    >
      <Button {...props}>{label}</Button>
    </OutboundLink>
  );
};

export const SubmitCFP = props => {
  return (
    <OutboundLink href="https://revojs.typeform.com/to/WWcdJ2" target="_blank">
      <Button {...props}>Submit your Proposal</Button>
    </OutboundLink>
  );
};
