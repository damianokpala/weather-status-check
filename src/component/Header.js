import React from "react";
import "./Header.css";

function Logo() {
  return (
    <div className="bg">
      <img src="././icons/logo-icon.svg" alt="The Logo" />
      <div>Weather</div>
    </div>
  );
}

function Search() {
  return (
    <form className="bg">
      <img src="../icons/search-icon.svg" alt="" />
      <input type="text" placeholder="Lagos" />
    </form>
  );
}

function Location() {
  return (
    <div className="bg">
      <img src="../icons/location-icon.svg" alt="" />
    </div>
  );
}

function Theme() {
  return (
    <div className="bg">
      {false ? (
        <img src="../icons/dark-theme-icon.svg" alt="" />
      ) : (
        <img src="../icons/ligth-theme-icon.svg" alt="" />
      )}
    </div>
  );
}

function Support() {
  return (
    <div className="bg">
      <img src="../icons/github-icon.svg" alt="" />
      <p>Support Project</p>
    </div>
  );
}

export default function Header() {
  return (
    <header>
      <Logo />
      <Search />
      <Location />
      <Theme />
      <Support />
    </header>
  );
}
