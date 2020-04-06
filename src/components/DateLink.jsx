import React, { useState } from "react";
import "./dateLink.scss";
import CalendarList from "./CalendarList";
import Portal from "./Portal";

const DateLink = (props) => {
  const [isVisible, setVisible] = useState(false);

  const clickHandler = () => {
    setVisible(!isVisible);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const keyPressHandler = (event) => {
    event.preventDefault();
    if (event.key === " " || event.key === "Enter") {
      clickHandler();
    }
  };

  const output = [
    <span
      className="date-link"
      role="button"
      tabIndex="0"
      onKeyPress={keyPressHandler}
      onClick={clickHandler}
      key="link"
    >
      {props.children}
      <span className="tooltip">
        Add to Calendar
        <span className="arrow" />
      </span>
    </span>,
  ];

  if (isVisible) {
    output.push(
      <Portal key="list">
        <CalendarList event={{ ...props }} close={closeHandler} />
      </Portal>
    );
  }

  return output;
};

export default DateLink;
