import idiomaContext from "../../../context/idioma/idiomaContext";
import { useContext } from "react";
import { sustentabilidadEnglish, sustentabilidadSpanish } from "../constants";

export const sustentabilidadConstanst = () => {
  const { idioma } = useContext(idiomaContext);

  const sustentabilidadData =
    idioma === "español" ? sustentabilidadSpanish : sustentabilidadEnglish;

  return {
    sustentabilidadData,
  };
};
