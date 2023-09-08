import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/">
        <div className="logo-box">
          <img className="logo" src="src/assets/depart-pro-logo.png" />
        </div>
        <p>
          <span>Depart</span>Pro
        </p>
      </a>
      <Nav />
    </header>
  );
}

export default Header;
