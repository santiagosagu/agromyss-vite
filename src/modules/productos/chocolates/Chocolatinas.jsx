import React, { useContext, useEffect, useState } from "react";
import { Contenido } from "./style";
import { db } from "../../../FirebaseConfig";
import { animateScroll as scroll } from "react-scroll";
import { useEnlacesContext } from "../../../context/enlaces/UseEnlaces";
import { CarritoContext } from "../../../context/carritoContext/CarritoContext";

const Chocolatinas = () => {
  const [chocolatinas, setChocolatinas] = useState([]);

  const [todosProductosDB, setTodosProductosDB] = useState([]);

  /* hooks para el idioma */
  // const { idioma } = useContext(idiomaContext);

  const { agregarCarrito } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  scroll.scrollTo();

  const verProducto = (categoria, producto) => {
    // eslint-disable-next-line no-undef
    history.push(`/productos-servicios/productos/${categoria}/${producto}`);
  };

  useEffect(() => {
    const guardarDatos = async () => {
      await db.collection("productos").onSnapshot((doc) => {
        const resultado = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setTodosProductosDB(resultado);
      });
    };

    guardarDatos();
  }, []);

  useEffect(() => {
    if (todosProductosDB) {
      const resultado = todosProductosDB.filter(
        (item) => item.categoria === "chocolatinas"
      );

      setChocolatinas(resultado);
    }
  }, [todosProductosDB]);

  return (
    <Contenido onMouseOver={ocultarEnlaces}>
      <div className=" flex flex-col justify-center items-center">
        <h1 className="text-[2.5rem]">Chocolatinas</h1>
        <div className="flex flex-wrap w-4/5 justify-center gap-9 mt-9">
          {chocolatinas.map((product) => (
            <div
              className="w-[400px] h-[600px] p-1 mb-8 flex flex-col justify-between"
              key={product.id}
            >
              <div className="w-[400px] h-[400px]">
                <img
                  src={product.imagenes[0]}
                  alt=""
                  onClick={() => verProducto("chocolatinas", product.url)}
                  className="w-full h-full object-contain"
                />
              </div>
              <h5 className="text-xl text-center font-bold">
                {product.nombreProducto}
              </h5>
              <div className="flex justify-center mt-4 items-end">
                <p className="agregar-carrito">$ {product.precio}</p>
                <p
                  className="carrito agregar-carrito"
                  onClick={() => agregarCarrito(product)}
                >
                  Añadir al Carrito
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Contenido>
  );
};

export default Chocolatinas;
