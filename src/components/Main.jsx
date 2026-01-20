import Modals from "./Modals";
import { useModal } from "../hooks/useModal";
function Main() {
  return (
    <div className="main" id="inicio">
      <section className="main__history">
        <div className="main__history_container">
          <div className="main__history_content">
            <h2 className="main__history_title">
              Conoce a la artista detrás de la maestría
            </h2>
            <p className="main__history_description">
              En la búsqueda constante de formas de expresión que plasmen la
              experiencia humana, he encontrado en la joyería una forma de
              transmitir ideas, sensaciones y visiones para compartirlas con el
              mundo.
            </p>
            <Modals></Modals>
            <a href="/about">
              <button className="main__history_button">Leer historia</button>
            </a>
          </div>

          <div className="main__history_image-container">
            <img
              src="https://previews.dropbox.com/p/thumb/AC6fidAUDNuszNQu2KwCgu811RJ9uxsWIWDCgASKZET7DuHLlT5TKsdYmvPQNJfPZccQKPkdbaMGOvNhUE0WJLX7JFlQYehXr_5t3GgFNq1501A2-Bt0hPOwsy5N7HbGtxFTJ0iCq1gvFfsA5g_gS0EDYtnbe95LdFLVZcGKUMWMt81m_EoVHGBVeN5FqzaexYBcHJVmiN1RmSwDlbyz2bvdcM2RIwT5UyvG96JJzpLRVIAqDrh6dgGE9qITx7-6R6HoIVQXoDYZBWg9g7h27S1vOG9nN0tkhUgPXhKDuarA4VBIYhZK4FrmAV4dnCysiAY/p.png"
              alt="imagen de la artista"
              className="main__history_image"
            />
          </div>
        </div>
      </section>

      <section className="main__values">
        <img
          className="main__values-image"
          src="src/images/icons/herramientas.png"
          alt="herramientas"
        />
        <img
          className="main__values-image main__values-image-icon"
          src="src/images/icons/mundo.png"
          alt="mundo"
        />
        <img
          className="main__values-image"
          src="src/images/icons/verificado.png"
          alt="verificado"
        />
        <h3 className="main__values-title">Artesanal</h3>{" "}
        <h3 className="main__values-title">Procedencia ética</h3>
        <h3 className="main__values-title">Garantía de por vida</h3>
        <p className="main__values-paragraph">
          Piezas forjadas con precisión en nuestro atelier local.
        </p>
        <p className="main__values-paragraph">
          Metales recuperados y gemas libres de conflicto
        </p>
        <p className="main__values-paragraph">
          Calidad que resiste el paso del tiempo
        </p>
      </section>

      <section className="main__featured-collections">
        <div className="main__collections_header">
          <h2 className="main__collections_title" id="colecciones">
            Colecciones destacadas
          </h2>
          <a href="/shop">
            <button className="main__collection_button">Ver todas</button>
          </a>
        </div>

        <div className="main__collections_grid">
          <div className="main__collection_item">
            <div className="main__collection_image-container">
              <img
                src="src/images/CML_0003 Ana.png"
                alt="Colección Proélefsi"
                className="main__collection_image"
              />
            </div>
            <div className="main__collection_info">
              <h3 className="main__collection_name">Proélefsi</h3>
              <p className="main__collection_subtitle">Origen</p>
            </div>
          </div>

          <div className="main__collection_item">
            <div className="main__collection_image-container">
              <img
                src="src/images/CML_0025 Ana.png"
                alt="Colección Mageía"
                className="main__collection_image"
              />
            </div>
            <div className="main__collection_info">
              <h3 className="main__collection_name">Mageía</h3>
              <p className="main__collection_subtitle">Magia</p>
            </div>
          </div>

          <div className="main__collection_item">
            <div className="main__collection_image-container">
              <img
                src="src/images/CML_0084 Ana.png"
                alt="Colección Iereía"
                className="main__collection_image"
              />
            </div>
            <div className="main__collection_info">
              <h3 className="main__collection_name">Iereía</h3>
              <p className="main__collection_subtitle">Sacerdotisa</p>
            </div>
          </div>
        </div>
      </section>

      <section className="main__new-arrivals">
        <div className="main__arrivals_header">
          <h2 className="main__arrivals_title">Novedades</h2>
          <div className="main__arrivals_navigation">
            {/* <button className="arrivals__nav-btn arrivals__nav-btn--prev">
              <img src="src/images/icons/flecha-izquierda.png" alt="anterior" />
            </button>
            <button className="arrivals__nav-btn arrivals__nav-btn--next">
              <img src="src/images/icons/flecha-derecha.png" alt="siguiente" />
            </button> */}
          </div>
        </div>

        <div className="main__arrivals_grid">
          <div className="main__product_card">
            <div className="main__product_image-container">
              <img
                src="src/images/CML_0061 Ana.png"
                alt="Colección de Proélefsi"
                className="main__product_image"
              />
            </div>
            <div className="main__product_info">
              <h3 className="main__product_name">Colección de Proélefsi</h3>
              <p className="main__product_price">$250</p>
            </div>
          </div>

          <div className="main__product_card">
            <div className="main__product_image-container">
              <img
                src="src/images/CML_0110 Ana.png"
                alt="Colección de Mageía"
                className="main__product_image"
              />
            </div>
            <div className="main__product_info">
              <h3 className="main__product_name">Colección de Mageía</h3>
              <p className="main__product_price">$180</p>
            </div>
          </div>

          <div className="main__product_card">
            <div className="main__product_image-container">
              <img
                src="src/images/CML_0227 Ana.png"
                alt="Colección de Iereía"
                className="main__product_image"
              />
            </div>
            <div className="main__product_info">
              <h3 className="main__product_name">Colección de Iereía</h3>
              <p className="main__product_price">$300</p>
            </div>
          </div>

          <div className="main__product_card">
            <div className="main__product_image-container">
              <img
                src="src/images/CML_0130 Ana.png"
                alt="Colección de Efchés"
                className="main__product_image"
              />
            </div>
            <div className="main__product_info">
              <h3 className="main__product_name">Colección de Efchés</h3>
              <p className="main__product_price">$170</p>
            </div>
          </div>
        </div>
      </section>

      <section className="main__email">
        <img
          className="main__email-icon"
          src="src/images/icons/correo-electronico.png"
          alt="email"
        />
        <h2>Se parte de nuestra comunidad</h2>
        <p>
          Recibe ofertas exclusivas, lanzamientos anticipados y todo sobre el
          mundo de la joyeria
        </p>
        <input type="email" />
        <button>Suscribirse</button>
      </section>
    </div>
  );
}

export default Main;
