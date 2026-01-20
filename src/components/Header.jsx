import { Link, useLocation } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";

function Header(props) {
  const location = useLocation();
  return (
    <div className="header">
      <>
        <img
          className="header__logo"
          src="src/images/icons/logo-narcisa.jpeg"
          alt="logo-de-Narcisa"
        />
      </>
      <>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li>
              {/* <a href="/">Inicio</a> */}
              <Link
                to={"/"}
                className={`navigation__link ${
                  location.pathname === "/" ? "navigation__link_active" : ""
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              {/* <a href="/about">Historia</a> */}
              <Link
                to={"/about"}
                className={`navigation__link ${
                  location.pathname === "/about"
                    ? "navigation__link_active"
                    : ""
                }`}
              >
                Historia
              </Link>
            </li>
            <li>
              {/* <a href="#colecciones">Colecciones</a> */}
              <Link
                to={"/brain"}
                className={`navigation__link ${
                  location.pathname === "/brain"
                    ? "navigation__link_active"
                    : ""
                }`}
              >
                Marca
              </Link>
            </li>
            <li>
              {/* <a href="/shop">Tienda</a> */}
              <Link
                to={"/shop"}
                className={`navigation__link ${
                  location.pathname === "/shop" ? "navigation__link_active" : ""
                }`}
              >
                Tienda
              </Link>
            </li>
          </ul>
        </nav>
      </>
      <div className="header__nav-icon">
        {/* <a>
          <search inputMode="buscar">
            <img src="src/images/icons/search.svg" alt="buscador" />
          </search>
        </a>
        <a>
          <img src="src/images/icons/shopping_bag.svg" alt="bolsa de compra" />
        </a> */}
        <a>
          <GoogleLoginButton />
        </a>
      </div>
    </div>
  );
}

export default Header;
