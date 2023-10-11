import React, { useContext } from "react";
import { Element } from "react-scroll";
import idiomaContext from "../../context/idioma/idiomaContext";
import { Component } from "./style";
import { sobreAgromyssConstanst } from "./hooks";

const SobreAgromyssModule = () => {
  const { idioma } = useContext(idiomaContext);
  const { sobreAgromyssData } = sobreAgromyssConstanst();

  return (
    <>
      <Element name="inicio">
        <h1>{idioma === "español" ? "Sobre Agromyss" : "About Agromyss"}</h1>
      </Element>
      <div className="contenedor-imagen" />
      <Component>
        {sobreAgromyssData.map((data) => (
          <Element key={data.name} name={data.name}>
            {data.value}
          </Element>
        ))}
      </Component>
    </>
  );
};

export default SobreAgromyssModule;
