import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <a className="header__link" href="/">
        <div className="logo-box">
          <img className="logo" src="images/logo.png" />
        </div>
      </a>
      <Nav />
    </header>
  );
}

export default Header;
