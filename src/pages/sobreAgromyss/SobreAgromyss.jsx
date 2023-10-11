import React, { useState, useContext, useEffect } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import { animateScroll as scroll, scroller } from "react-scroll";
import { Contenedor } from "./style";
import { useParams } from "react-router-dom";
import SobreAgromyssModule from "../../modules/sobreAgromyss/sobreAgromyss";

const SobreAgromyss = (props) => {
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

    if (url === "responsabilidad-social-y-ambiental") {
      setSection("responsabilidad social y ambiental");
    }
    if (url === "codigo-de-conducta-del-proveedor") {
      setSection("codigo de conducta del proveedor");
    }
    if (url === "declaracion-de-esclavitud-moderna") {
      setSection("declaracion de esclavitud moderna");
    }
    if (url === "politica-ambiental-y-social") {
      setSection("politica ambiental y social");
    }
    if (url === "politica-de-inquietudes-eticas") {
      setSection("politica de inquietudes eticas");
    }
  }, [url, width, idioma]);

  scroller.scrollTo(section, scrollType);

  return (
    <Contenedor>
      <div onMouseOver={ocultarEnlaces}>
        <SobreAgromyssModule />
      </div>
    </Contenedor>
  );
};

export default SobreAgromyss;
