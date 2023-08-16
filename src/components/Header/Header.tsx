import Toggle from "./Toggle";

function Header() {
  return (
    <div className=" container header">
      <div className="header__title">
        <h1>Social Media Dashboard</h1>
        <span className="header__subtitle">Total Followers: 23,004</span>
      </div>

      <Toggle />
    </div>
  );
}

export default Header;
