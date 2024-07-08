import React from "react";

import "./HourlyCheck.css";

function HourlyValue() {
  return (
    <div className="hourly">
      <span className="col-1">
        <span className="day">Monday</span>
        <span className="time">18:00</span>
      </span>
      <span className="value">30.2°C</span>
    </div>
  );
}

export default function HourlyCheck() {
  return (
    <div className="check">
      <HourlyValue />
      <HourlyValue />
      <HourlyValue />
      <HourlyValue />
    </div>
  );
}
