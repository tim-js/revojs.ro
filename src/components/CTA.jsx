import React from "react";
import Button from "./Button";
import { OutboundLink } from "gatsby-plugin-google-gtag";

export const TICKETS_URL = "https://ti.to/timjscommunity/revojs2023";

export const PurchaseTicket = ({ label = "Grab Your Ticket", ...props }) => {
  return (
    <OutboundLink className="tickets-cta" href={TICKETS_URL} target="_blank">
      <Button {...props}>{label}</Button>
    </OutboundLink>
  );
};

export const WorkshopTicket = ({ label = "Book your spot", ...props }) => {
  return (
    <OutboundLink
      className="tickets-cta"
      href="https://ti.to/revojs/revojs2019/with/uhjrtmhvpo0"
      target="_blank"
    >
      <Button {...props}>{label}</Button>
    </OutboundLink>
  );
};

export const SubmitCFP = props => {
  return (
    <OutboundLink href="https://revojs.typeform.com/to/D7EYCkuO" target="_blank">
      <Button {...props}>Submit your Proposal</Button>
    </OutboundLink>
  );
};
