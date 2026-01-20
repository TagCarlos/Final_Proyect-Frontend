function Footer(params) {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Columna 1: Logo y descripción */}
        <div className="footer__section footer__brand">
          <img
            className="footer__logo"
            src="src/images/icons/logo-narcisa.jpeg"
            alt="logo-narcisa"
          />
          <p className="footer__description">
            Joyas artesanales que celebran tu historia personal. Creadas con
            amor y materiales que respetan nuestro planeta
          </p>
        </div>

        {/* Columna 2: Tienda */}
        <div className="footer__section">
          <h3 className="footer__title">Tienda</h3>
          <ul className="footer__links">
            <li>
              <a href="/shop" className="footer__link">
                Todas las joyas
              </a>
            </li>
            <li>
              <a href="/#colecciones" className="footer__link">
                Colecciones destacadas
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Eventos
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Soporte */}
        <div className="footer__section">
          <h3 className="footer__title">Soporte</h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Contactanos
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Medidor de anillos virtual
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Redes Sociales */}
        <div className="footer__section">
          <h3 className="footer__title">Redes Sociales</h3>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/watch/hashtag/boldjewelry?__eep__=6%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src="src/images/icons/facebook.png" alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/___.narcisa"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src="src/images/icons/instagram.png" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  {
    /* <div className="footer__container">
      <img
        className="header__logo"
        src="src/images/icons/logo-narcisa.jpeg"
        alt="logo-narcisa"
      />
      <h2>Tienda</h2>
      <h2>Soporte</h2>
      <h2>Redes Sociales</h2>
      <p>
        Joyas artesanales que celebran tu historia personal. Creadas con amor y
        materiales que respetan nuestro planeta
      </p>
      <p>Todas las joyas</p>
      <p>Colecciones destacadas</p>
      <p>Eventos</p>
      <p>Contactanos</p>
      <p>Medidor de anillos virtual</p>
      <a
        href="https://www.facebook.com/watch/hashtag/boldjewelry?__eep__=6%2F"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/images/icons/facebook.png" alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com/___.narcisa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/images/icons/instagram.png" alt="insta" />
      </a>
    </div> */
  }
}

export default Footer;
