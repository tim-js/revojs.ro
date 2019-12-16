import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import CalendarLink from "./CalendarLink";
import "./addToCalendar.scss";

const AddToCalendar = props => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        interactive
        arrow
        PopperProps={{
          disablePortal: true
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <ul className="add-to-calendar-list">
            {["Google", "iCal", "Yahoo", "Outlook"].map(name => (
              <li key={name}>
                <CalendarLink name={name} event={{ ...props }} />
              </li>
            ))}
          </ul>
        }
      >
        <span onClick={handleTooltipOpen} className="calendar-trigger">
          {props.children}
        </span>
      </Tooltip>
    </ClickAwayListener>
  );
};

AddToCalendar.propTypes = {
  title: PropTypes.string,
  details: PropTypes.string,
  location: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  isFullDay: PropTypes.bool
};

export default AddToCalendar;
