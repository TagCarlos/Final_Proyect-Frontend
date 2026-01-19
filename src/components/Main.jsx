import Modals from "./Modals";
import { useModal } from "../hooks/useModal";
function Main() {
  return (
    <div className="main" id="inicio">
      <section className="main__history">
        {/* <h3 className="main__title">THE VISIONARY</h3> */}
        <h2 className="main__subtitle">
          Conoce a la artista detrás de la maestría
        </h2>
        <h3 className="main__description">
          En la búsqueda constante de formas de expresión que plasmen la
          experiencia humana, he encontrado en la joyería una forma de
          transmitir ideas, sensaciones y visiones para compartirlas con el
          mundo.
        </h3>
        <Modals></Modals>
        <button className="main__button">Leer historia</button>
        <img
          src="src\images\IMG_4841 Ana.png"
          alt="imagen de la artista"
          className="main__image"
        />
      </section>

      <section className="main__values">
        {/* aqui se puede agregar un parrafo que diga "garantia de Narcisa" */}
        <img
          className="main__values-image"
          src="src/images/icons/herramientas.png"
          alt="herramientas"
        />
        <img
          className="main__values-image icon"
          src="src/images/icons/mundo.png"
          alt="mundo"
        />
        <img
          className="main__values-image"
          src="src/images/icons/verificado.png"
          alt="verificado"
        />
        <h3 className="main__values-title">Artesanal</h3>{" "}
        {/* podria ser tambien "De autor o Manufacturado"  */}
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

      <section>
        <div className="main__collection">
          <h2 id="colecciones">Colecciones destacadas</h2>
          <button>Ver todas</button>
        </div>

        <div className="main__collention-images">
          <img
            height={250}
            src="src\images\CML_0003 Ana.png"
            alt="colecion 1"
          />
          <img
            height={200}
            src="src\images\CML_0025 Ana.png"
            alt="colecion 2"
          />
          <img
            height={250}
            src="src\images\CML_0084 Ana.png"
            alt="colecion 3"
          />
          <h3>Proélefsi</h3>
          <h3>Mageía</h3>
          <h3>Iereía</h3>
        </div>
      </section>

      <section>
        <div className="main__arrival">
          <h2 className="main__arrival-title">Novedades</h2>
          <button>
            <img src="src/images/icons/flecha-izquierda.png" alt="izquierda" />
          </button>
          <button>
            <img src="src/images/icons/flecha-derecha.png" alt="derecha" />
          </button>
        </div>
      </section>

      <section className="main__arrival-images">
        <img
          height={200}
          src="src\images\CML_0061 Ana.png"
          alt="nuevos anillos"
        />
        <img
          height={200}
          src="src\images\CML_0110 Ana.png"
          alt="nuevos aretes"
        />
        <img
          height={200}
          src="src\images\CML_0227 Ana.png"
          alt="nuevos collares"
        />
        <img
          height={200}
          src="src\images\CML_0130 Ana.png"
          alt="nuevos aretes"
        />
        <h2>Colección de Proélefsi</h2>
        <h2>Colección de Mageía</h2>
        <h2>Colección de Iereía </h2>
        <h2>Colección de Efchés</h2>
        <p className="main__arrival-price">$250</p>
        <p className="main__arrival-price">$180</p>
        <p className="main__arrival-price">$300</p>
        <p className="main__arrival-price">$170</p>
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
