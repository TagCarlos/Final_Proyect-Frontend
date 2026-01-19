import Footer from "./Footer";
import { useState } from "react";

export default function Shop(params) {
  const productos = [
    {
      nombre: "Proélefsi",
      precio: 1250.0,
      categoria: "anillos",
      material: "plata",
      imagen: "srcimagesCML_0003 Ana.png",
    },
    {
      nombre: "Mageía",
      precio: 1400.0,
      categoria: "anillos",
      material: "plata",
      imagen: "srcimagesCML_0025 Ana.png",
    },
    {
      nombre: "Iereía",
      precio: 1150.0,
      categoria: "anillos",
      material: "plata",
      imagen: "srcimagesCML_0084 Ana.png",
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

    if (busqueda) {
      resultados = resultados.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    if (categoriaSeleccionada) {
      resultados = resultados.filter(
        (producto) =>
          producto.categoria.toLowerCase() ===
          categoriaSeleccionada.toLowerCase()
      );
    }

    if (materialSeleccionado) {
      resultados = resultados.filter((producto) =>
        producto.material
          .toLowerCase()
          .includes(materialSeleccionado.toLowerCase())
      );
    }

    if (rangoPrecios[0] >= 0 && rangoPrecios[1] > 0) {
      resultados = resultados.filter(
        (producto) =>
          producto.precio >= rangoPrecios[0] &&
          producto.precio <= rangoPrecios[1]
      );
    }

    const avalableMaterials = ["oro, plata, acero"];
  }

  const handleCategoriaSeleccionada = () => {
    setCategoriaSeleccionada;
  };

  const handleMaterialSeleccionado = () => {
    setMaterialSeleccionado;
  };

  const handleRangoPrecios = () => {
    setRangoPrecios;
  };
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
            <img src="src\images\icons\filtrar.png" alt="filtro" />
            <h2>FILTROS</h2>
            <h2>CATALOGO DE OBRAS</h2>
            <input type="text" placeholder="Buscar joya..." />

            <button>Más recientes</button>
            <button onClick={handleCategoriaSeleccionada}>CATEGORIA</button>
            <button onClick={handleMaterialSeleccionado}>MATERIAL</button>
            <button onClick={handleRangoPrecios}>PRECIO</button>
            <input type="range" />
            <img
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
            />
          </div>
        </section>
      </main>
    </>
  );
}
