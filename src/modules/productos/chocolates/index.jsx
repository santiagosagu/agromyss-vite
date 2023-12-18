/* eslint-disable multiline-ternary */
import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEnlacesContext } from "../../../context/enlaces/UseEnlaces";
import idiomaContext from "../../../context/idioma/idiomaContext";
import { Divider } from "@mui/material";

import { db } from "../../../FirebaseConfig";
import { animateScroll as scroll } from "react-scroll";
import { CarritoContext } from "../../../context/carritoContext/CarritoContext";

const ChocolatesModule = () => {
  const { idioma } = useContext(idiomaContext);
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  const [chocolatinas, setChocolatinas] = useState([]);

  const [todosProductosDB, setTodosProductosDB] = useState([]);

  /* hooks para el idioma */
  // const { idioma } = useContext(idiomaContext);

  const { agregarCarrito } = useContext(CarritoContext);

  const navigate = useNavigate();

  scroll.scrollTo();

  const verProducto = (categoria, producto) => {
    // eslint-disable-next-line no-undef
    navigate(`/productos-servicios/productos/${categoria}/${producto}`);
  };

  useEffect(() => {
    const guardarDatos = async () => {
      await db
        .collection("productos")
        .limit(3)
        .onSnapshot((doc) => {
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
    <>
      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1 className="text-[2.6rem]">Chocolates</h1>
        ) : (
          <h1 className="text-[2.6rem]">Chocolate</h1>
        )}

        <div className="contenedor-imagen" />

        <div className="mt-[4rem] mb-[3rem] ">
          <Divider>
            <h3 className="text-center text-[2.2rem]">Chocolatinas</h3>
          </Divider>
        </div>

        <div className="flex lg:justify-center flex-nowrap overflow-x-scroll lg:overflow-x-hidden w-screen">
          {chocolatinas.map((product, index) => (
            <div key={index} className="w-[25rem] lg:m-[1rem]">
              <div className="w-[25rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src={product.imagenes[0]}
                  onClick={() => verProducto("chocolatinas", product.url)}
                  alt=""
                />
              </div>
              <h5 className="text-xl text-center font-bold">
                {product.nombreProducto}
              </h5>
              <div className="flex justify-center">
                <p
                  className=" p-3"
                  style={{
                    border: "1px solid rgb(13, 130, 121)",
                    fontSize: "1.2rem",
                  }}
                >
                  $ {product.precio}
                </p>
                <p
                  className=" p-3 hover:bg-red-800 hover:text-white "
                  style={{
                    border: "1px solid rgb(13, 130, 121)",
                    fontSize: "1.2rem",
                  }}
                  onClick={() => agregarCarrito(product)}
                >
                  Añadir al carrito
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/productos-servicios/productos/chocolates/chocolatinas">
          <p className="text-end mr-16">Ver mas...</p>
        </Link>

        <div style={{ marginBottom: "10rem" }} />
      </div>
    </>
  );
};

export default ChocolatesModule;
