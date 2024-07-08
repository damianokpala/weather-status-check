import React from "react";

import "./Overview.css";

export default function Overview() {
  return (
    <div className="overview">
      <i className="overview-icon">
        <img src="../icons/ph_sun-light.svg" alt="" />
      </i>
      <span className="overview-value">30.2°C</span>
      <span className="overview-summary">Clear Sky</span>

      <div className="divider"></div>

      <div className="location-icon">
        <i>
          <img src="../icons/mdi_location.svg" alt="" />
        </i>
        <span>Owerri, Nigeria</span>
      </div>

      <div className="calendar-icon">
        <i>
          <img src="../icons/calendar-icon.svg" alt="" />
        </i>
        <span>July 21, 2024</span>
      </div>
    </div>
  );
}
