import Footer from "./Footer";
import { useState } from "react";

export default function Shop(params) {
  const [filtros, setFiltros] = useState({
    categorias: [],
    materiales: [],
    colecciones: [],
    precioMin: 0,
    precioMax: 5000,
  });

  const handleCategoriaSeleccionada = (categoria) => {
    setFiltros((prevFiltros) => {
      const nuevasCategorias = prevFiltros.categorias.includes(categoria)
        ? prevFiltros.categorias.filter((cat) => cat !== categoria)
        : [...prevFiltros.categorias, categoria];

      return {
        ...prevFiltros,
        categorias: nuevasCategorias,
      };
    });
  };

  const productos = [
    {
      nombre: "Proélefsi",
      precio: 1250.0,
      categoria: "anillos",
      material: "plata",
      imagen: "src/images/CML_0003 Ana.png",
    },
    {
      nombre: "Proélefsi",
      precio: 850.0,
      categoria: "aretes",
      material: "plata",
      imagen: "src/images/CML_0251 Ana.png",
    },
    {
      nombre: "Proélefsi",
      precio: 900.0,
      categoria: "collar",
      material: "plata",
      imagen: "src/images/CML_0212 Ana.png",
    },

    {
      nombre: "Mageía",
      precio: 1400.0,
      categoria: "anillos",
      material: "plata",
      imagen: "src/images/CML_0025 Ana.png",
    },
    {
      nombre: "Mageía",
      precio: 950.0,
      categoria: "aretes",
      material: "plata",
      imagen: "src/images/CML_0030 Ana.png",
    },
    {
      nombre: "Mageía",
      precio: 950.0,
      categoria: "collar",
      material: "plata",
      imagen: "src/images/CML_0227 Ana.png",
    },
    {
      nombre: "Iereía",
      precio: 1150.0,
      categoria: "anillos",
      material: "plata",
      imagen: "src/images/CML_0084 Ana.png",
    },
    {
      nombre: "Iereía",
      precio: 850.0,
      categoria: "aretes",
      material: "plata",
      imagen: "src/images/CML_0068 Ana.png",
    },
    {
      nombre: "Iereía",
      precio: 900.0,
      categoria: "collar",
      material: "plata",
      imagen: "src/images/CML_0215 Ana.png",
    },
  ];

  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [busqueda, setBusqueda] = useState("");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [materialSeleccionado, setMaterialSeleccionado] = useState("");
  const [rangoPrecios, setRangoPrecios] = useState([0, 2000]);
  const [ordenamiento, setOrdenamiento] = useState("recientes");

  function applyFilter() {
    let resultados = [...productos];

    if (productosFiltrados) {
      resultados = resultados.filter((producto) =>
        producto.nombre
          .toLowerCase()
          .includes(productosFiltrados.toLowerCase()),
      );
    }

    if (busqueda) {
      resultados = resultados.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
      );
    }

    if (categoriaSeleccionada) {
      resultados = resultados.filter(
        (producto) =>
          producto.categoria.toLowerCase() ===
          categoriaSeleccionada.toLowerCase(),
      );
    }

    if (materialSeleccionado) {
      resultados = resultados.filter((producto) =>
        producto.material
          .toLowerCase()
          .includes(materialSeleccionado.toLowerCase()),
      );
    }

    if (rangoPrecios[0] >= 0 && rangoPrecios[1] > 0) {
      resultados = resultados.filter(
        (producto) =>
          producto.precio >= rangoPrecios[0] &&
          producto.precio <= rangoPrecios[1],
      );
    }

    const avalableMaterials = ["oro, plata, acero"];
    setProductosFiltrados(resultados);
  }

  const handleMaterialSeleccionado = (material) => {
    setMaterialSeleccionado(material);
    applyFilter();
  };

  const handleRangoPrecios = (rango) => {
    setRangoPrecios(rango);
    applyFilter();
  };

  const handleBusqueda = (texto) => {
    setBusqueda(texto);
    applyFilter();
  };
  const categorias = ["Anillos", "Collares", "Pendientes", "Pulseras"];

  return (
    <>
      <main>
        <section id="tienda" className="shop__container_promotion">
          <p>Nueva colección</p>
          <h2>
            Colección <span>Valhalla</span>
          </h2>
        </section>

        <section>
          <div className="shop__container_products">
            {/* <img src="src\images\icons\filtrar.png" alt="filtro" />
            <h2>FILTROS</h2>
            <h2>CATALOGO DE OBRAS</h2>
            <input type="text" placeholder="Buscar joya..." /> */}

            <button>Más recientes</button>
            <button onClick={handleCategoriaSeleccionada}>CATEGORIA</button>
            <button onClick={handleMaterialSeleccionado}>MATERIAL</button>
            <button onClick={handleRangoPrecios}>PRECIO</button>

            <div className="shop__products-grid">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="product-image"
                    />
                  </div>

                  <div className="product-content">
                    <p className="product-category">
                      {producto.categoria.toUpperCase()}
                    </p>
                    <h3 className="product-name">{producto.nombre}</h3>
                    <p className="product-description">
                      {producto.descripcion}
                    </p>
                    <p className="product-price">${producto.precio}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="product-card">
              <div className="product-image-container">
                <img
                  src={productos[0].imagen}
                  alt={productos[0].nombre}
                  className="product-image"
                />
                 
              </div>

              <div className="product-info">
                <p className="product-category">
                  {productos[0].categoria.toUpperCase()}
                </p>
                <h3 className="product-name">{productos[0].nombre}</h3>
                <p className="product-description">
                  Descripción del producto aquí
                </p>
                <div className="product-price-container">
                  <span className="product-price">${productos[0].precio}</span>
                  <span className="product-status">Envío Gratis</span>
                </div>
              </div>
            </div> */}

            {/* <img
              width={300}
              src="src\images\CML_0120 Ana.png"
              alt="ejemp anillos"
            />
            <img
              width={300}
              src="src\images\CML_0215 Ana.png"
              alt="ejemp coyar"
            />
            <img
              width={300}
              src="src\images\CML_0256 Ana.png"
              alt="ejemp aretes" 
            /> */}
          </div>
        </section>
      </main>
    </>
  );
}
