import React, { useContext } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import VideoCorporativo from "../../components/VideoCorporativo";
import iconoIndustria from "../../imagenes/icono-industria.svg";
import iconoServicios from "../../imagenes/icono-servicios.svg";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import { animateScroll as scroll } from "react-scroll";
import { dataEnglishHome, dataSpanishHome } from "../../modules/home/constants";
import { Contenedor } from "./style";
import HomeModule from "../../modules/home/HomeModule";

const Home = () => {
  const { idioma } = useContext(idiomaContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  scroll.scrollTo();

  return (
    <Contenedor>
      <HomeModule
        ocultarEnlaces={ocultarEnlaces}
        videoCorporativo={<VideoCorporativo />}
        iconoIndustria={iconoIndustria}
        iconoServicios={iconoServicios}
        data={idioma === "español" ? dataSpanishHome : dataEnglishHome}
      />
    </Contenedor>
  );
};

export default Home;
