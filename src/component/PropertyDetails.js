import React from "react";
import "./PropertyDetails.css";

function Details() {
  return (
    <div className="details">
      <span>
        <img src="../icons/wind-icon.svg" alt="" />
      </span>
      <span className="c-flex">
        <span>Wind Speed</span>
        <span>29 Km/hr</span>
      </span>
    </div>
  );
}

export default function PropertyDetails() {
  return (
    <div className="display-dashboard">
      <Details />
      <Details />
      <Details />
      <Details />
      <Details />
      <Details />
    </div>
  );
}
