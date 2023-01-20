import React, { useContext } from "react";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import idiomaContext from "../../context/idioma/idiomaContext";
import { corporativoEnglish, corporativoSpanish } from "./constants";

const corporativoModule = () => {
  const { idioma } = useContext(idiomaContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  scroll.scrollTo();

  return (
    <div onMouseOver={ocultarEnlaces}>
      <h1 className="text-[2.5rem]">
        {idioma === "español"
          ? corporativoSpanish.title
          : corporativoEnglish.title}
      </h1>
      <Link
        to="/corporativo/video-corporativo"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          color: "#000",
        }}
      >
        <h5>
          <SlowMotionVideoIcon />
          {idioma === "español" ? "Ver Nuestro video" : "See our video"}
        </h5>
      </Link>
      <div className="contenido">
        <div className="card card-reverse">
          <div className="contenido-imagen">
            <img
              src="/images/filosofia/filosofia nuestra mision.jpg"
              alt="escala-de-mejora"
            />
          </div>
          <div className="contenido-texto">
            <h2 className="text-[2rem]">
              {idioma === "español"
                ? corporativoSpanish.mision.title
                : corporativoEnglish.mision.title}
            </h2>
            <p>
              {idioma === "español"
                ? corporativoSpanish.mision.descripcion
                : corporativoEnglish.mision.descripcion}
            </p>
          </div>
        </div>
        <div className="card card-no-reverse">
          <div className="contenido-imagen">
            <img
              src="/images/filosofia/filosofia nuestra vision.JPG"
              alt="escala-de-mejora"
            />
          </div>
          <div className="contenido-texto">
            <h2 className="text-[2rem]">
              {idioma === "español"
                ? corporativoSpanish.vision.title
                : corporativoEnglish.vision.title}
            </h2>
            <p>
              {idioma === "español"
                ? corporativoSpanish.vision.descripcion
                : corporativoEnglish.vision.descripcion}
            </p>
          </div>
        </div>
        <div className="card card-reverse">
          <div className="contenido-imagen">
            <img
              src="/images/filosofia/filosofia principios.JPG"
              alt="escala-de-mejora"
            />
          </div>
          <div className="contenido-texto">
            <h2 className="text-[2rem]">
              {idioma === "español"
                ? corporativoSpanish.principios.title
                : corporativoEnglish.principios.title}
            </h2>
            {idioma === "español"
              ? corporativoSpanish.principios.items
              : corporativoEnglish.principios.items}
          </div>
        </div>
        <div className="card card-no-reverse">
          <div className="contenido-imagen">
            <img
              src="/images/filosofia/filosofia valores.jpg"
              alt="escala-de-mejora"
            />
          </div>
          <div className="contenido-texto">
            <h2 className="text-[2rem]">
              {idioma === "español"
                ? corporativoSpanish.valores.title
                : corporativoEnglish.valores.title}
            </h2>
            {idioma === "español"
              ? corporativoSpanish.valores.items
              : corporativoEnglish.valores.items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default corporativoModule;
