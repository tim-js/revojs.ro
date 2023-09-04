export const day0 = {
  day: "Wednesday",
  date: "4 Oct 2023",
  dateIso: "2023-10-04",
  title: "Workshop Day",
  workshops: [
    {
      time: "09:00 - 17:00",
      title: "To be announced",
      description: "Full-day workshop. Pre-registration required.",
      speakers: [],
      // speakers: [{ id: "gleb-bahmutov" }],
    },
  ],
};

export const day1 = {
  day: "Thursday",
  date: "5 Oct 2023",
  dateIso: "2023-10-05",
  title: "Conference Day 1",
  talks: [
    { time: "08:00", description: "Registration & Coffee" },
    { time: "09:00", description: "Opening ceremony" },
    // { time: "09:30", placeholder: "Morning session 1" },
    { time: "09:30", talkId: "tug-of-war" },
    { time: "10:00", talkId: "no-generic" },
    { time: "10:30", description: "Coffee Break" },
    // { time: "11:15", placeholder: "Morning session 2" },
    { time: "11:15", talkId: "type-safe-css" },
    { time: "11:45", talkId: "css-features-2023" },
    { time: "12:15", description: "Lunch Break" },
    // { time: "13:30", placeholder: "Afternoon session 1" },
    { time: "13:30", talkId: "rendering-patterns" },
    { time: "14:00", talkId: "performance-tooling" },
    { time: "14:30", description: "Coffee Break" },
    // { time: "15:15", placeholder: "Afternoon session 2" },
    { time: "15:15", talkId: "talk2023-martin" },
    { time: "15:45", talkId: "security-by-design" },
    { time: "16:15", description: "Networking" },
  ],
};

export const day2 = {
  day: "Friday",
  date: "6 Oct 2023",
  dateIso: "2023-10-06",
  title: "Conference Day 2",
  talks: [
    { time: "08:30", description: "Registration & Coffee" },
    { time: "09:00", description: "Welcoming words" },
    // { time: "09:30", placeholder: "Morning session 1" },
    { time: "09:30", talkId: "bag-of-spanners" },
    { time: "10:00", talkId: "ethical-choice" },
    { time: "10:30", description: "Coffee Break" },
    // { time: "11:15", placeholder: "Morning session 2" },
    { time: "11:15", talkId: "async-debugging" },
    { time: "11:45", talkId: "generative-art" },
    { time: "12:15", description: "Lunch Break" },
    // { time: "13:30", placeholder: "Afternoon session 1" },
    { time: "13:30", talkId: "node-testing-2023" },
    { time: "14:00", talkId: "testing-strategy" },
    { time: "14:30", description: "Coffee Break" },
    // { time: "15:15", placeholder: "Afternoon session 2" },
    { time: "15:15", talkId: "apis-requiem" },
    { time: "15:45", talkId: "web-beyond-today" },
    { time: "16:15", description: "Closing words" },
    {
      time: "19:00",
      description: "After party",
      partner: "Visma",
    },
  ],
};
