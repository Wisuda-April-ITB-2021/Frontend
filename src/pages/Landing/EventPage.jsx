import React from "react";
import { Template } from "../Template/Template";
import "./EventPage.scss";

export const EventPage = () => {
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
      </div>
    </Template>
  );
};
