function getQueryParams(params) {
  return Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

function getGoogleDates(event) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  // You need to add +1 do end date for this to work
  endDate.setDate(endDate.getDate() + 1);

  return `${startDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}/${endDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}`;
}

export function getGoogleUrl(event) {
  const baseUrl = "https://calendar.google.com/calendar/render?";

  let queryParams = {
    action: "TEMPLATE",
    text: event.title,
    details: event.details,
    dates: getGoogleDates(event),
    location: event.location,
  };

  return baseUrl + getQueryParams(queryParams);
}

export function getYahooUrl(event) {
  const baseUrl = "https://calendar.yahoo.com/?";

  let queryParams = {
    v: 60,
    title: event.title,
    desc: event.details,
    st: event.startDate.toISOString().slice(0, 10).replace(/-/g, ""),
    et: event.endDate.toISOString().slice(0, 10).replace(/-/g, ""),
    in_loc: event.location,
  };

  if (event.isFullDay) {
    queryParams.dur = "allday";
  }

  return baseUrl + getQueryParams(queryParams);
}

export function getOutlookUrl(event) {
  const baseUrl = "https://outlook.live.com/owa/?";

  let queryParams = {
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.title,
    body: event.details,
    startdt: event.startDate.toISOString().slice(0, 10).replace(/-/g, ""),
    enddt: event.endDate.toISOString().slice(0, 10).replace(/-/g, ""),
    location: event.location,
  };

  if (event.isFullDay) {
    queryParams.allday = true;
  }

  return baseUrl + getQueryParams(queryParams);
}

export function getiCalUrl(event) {
  const endDate = new Date(event.endDate);
  // You need to add +1 do end date for this to work
  endDate.setDate(endDate.getDate() + 1);

  const iCal = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//revojs.ro//iCal Event
CALSCALE:GREGORIAN
BEGIN:VTIMEZONE
TZID:Europe/Helsinki
TZURL:http://tzurl.org/zoneinfo-outlook/Europe/Helsinki
X-LIC-LOCATION:Europe/Helsinki
BEGIN:DAYLIGHT
TZOFFSETFROM:+0200
TZOFFSETTO:+0300
TZNAME:EEST
DTSTART:19700329T030000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:+0300
TZOFFSETTO:+0200
TZNAME:EET
DTSTART:19701025T040000
RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTAMP:${event.startDate.toISOString().replace(/-/g, "")}
UID:${event.startDate.toISOString().replace(/-/g, "")}-1592748666@revojs.ro
DTSTART;VALUE=DATE:${event.startDate
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "")}
DTEND;VALUE=DATE:${endDate.toISOString().slice(0, 10).replace(/-/g, "")}
SUMMARY:${event.title}
URL:www.revojs.ro
DESCRIPTION:${event.details}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

  return `data:text/calendar;base64,${btoa(iCal)}`;
}
