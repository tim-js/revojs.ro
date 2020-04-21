import React from "react";
import "./calendarList.scss";
import calendar from "@assets/calendar.svg";
import CalendarLink from "./CalendarLink";
import Hamburger from "./layout/Hamburger";

const CalendarList = ({ event, close }) => {
  return (
    <div className="calendar-list">
      <Hamburger label="Toggle menu" active={true} onClick={() => close()} />
      <div className="content">
        <div className="revojs-logo">
          <img src={calendar} alt="calendar" />
          <span>revo.js 2020</span>
        </div>
        <div className="calendar-links">
          {["Google", "iCal", "Yahoo", "Outlook"].map((name) => (
            <CalendarLink name={name} event={{ ...event }} key={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarList;
