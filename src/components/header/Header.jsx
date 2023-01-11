import React, { useContext } from "react";
import idiomaContext from "../../context/idioma/idiomaContext";
import authContext from "../../context/auth/authContext";
import Registro from "../Registro";
import CarritoIcon from "../carrito/CarritoIcon";
import Button from "@mui/material/Button";
import CarritoModal from "../carrito/CarritoModal";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";

const Header = () => {
  /* context para el idioma */
  const { idioma, setIdioma } = useContext(idiomaContext);

  const { miPerfil, autenticado, cerrarSesion, setMiPerfil, isAdmin } =
    useContext(authContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openSetIdioma = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseTest = (idiomaProps) => {
    setAnchorEl(null);
    if (idiomaProps === "español" || idiomaProps === "ingles") {
      setIdioma(idiomaProps);
    }
  };

  /* hooks */
  const {
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
    mostrarAndOcultarProductos,
    mostrarAndOcultarSustentabilidad,
    mostrarAndOcultarSobreAgromyss,
  } = useContext(useEnlacesContext);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full bg-[#8b9022] text-white relative min-[1200px]:fixed min-[1200px]:top-0 min-[1200px]:z-20 min-[1200px]:flex min-[1200px]:items-center min-[1200px]:justify-between min-[1200px]:p-2">
      <>
        <div className="flex justify-center">
          <Link to="/">
            <img
              src="/images/logoAgromyss.png"
              alt="logo"
              style={{ width: "10rem" }}
            />
          </Link>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="w-full bg-[#8b9022] min-[1200px]:flex">
            <i
              className="fas fa-bars absolute top-[2%] right-[1%] text-3xl"
              onClick={() => mostrarenlaces()}
            ></i>
            {verEnlaces && (
              <>
                <div className="z-20 m-2 min-[1200px]:flex">
                  <li className="list-none m-2 cursor-pointer border-b min-[1200px]:border-none">
                    <Link to="/corporativo">
                      {idioma === "español"
                        ? "Filosofia, Principios y Valores"
                        : "Philosophy, Principles and Values"}
                    </Link>
                  </li>
                  <div className="relative">
                    <li
                      onMouseOver={mostrarProductos}
                      className="list-none m-2 cursor-pointer border-b min-[1200px]:border-none"
                    >
                      <Link to="/productos-servicios">
                        {idioma === "español"
                          ? "Productos y Servicios"
                          : "Products and Services"}
                      </Link>
                    </li>
                    <i
                      className="fas fa-angle-down text-base right-4"
                      onClick={mostrarAndOcultarProductos}
                    ></i>

                    {verProductosServicios && (
                      <ul className="w-[90%] h-auto px-2 py-1 bg-[#343A1A] min-[1200px]:w-36 min-[1200px]:flex-col min-[1200px]:fixed">
                        <li
                          onMouseOver={() => mostrarIndustria()}
                          className="border-b"
                        >
                          <Link to="/productos-servicios/productos">
                            {idioma === "español" ? "Productos" : "Products"}
                          </Link>
                        </li>
                        {verIndustria && (
                          <div className="ml-8 min-[1200px]:absolute min-[1200px]:top-5 min-[1200px]:left-[66%] min-[1200px]:w-full">
                            <ul className="w-[90%] h-auto px-2 py-1 bg-[#343A1A] min-[1200px]:w-36 min-[1200px]:flex-col min-[1200px]:fixed">
                              <li
                                onMouseOver={() => mostrarChocolates()}
                                className="mt-2 mr-4 mb-0 ml-2 border-b"
                              >
                                <Link to="/productos-servicios/productos/chocolates">
                                  Chocolates
                                </Link>
                              </li>
                              <div className="ml-8 min-[1200px]:absolute min-[1200px]:mt-0 min-[1200px]:left-[68%] min-[1200px]:w-[90%] ">
                                {verChocolates && (
                                  <ul className="w-[90%] h-auto px-2 py-1 bg-[#343A1A] min-[1200px]:w-36 min-[1200px]:flex-col min-[1200px]:fixed">
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/chocolates/chocolatinas">
                                        {idioma === "español"
                                          ? "Chocolates"
                                          : "Chocolate bars"}
                                      </Link>
                                    </li>

                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/bombones">
                                        {idioma === "español"
                                          ? "Bombones"
                                          : "Bonbon"}
                                      </Link>
                                    </li>

                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/snacks">
                                        SNACKS
                                      </Link>
                                    </li>

                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/chocolate-de-mesa">
                                        {idioma === "español"
                                          ? "Chocolate de mesa"
                                          : "Black chocolate"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/nibs">
                                        NIBS
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/manteca-de-cacao">
                                        {idioma === "español"
                                          ? "Manteca de cacao"
                                          : "Cocoa butter"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/licor-de-cacao">
                                        {idioma === "español"
                                          ? "Licor de cacao"
                                          : "Cocoa liquor"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link to="/productos-servicios/productos/cocoa">
                                        Cocoa
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>

                              <li
                                onMouseOver={() => mostrarCacao()}
                                className="mt-2 mr-4 mb-0 ml-2 border-b"
                              >
                                Cacao
                              </li>
                              <div className="ml-8 min-[1200px]:absolute min-[1200px]:mt-0 min-[1200px]:left-[68%] min-[1200px]:w-[90%] ">
                                {verCacao && (
                                  <ul className="w-[90%] h-auto px-2 py-1 min-[1200px]:top-32 bg-[#343A1A] min-[1200px]:w-36 min-[1200px]:flex-col min-[1200px]:fixed">
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Granos- clones"
                                          : "Grains - Clones"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Semilla"
                                          : "Seed"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link> vareta </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Plantulas"
                                          : "Seeding"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Plantulas clonadas"
                                          : "Cloned seeding"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Yemas"
                                          : "Yolks"}
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                              <li
                                onMouseOver={() => mostrarMango()}
                                className="mt-2 mr-4 mb-0 ml-2 border-b"
                              >
                                Mangos
                              </li>
                              <div className="ml-8 min-[1200px]:absolute min-[1200px]:mt-0 min-[1200px]:left-[68%] min-[1200px]:w-[90%] ">
                                {verMango && (
                                  <ul className="w-[90%] h-auto px-2 py-1 min-[1200px]:top-32 bg-[#343A1A] min-[1200px]:w-36 min-[1200px]:flex-col min-[1200px]:fixed">
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Semilla"
                                          : "Seeds"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Planta"
                                          : "Plant"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Planta clonada"
                                          : "Cloned plants"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Fruta fresca"
                                          : "Fresh Fruit"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Fruta desidratada"
                                          : "Dry fruit"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Fruta pulverizada"
                                          : "Pulverized fruit"}
                                      </Link>
                                    </li>
                                    <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                      <Link>
                                        {idioma === "español"
                                          ? "Fruta empacada al vacio sin semilla"
                                          : "Vacuum packaging fruit"}
                                      </Link>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </ul>
                          </div>
                        )}
                        <li
                          onMouseOver={() => mostrarServicios()}
                          className="mt-2 mr-4 mb-0"
                        >
                          {idioma === "español" ? "Servicios" : "Services"}
                        </li>
                        {verServicios && (
                          <div className="ml-8 min-[1200px]:absolute min-[1200px]:mt-0 min-[1200px]:left-[68%] min-[1200px]:w-[90%]">
                            <ul className="w-[90%] h-auto px-2 py-1 bg-[#343A1A] min-[1200px]:w-36 min-[1200px]:flex-col min-[1200px]:fixed">
                              <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                {idioma === "español"
                                  ? "Planeacion y ejecucion de Proyectos Agroindustriales"
                                  : "Planning and development of agro-industry proyects"}
                              </li>
                              <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                                Agroecoturismo
                              </li>
                            </ul>
                          </div>
                        )}
                      </ul>
                    )}
                  </div>
                  <div className="mt-0 mr-4 mb-0 ml-2">
                    <li
                      onMouseOver={mostrarSustentabilidad}
                      className="list-none my-2 cursor-pointer border-b min-[1200px]:border-none"
                    >
                      <Link to="/sustentabilidad">
                        {idioma === "español"
                          ? "Sustentabilidad"
                          : "Sustainability"}
                      </Link>
                      <i
                        className="fas fa-angle-down"
                        onClick={mostrarAndOcultarSustentabilidad}
                      ></i>
                    </li>
                    {verSustentabilidad && (
                      <>
                        <ul className="w-[90%] h-auto px-2 py-1 bg-[#343A1A] min-[1200px]:w-80 min-[1200px]:flex-col min-[1200px]:fixed">
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/trabajando-con-agricultores">
                              {idioma === "español"
                                ? "Trabajando con agricultores"
                                : "Working with farmers"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/buscando-el-impacto-emprearial-con-produccion-sostenible">
                              {idioma === "español"
                                ? "Buscando el impacto empresarial con produccionsostenible"
                                : "Looking for business impact with sustainable production"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/impulsando-la-mejora-agricola">
                              {idioma === "español"
                                ? "Impulsando la mejora agricola"
                                : "Driving agricultural improvement"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/modelo-empresarial-inclusivo">
                              {idioma === "español"
                                ? "Modelo empresarial inclusivo"
                                : "Inclusive business model"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/trazabilidad">
                              {idioma === "español"
                                ? "Trazabilidad"
                                : "Traceability"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/cadena-de-suministro-del-cacao">
                              {idioma === "español"
                                ? "Cadena de suministro de cacao"
                                : "Cocoa supply chain"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sustentabilidad/sostenibilidad-del-cacao">
                              {idioma === "español"
                                ? "Sostenibilidad del cacao"
                                : "Cocoa sustainability"}
                            </Link>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                  <div className="mt-0 mr-4 mb-0">
                    <li
                      onMouseOver={mostrarSobreAgromyss}
                      className="list-none m-2 cursor-pointer border-b min-[1200px]:border-none"
                    >
                      <Link to="/sobre-agromyss">
                        {idioma === "español"
                          ? "Sobre Agromyss"
                          : "About Agromyss"}
                      </Link>
                      <i
                        className="fas fa-angle-down"
                        onClick={mostrarAndOcultarSobreAgromyss}
                      ></i>
                    </li>
                    {verSobreAgromyss && (
                      <>
                        <ul className="w-[100%] h-auto px-2 pb-1 bg-[#343A1A] min-[1200px]:w-80 min-[1200px]:flex-col min-[1200px]:fixed">
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sobre-agromyss/responsabilidad-social-y-ambiental">
                              {idioma === "español"
                                ? "Responsabilidad Social y Ambiental"
                                : "Social and Environmental Responsibility"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sobre-agromyss/codigo-de-conducta-del-proveedor">
                              {idioma === "español"
                                ? "Código de Conducta del Proveedor"
                                : "Supplier Code of Conduct"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sobre-agromyss/declaracion-de-esclavitud-moderna">
                              {idioma === "español"
                                ? "Declaración de Esclavitud Moderna"
                                : "Declaration of modern slavery"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sobre-agromyss/politica-ambiental-y-social">
                              {idioma === "español"
                                ? "Política Ambiental y Social"
                                : "Environmental and social policy"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2 border-b">
                            <Link to="/sobre-agromyss/politica-de-inquietudes-eticas">
                              {idioma === "español"
                                ? "Política de Inquietudes Éticas"
                                : "Ethical concerns policy"}
                            </Link>
                          </li>
                          <li className="mt-2 mr-4 mb-0 ml-2">
                            <a
                              href="https://app.powerbi.com/view?r=eyJrIjoiZDcyZTc5YzQtMjAzMi00Zjg2LWI5ZTUtYjUxNWJiMWEwODE2IiwidCI6Ijk5ZjdiNTVlLTljYmUtNDY3Yi04MTQzLTkxOTc4MjkxOGFmYiIsImMiOjR9"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {idioma === "español"
                                ? "Ver Nuesto Centro de Datos"
                                : "See our data center"}
                            </a>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>

                  <li className="list-none m-2 cursor-pointer border-b min-[1200px]:border-none">
                    <Link to="/contacto">
                      {idioma === "español" ? "Contactenos" : "Contact"}
                    </Link>
                  </li>
                  {/* <li>
                      <Link to="/galeria">Galeria</Link>
                    </li> */}
                  {isAdmin && (
                    <li className="list-none m-2 cursor-pointer border-b min-[1200px]:border-none">
                      <Link to="/admin">Admin</Link>
                    </li>
                  )}

                  <div className="flex justify-center border-b-0 min-[1200px]:hidden">
                    {autenticado ? (
                      <>
                        <CarritoIcon handleOpen={handleOpen} />
                        <li className="list-none mr-4 cursor-pointer z-40 pt-2">
                          <p style={{ fontWeight: "400" }}>
                            {idioma === "español" ? "Hola:" : "Hi:"}{" "}
                            {autenticado.displayName}
                          </p>
                        </li>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={cerrarSesion}
                        >
                          Cerrar Sesion
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => setMiPerfil(true)}
                        >
                          Ingresar
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="">
          <div
            className="hidden min-[1200px]:flex"
            style={{ justifyContent: "flex-end" }}
          >
            {autenticado ? (
              <>
                <CarritoIcon handleOpen={handleOpen} />
                <CarritoModal open={open} handleClose={handleClose} />
                <li
                  style={{ fontWeight: "bold" }}
                  className="list-none mr-4 cursor-pointer z-40 pt-2"
                >
                  <p style={{ fontWeight: "400" }}>
                    {idioma === "español" ? "Hola:" : "Hi:"}{" "}
                    {autenticado.displayName}
                  </p>
                </li>
                <Button
                  variant="contained"
                  color="error"
                  onClick={cerrarSesion}
                  className="mb-4"
                >
                  Cerrar Sesion
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setMiPerfil(true)}
                >
                  Ingresar
                </Button>
              </>
            )}
          </div>
          <div
            className="dropdown dropstart mt-4"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div>
              <Button
                aria-controls={openSetIdioma ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openSetIdioma ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                style={{ color: "white" }}
                className="mt-4"
              >
                Idioma
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={openSetIdioma}
                onClose={handleCloseTest}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => handleCloseTest("español")}>
                  Español
                </MenuItem>
                <MenuItem onClick={() => handleCloseTest("ingles")}>
                  Ingles
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        {miPerfil && <Registro />}
      </>
    </div>
  );
};

export default Header;
