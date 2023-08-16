import React from "react";

function Toggle() {
  return (
    <fieldset
      className=" header__toggle toggle"
      aria-label="theme switcher"
      role="radiogroup"
    >
      <label htmlFor="dark"> Dark Mode</label>
      <div className="toggle__wrapper">
        <input type="radio" name="theme" id="dark" />
        <input type="radio" name="theme" id="system" checked />
        <input type="radio" name="theme" id="light" />
        <span aria-hidden="true" className="toggle__background"></span>
        <span aria-hidden="true" className="toggle__button"></span>
      </div>
      <label htmlFor="system"> System Pref</label>
      <label htmlFor="light"> Liht Mode</label>
    </fieldset>
  );
}

export default Toggle;
