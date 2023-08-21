import React, { useEffect, useState } from "react";
const themeOptions = [
  { id: "dark", value: "dark" },
  // { id: "system", value: "system" },
  { id: "light", value: "light" },
];
function Toggle() {
  const getModeFromLocalStorage = () => {
    return localStorage.getItem("theme");
  };

  const [theme, setTheme] = useState(
    getModeFromLocalStorage() ? getModeFromLocalStorage() : ""
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTheme(value);
  };

  const addClassToBody = (mode: string) => {
    document.body.classList.add(mode);
    localStorage.setItem("theme", mode);
  };

  const removeClassFromBody = (mode: string) => {
    if (document.body.classList.contains(mode)) {
      document.body.classList.remove(mode);
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      addClassToBody("dark");
      removeClassFromBody("light");
    } else if (theme === "light") {
      addClassToBody("light");
      removeClassFromBody("dark");
    }
  }, [theme]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)"); // Getting the media query object from window

    const changeTheme = (evt: any) => {
      setTheme(evt.matches ? "dark" : "light");
    };

    if (!getModeFromLocalStorage()) {
      mediaQueryList.matches ? setTheme("dark") : setTheme("light");
      mediaQueryList.addEventListener("change", changeTheme, false);
    }

    return () => {
      mediaQueryList.removeEventListener("change", changeTheme, false);
      localStorage.removeItem("theme");
    };
  }, []);

  return (
    <fieldset
      className=" header__toggle toggle"
      aria-label="theme switcher"
      role="radiogroup"
    >
      <label htmlFor="dark">
        Dark Mode <span className="visually-hidden">On</span>
      </label>
      <div className="toggle__wrapper">
        {themeOptions.map((option) => (
          <input
            key={option.id}
            type="radio"
            name="theme"
            id={option.id}
            value={option.value}
            checked={option.value === theme}
            onChange={handleChange}
          />
        ))}

        <span aria-hidden="true" className="toggle__background"></span>
        <span aria-hidden="true" className="toggle__button"></span>
      </div>

      {/* <label htmlFor="system"> System</label> */}
      <label htmlFor="light" className="visually-hidden">
        Light Mode Off
      </label>
    </fieldset>
  );
}

export default Toggle;
