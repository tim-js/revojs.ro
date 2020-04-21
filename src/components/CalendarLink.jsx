import React from "react";
import "./calendarLink.scss";
import * as calendarUtil from "./calendar-util";

const CalendarLink = (props) => {
  return (
    <a
      className="calendar-link"
      download={props.name === "iCal" ? "revojs.ics" : undefined}
      href={getUrl(props.name, props.event)}
      target="_blank noreferrer noopener"
    >
      {props.name}
    </a>
  );
};

function getUrl(name, event) {
  switch (name) {
    case "Google":
      return calendarUtil.getGoogleUrl(event);

    case "iCal":
      return calendarUtil.getiCalUrl(event);

    case "Yahoo":
      return calendarUtil.getYahooUrl(event);

    case "Outlook":
      return calendarUtil.getOutlookUrl(event);

    default:
      throw new Error("No support for this type of calendar!");
  }
}

export default CalendarLink;
