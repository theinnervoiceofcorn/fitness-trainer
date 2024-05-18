import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo">ProjectName</a>
      <ul>
        <li>
          <a href="#">NavbarTab #1</a>
        </li>
        <li>
          <a href="#">NavbarTab #2</a>
        </li>
      </ul>
    </nav>
  );
};
