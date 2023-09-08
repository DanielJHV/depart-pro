function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="/employees">
            Employees
          </a>
        </li>
        <li>
          <a className="nav__link" href="/departments">
            Departments
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
