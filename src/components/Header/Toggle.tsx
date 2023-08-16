import React, { useState } from "react";
const themeOptions = [
  { id: "dark", value: "dark" },
  { id: "system", value: "system" },
  { id: "light", value: "light" },
];
function Toggle() {
  const [theme, setTheme] = useState(themeOptions[1].value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTheme(value);
  };
  return (
    <fieldset
      className=" header__toggle toggle"
      aria-label="theme switcher"
      role="radiogroup"
    >
      <div className="toggle__wrapper">
        {themeOptions.map((option) => (
          <input
            key={option.id}
            type="radio"
            name="theme"
            id={option.id}
            value={option.value}
            defaultChecked={theme === option.value}
            onChange={handleChange}
          />
        ))}

        <span aria-hidden="true" className="toggle__background"></span>
        <span aria-hidden="true" className="toggle__button"></span>
      </div>
      <label htmlFor="dark"> Dark </label>
      <label htmlFor="system"> System</label>
      <label htmlFor="light"> Light </label>
    </fieldset>
  );
}

export default Toggle;
