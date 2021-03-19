export const EVENTS = [
  {
    date: new Date("2021-02-28"),
    title: "WISDOM #1",
  },
  {
    date: new Date("2021-03-13"),
    title: "WISDOM #2",
  },
  {
    date: new Date("2021-03-20"),
    title: "WISDOM #3",
  },
  {
    date: new Date("2021-03-21"),
    title: "Nonton Bareng",
  },
  {
    date: new Date("2021-03-27"),
    title: "Reflection Night",
  },
  {
    date: new Date("2021-03-28"),
    title: "Charity Concert: Wispril x Apres! ITB",
  },
  {
    date: new Date("2021-04-04"),
    title: "Charity Event",
  },
  {
    date: new Date("2021-04-10"),
    title: "Parade Wisuda ITB 2021",
    main: true, // dekorasi outline
  },
  {
    date: new Date("2021-04-10"),
    title: "Virtual Photoshoot",
  },
];

export const isPastEvent = (event) => {
  return new Date() > event.date;
};

export const findUpcomingEvent = (events) => {
  const today = new Date();
  const futureEvents = events.filter(
    ({ date }) =>
      date.getDate() >= today.getDate() &&
      date.getMonth() >= today.getMonth() &&
      date.getFullYear() >= today.getFullYear()
  );
  return futureEvents[0];
};
