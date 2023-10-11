import { useContext } from "react";
import idiomaContext from "../../../context/idioma/idiomaContext";
import { sobreAgromyssEnglish, sobreAgromyssSpanish } from "../constants";

export const sobreAgromyssConstanst = () => {
  const { idioma } = useContext(idiomaContext);

  const sobreAgromyssData =
    idioma === "español" ? sobreAgromyssSpanish : sobreAgromyssEnglish;

  return {
    sobreAgromyssData,
  };
};
