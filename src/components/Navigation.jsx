import { Link, useLocation } from "react-router-dom";
function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
            to="/"
            className={`navigation__link ${
              location.pathname === "/" ? "navigation__link_active" : ""
            }`}
          >
            Inicio
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/about"
            className={`navigation__link ${
              location.pathname === "/about" ? "navigation__link_active" : ""
            }`}
          >
            Historia
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            to="/shop"
            className={`navigation__link ${
              location.pathname === "/shop" ? "navigation__link_active" : ""
            }`}
          >
            Tienda
          </Link>
        </li>
      </ul>
    </nav>
  );
}
