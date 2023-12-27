/* eslint-disable multiline-ternary */
import React, { useContext } from "react";

import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import idiomaContext from "../../context/idioma/idiomaContext";
import { Link } from "react-router-dom";

const ProductosModule = () => {
  const { idioma } = useContext(idiomaContext);
  const { ocultarEnlaces } = useContext(useEnlacesContext);

  return (
    <>
      <div onMouseOver={ocultarEnlaces}>
        {idioma === "español" ? (
          <h1 className="text-[2.5rem]">Productos</h1>
        ) : (
          <h1 className="text-[2.5rem]">Product</h1>
        )}

        <div className="contenedor-imagen" />

        <div className="flex w-full lg:justify-center flex-nowrap overflow-x-scroll lg:overflow-x-hidden lg:w-screen">
          <Link
            to="/productos-servicios/productos/chocolates"
            className="no-underline text-black"
          >
            <div className="w-[20rem] m-[2rem]">
              <h4 className="text-center text-[1.6rem]">
                {idioma === "español" ? "Chocolates" : "Chocolate"}
              </h4>
              <div className="w-[20rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src="https://firebasestorage.googleapis.com/v0/b/agromyss.appspot.com/o/Pitalla.png?alt=media&token=b3cf9bf2-07c7-4a18-8324-e34150af641a"
                  alt=""
                />
              </div>
              <div className="w-full justify-center flex">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt dolor aliquid a dolorum quasi similique
                animi necessitatibus minus, nam voluptas recusandae sapiente
                ducimus cum, quae reprehenderit, saepe perspiciatis esse.
              </div>
            </div>
          </Link>

          <Link
            to="/productos-servicios/productos/cacao"
            className="no-underline text-black"
          >
            <div className="w-[20rem] m-[2rem]">
              <h4 className="text-center text-[1.6rem]">
                {idioma === "español" ? "Cacao" : "Cocoa"}
              </h4>
              <div className="w-[20rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src="https://firebasestorage.googleapis.com/v0/b/agromyss.appspot.com/o/cacao%20100.png?alt=media&token=11f31aa2-d0ac-4c4d-b045-a6f37c140bcd"
                  alt=""
                />
              </div>
              <div className="w-full justify-center flex">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt dolor aliquid a dolorum quasi similique
                animi necessitatibus minus, nam voluptas recusandae sapiente
                ducimus cum, quae reprehenderit, saepe perspiciatis esse.
              </div>
            </div>
          </Link>

          <Link
            to="/productos-servicios/productos/mangos"
            className="no-underline text-black"
          >
            <div className="w-[20rem] m-[2rem]">
              <h4 className="text-center text-[1.6rem]">Mangos</h4>
              <div className="w-[20rem] h-[30rem]">
                <img
                  className="w-full h-full object-contain"
                  src="https://firebasestorage.googleapis.com/v0/b/agromyss.appspot.com/o/Mango.png?alt=media&token=39c5a12c-c288-44da-a809-b3d46686122f"
                  alt=""
                />
              </div>
              <div className="w-full justify-center flex">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur incidunt dolor aliquid a dolorum quasi similique
                animi necessitatibus minus, nam voluptas recusandae sapiente
                ducimus cum, quae reprehenderit, saepe perspiciatis esse.
              </div>
            </div>
          </Link>
        </div>

        <div style={{ marginBottom: "10rem" }} />
      </div>
    </>
  );
};

export default ProductosModule;
