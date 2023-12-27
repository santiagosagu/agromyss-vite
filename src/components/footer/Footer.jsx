import React from "react";
// import idiomaContext from "../context/idioma/idiomaContext";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import { Contenedor } from "./style";

const Footer = () => {
  // const { idioma } = useContext(idiomaContext);

  return (
    <Contenedor className="px-4">
      <div className="grid-column">
        <div className="mt-12">
          <h3>CONTÁCTENOS</h3>
          <p>Telefono fijo:</p>
          <p>Whatsapp:</p>
          <p>agromyssas@gmail.com</p>
        </div>
        <div className="mt-12 redes-sociales">
          <h3 className="text-center">SÍGUENOS EN REDES SOCIALES</h3>
          <div className="flex justify-center gap-8 px-11 flex-wrap">
            <a
              href="https://www.facebook.com/profile.php?id=100091191987779"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src="/images/redes/facebook.png"
                  alt="icono-facebook"
                  width="80rem"
                  className="text-center"
                />
                <p className="text-slate-50">Agromyss</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/waikao.chocolates/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src="/images/redes/instagram.png"
                  alt="icono-instagram"
                  width="80rem"
                  className="ml-4"
                />
                <p>waikao.chocolates</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/cafewaikaodelatrece/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <img
                  src="/images/redes/instagram.png"
                  alt="icono-instagram"
                  width="80rem"
                  className="ml-4"
                />
                <p>cafewaikaodelatrece</p>
              </div>
            </a>
          </div>
        </div>
        <div className="mt-12 xl:ml-3 2xl:ml-24">
          <h3>UBICACIÓN</h3>
          <div className="mt-10">
            <p>Maceo Antioquia</p>
            <a
              href="https://www.google.com/maps/place/6%C2%B032'22.0%22N+74%C2%B037'49.0%22W/@6.5394497,-74.6324665,753m/data=!3m2!1e3!4b1!4m5!3m4!1s0x0:0x61cb12f78341fcc8!8m2!3d6.5394444!4d-74.6302778?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PersonPinCircleIcon className="mb-1" /> 6°32'22''N74°37'49''w
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/images/logo.png" alt="" />
        </div>
      </div>
      <div className="mt-6">
        <p className="text-center">
          Medellin - Colombia copyright&copy; {new Date().getFullYear()}{" "}
          Agromyss SAS Todos los derechos reservados
        </p>
      </div>
    </Contenedor>
  );
};

export default Footer;
