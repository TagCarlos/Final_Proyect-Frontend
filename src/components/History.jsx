import Footer from "./Footer";

export default function History(params) {
  return (
    <>
      {/* <header>
        <img src="" alt="logo narcisa" />
        <a href="Proélefsi"></a>
        <a href="Mageía"></a>
        <a href="Iereía"></a>
        <a href="Efchés"></a>
        <>
          <a href="">
            <img src="src/images/icons/search.svg" alt="buscador" />
          </a>
          <a>
            <img
              src="src/images/icons/shopping_bag.svg"
              alt="bolsa de compra"
            />
          </a>
          <a>
            <img src="src/images/icons/profile.svg" alt="perfil" />
          </a>
        </>
      </header> */}

      <main>
        <section className="history__header" id="historia">
          <h3>Arte en metal</h3>
          <h2>Nuestras Historias</h2>
          <p>
            Cada pieza es un capítulo. Descubre el origen, la inspiración y el
            alma detrás de nuestras colecciones más icónicas.
          </p>
        </section>

        <section>
          <h2>
            "La joyería no es solo un adorno, es una
            <span>extensión del alma." </span>
          </h2>
          <p>
            En nuestro talller, fusionamos técnicas ancestrales con visión
            contemporánea.
          </p>
          <p>
            No buscamos la perfección industrial, sino la belleza de lo hecho a
            mano, donde cada imperfección cuenta una historia de fuego, metal y
            pasión
          </p>
        </section>

        <section className="history__item">
          <div className="history__content">
            <h2 className="history__number" id="#Proélefsi">
              01
            </h2>
            <h2>
              <span>Colección</span> Proélefsi
            </h2>
            <p>
              significa <span>origen.</span>
            </p>
            <p>
              Esta colección esta inspirada en las civilizaciones antiguas que
              en realidad vienen del futuro. Las piedras utilizadas representa
              la riqueza, la sabiduría, el equilibrio, la protección, el poder
              de transformación, el amor y la creatividad.
            </p>
            <button>Comprar Proélefsi</button>
          </div>
          <div className="history__image">
            <img
              height={200}
              src="src\images\CML_0220 Ana.png"
              alt="imagen de la colecion 1"
            />
          </div>
        </section>

        <section className="history__item">
          <div className="history__content">
            <h2 className="history__number" id="#Mageía">
              02
            </h2>
            <h2>
              <span>Colección</span> Mageía
            </h2>
            <p>
              significa <span>magia.</span>
            </p>
            <p>
              Esta colección esta inspirada en el poder y misticismo de los
              ópalos, las ágatas y sus colores. Las piedras utilizadas son
              ópalos y ágatas de fuego. El ópalo se asocia con el equilibrio
              emocional, la creatividad, la intuición y la espiritualidad. Las
              ágatas protegen de las malas enérgicas.
            </p>
            <button>Comprar Mageía</button>
          </div>
          <div className="history__image">
            <img
              height={200}
              src="src\images\CML_0148 Ana.png"
              alt="imagen de la colecion 2"
            />
          </div>
        </section>

        <section className="history__item">
          <div className="history__content">
            <h2 className="history__number" id="#Iereía">
              03
            </h2>
            <h2>
              <span>Colección</span> Iereía
            </h2>
            <p>
              significa <span>sacerdotisa.</span>
            </p>
            <p>
              Esta colección esta inspirada en la fuerza del poder femenino y la
              importancia que se le dio desde el inicio de los tiempos. Las
              piedras utilizadas representan la riqueza, la sabiduría, el
              equilibrio, la protección, el poder de transformación, el amor y
              la creatividad.
            </p>
            <button>Comprar Iereía</button>
          </div>
          <div className="history__image">
            <img
              height={200}
              src="src\images\CML_0195 Ana.png"
              alt="imagen de la colecion 3"
            />
          </div>
        </section>

        <section className="history__item">
          <div className="history__content">
            <h2 className="history__number" id="#Efchés">
              04
            </h2>
            <h2>
              <span>Colección</span> Efchés
            </h2>
            <p>
              significa <span>deseos.</span>
            </p>
            <p>
              Esta colección esta intencionada para que encuentres amuletos que
              te recuerden tus deseos y energéticamente te ayuden a
              materializarlos.
            </p>
            <button>Comprar Efchés</button>
          </div>
          <div className="history__image">
            <img
              height={200}
              src="src\images\CML_0008 Ana.png"
              alt="imagen de la colecion 4"
            />
          </div>
        </section>
      </main>
      {/*  <Footer></Footer> */}
    </>
  );
}
