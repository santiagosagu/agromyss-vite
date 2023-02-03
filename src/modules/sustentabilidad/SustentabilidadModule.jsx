import React, { useContext } from "react";
import { Element } from "react-scroll";
import idiomaContext from "../../context/idioma/idiomaContext";
import { sustentabilidadConstanst } from "./hooks";
import { Component } from "./style";

const SustentabilidadModule = () => {
  const { idioma } = useContext(idiomaContext);
  const { sustentabilidadData } = sustentabilidadConstanst();

  return (
    <>
      <Element name="inicio">
        <h1>{idioma === "español" ? "Sustentabilidad" : "Sustainability"}</h1>
      </Element>
      <div className="contenedor-imagen" />
      <Component>
        {sustentabilidadData.map((data) => (
          <Element key={data.name} name={data.name}>
            {data.value}
          </Element>
        ))}
      </Component>
    </>
  );
};

export default SustentabilidadModule;
