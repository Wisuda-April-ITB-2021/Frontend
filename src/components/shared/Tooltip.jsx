import React from "react";
import "./Tooltip.scss";

const Tooltip = ({ text, children }) => (
  <div className="tooltip">
    {children}
    <div className={`tooltip-text ${text.length ? "" : "no-error"}`}>
      {Array.isArray(text) ? (
        text.map((row, idx) => <p key={idx}>• {row}</p>)
      ) : (
        <p>text</p>
      )}
    </div>
  </div>
);
export default Tooltip;
