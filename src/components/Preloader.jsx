function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <div className="preloader__diamond">
          <div className="preloader__diamond_top"></div>
          <div className="preloader__diamond_bottom"></div>
        </div>
        <p className="preloader__text">Cargando joyas...</p>
      </div>
    </div>
  );
}

export default Preloader;
