import React from "react";

function Logo() {
  return (
    <>
      <img src="../" alt="" />
      <div>Weather</div>
    </>
  );
}

function Search() {
  return (
    <form>
      <span></span>
      <input type="text" placeholder="Lagos" />
    </form>
  );
}

function Location() {
  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

function Theme() {
  return (
    <div>
      <img src="" alt="" />
    </div>
  )
}

function Support() {
  return (
    <div>
      <p>Support Project</p>
    </div>
  )
}

export default function Header() {
  return (
    <>
      <Logo />
      <Search />
      <Location />
      <Theme />
      <Support />
    </>
  );
}
