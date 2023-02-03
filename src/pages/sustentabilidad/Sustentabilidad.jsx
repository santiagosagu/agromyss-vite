import React, { useState, useContext, useEffect } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import { animateScroll as scroll, scroller } from "react-scroll";
import { Contenedor } from "./style";
import SustentabilidadModule from "../../modules/sustentabilidad/SustentabilidadModule";
import { useParams } from "react-router-dom";

const Sustentabilidad = (props) => {
  const { idioma } = useContext(idiomaContext);

  const [section, setSection] = useState("");

  const { item } = useParams();

  const [scrollType] = useState({
    duration: 100,
    delay: 0,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: window.innerWidth > 1000 ? -200 : -100,
  });

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  const url = item;
  const width = window.innerWidth;

  useEffect(() => {
    if (!url) {
      setSection("inicio");

      scroll.scrollTo();
    }

    if (url === "trabajando-con-agricultores") {
      setSection("trabajando con agricultores");
    }
    if (url === "buscando-el-impacto-emprearial-con-produccion-sostenible") {
      setSection("buscando el impacto empresarial");
    }
    if (url === "impulsando-la-mejora-agricola") {
      setSection("impulsando la mejora agricola");
    }
    if (url === "modelo-empresarial-inclusivo") {
      setSection("modelo empresarial inclusivo");
    }
    if (url === "trazabilidad") {
      setSection("trazabilidad");
    }
    if (url === "cadena-de-suministro-del-cacao") {
      setSection("cadena de suministro del cacao");
    }
    if (url === "sostenibilidad-del-cacao") {
      setSection("sostenibilidad del cacao");
    }
  }, [url, width, idioma]);

  scroller.scrollTo(section, scrollType);

  return (
    <Contenedor>
      <div onMouseOver={ocultarEnlaces}>
        <SustentabilidadModule />
      </div>
    </Contenedor>
  );
};

export default Sustentabilidad;
