import React, { useState, createContext } from "react";

export const useEnlacesContext = createContext();

const UseEnlaces = (props) => {
  /* state que controla cuando mostrar listado productos y servicios */
  const [verProductosServicios, setVerProductosServicios] = useState(false);

  /* state que controla cuando mostrar listado industria */
  const [verIndustria, setVerIndustria] = useState(false);

  const [verServicios, setVerServicios] = useState(false);

  /* state que controla cuando mostrar listado chocolates */
  const [verChocolates, setVerChocolates] = useState(false);

  /* state que controla cuando mostrar listado cacao */
  const [verCacao, setVerCacao] = useState(false);

  const [verMango, setVerMango] = useState(false);

  /* state que muestra los enlaces escritorio */
  const [verEnlaces, setVerEnlaces] = useState(true);

  /* enlaces sustentabididad */
  const [verSustentabilidad, setVersustentabilidad] = useState(false);

  /* enlaces sobre agromyss */
  const [verSobreAgromyss, setVerSobreAgromyss] = useState(false);

  /* funcion que muestra el listado productos y servicios*/
  const mostrarProductos = () => {
    if (verProductosServicios === false) {
      setVerProductosServicios(true);
      setVersustentabilidad(false);
      setVerSobreAgromyss(false);
    }
  };

  /* funcion que muestra el listado industria*/
  const mostrarIndustria = () => {
    if (verIndustria === false) {
      setVerIndustria(true);
      setVerServicios(false);
    }
  };

  /* funcion que muestra el listado industria*/
  const mostrarServicios = () => {
    if (verServicios === false) {
      setVerServicios(true);
      setVerIndustria(false);
    }
  };

  /* funcion que muestra el listado chocolates*/
  const mostrarChocolates = () => {
    if (verChocolates === false) {
      setVerChocolates(true);
      setVerCacao(false);
      setVerMango(false);
    }
  };

  const mostrarCacao = () => {
    if (verCacao === false) {
      setVerCacao(true);
      setVerChocolates(false);
      setVerMango(false);
    }
  };

  const mostrarMango = () => {
    if (verMango === false) {
      setVerMango(true);
      setVerCacao(false);
      setVerChocolates(false);
    }
  };

  /* funcion que muestra los enlaces en movil */
  const mostrarenlaces = () => {
    if (verEnlaces) {
      setVerEnlaces(false);
    } else {
      setVerEnlaces(true);
    }
  };

  const mostrarSustentabilidad = () => {
    setVersustentabilidad(true);
    if (!verSustentabilidad) {
      setVerProductosServicios(false);
      setVerSobreAgromyss(false);
    }
  };

  const mostrarSobreAgromyss = () => {
    setVerSobreAgromyss(true);
    if (!verSobreAgromyss) {
      setVerProductosServicios(false);
      setVersustentabilidad(false);
    }
  };

  const mostrarAndOcultarProductos = () => {
    setVerProductosServicios(!verProductosServicios);
  };

  const mostrarAndOcultarSustentabilidad = () => {
    setVersustentabilidad(!verSustentabilidad);
  };

  const mostrarAndOcultarSobreAgromyss = () => {
    setVerSobreAgromyss(!verSobreAgromyss);
  };

  const ocultarEnlaces = () => {
    setVerProductosServicios(false);
    setVerIndustria(false);
    setVerServicios(false);
    setVerChocolates(false);
    setVerCacao(false);
    setVerMango(false);
    setVersustentabilidad(false);
    setVerSobreAgromyss(false);
  };

  return (
    <useEnlacesContext.Provider
      value={{
        verProductosServicios,
        verIndustria,
        verServicios,
        verChocolates,
        verCacao,
        verMango,
        verEnlaces,
        verSustentabilidad,
        verSobreAgromyss,

        mostrarProductos,
        mostrarIndustria,
        mostrarServicios,
        mostrarChocolates,
        mostrarCacao,
        mostrarMango,
        mostrarenlaces,
        mostrarSustentabilidad,
        mostrarSobreAgromyss,
        ocultarEnlaces,
        mostrarAndOcultarProductos,
        mostrarAndOcultarSustentabilidad,
        mostrarAndOcultarSobreAgromyss,
      }}
    >
      {props.children}
    </useEnlacesContext.Provider>
  );
};

export default UseEnlaces;
