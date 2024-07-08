import React from "react";

import Overview from "./Overview";
import PropertyDetails from "./PropertyDetails";
import HourlyCheck from "./HourlyCheck";
import "./TodayDisplay.css";

export default function TodayDisplay() {
  return (
    <div className="dashboard-container">
      <Overview />
      <PropertyDetails />
      <HourlyCheck />
    </div>
  );
}
