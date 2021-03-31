import React from "react";
import { Template } from "../Template/Template";
import Event from "../../components/LandingComponents/EventTable.jsx";
import {
  EVENTS,
  isPastEvent,
  findUpcomingEvent,
  getUpcomingText,
} from "./EventContent";
import "../../components/LandingComponents/EventTable.scss";
import "./EventPage.scss";

export const EventPage = () => {
  console.log(findUpcomingEvent(EVENTS));
  const comingSoonEvent = findUpcomingEvent(EVENTS).title;
  return (
    <Template>
      <div className="event-page">
        <h1>Event Schedule</h1>
        <p>
          Cek akun instagram kami,{" "}
          <strong>
            <a href="https://www.instagram.com/paradewisudaitb/">
              @paradewisudaitb
            </a>
          </strong>{" "}
          untuk informasi lebih lanjut
        </p>
        <table>
          <tbody className="ukurantabel">
            {EVENTS.map((row, idx) => (
              <Event
                data={row}
                key={idx}
                date={row.date}
                isMainEvent={row.main}
                isPastEvent={isPastEvent(row)}
                isComingSoon={row.title === comingSoonEvent}
                getUpcomingText={getUpcomingText}
                title={row.title}
              />
            ))}
          </tbody>
        </table>
      </div>
    </Template>
  );
};
