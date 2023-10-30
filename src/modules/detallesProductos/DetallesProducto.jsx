import React, { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Contenedor } from "./style";
import { Carousel } from "react-responsive-carousel";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";
import { useEnlacesContext } from "../../context/enlaces/UseEnlaces";
import { db } from "../../FirebaseConfig";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  // state que guarda el producto a mostrar
  const [productoActual, setProductoActual] = useState({});

  // productos
  const [todosProductosDB, setTodosProductosDB] = useState([]);

  const { agregarCarrito } = useContext(CarritoContext);

  const { ocultarEnlaces } = useContext(useEnlacesContext);

  const { detalle, producto } = useParams();

  console.log(detalle);

  useEffect(() => {
    const guardarDatos = async () => {
      await db.collection("productos").onSnapshot((doc) => {
        const resultado = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setTodosProductosDB(resultado);
      });
    };

    guardarDatos();
  }, []);

  useEffect(() => {
    if (todosProductosDB) {
      const resultado = todosProductosDB.filter((item) => item.url === detalle);

      setProductoActual(resultado);
    }
  }, [detalle, producto, todosProductosDB]);

  return (
    <Contenedor onMouseOver={ocultarEnlaces}>
      {productoActual.length > 0 && (
        <div>
          <div className="primera-sesion">
            <div className="imagen">
              <Carousel
                axis="horizontal"
                autoPlay
                infiniteLoop
                centerSlidePercentage={10}
                width="100%"
                thumbWidth={30}
                dynamicHeight
                emulateTouch
                showThumbs={false}
              >
                {productoActual[0].imagenes.map((image, index) => (
                  // <div
                  //   className="imagen"
                  //   style={{ backgroundImage: `url(${image})` }}
                  // ></div>
                  <div className="lg:w-[600px] lg:h-[600px]" key={index}>
                    <img
                      src={image}
                      alt=""
                      // onClick={() => verProducto("chocolatinas", product.url)}
                      className="w-full h-full"
                    />
                  </div>
                ))}

                {/* <div className='imagen' style={{ backgroundImage: "url(https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo-7715.png)" }}>

                                </div>
                                <div className='imagen' style={{ backgroundImage: 'url(https://www.evok.com.co/wp-content/uploads/2019/10/BarrasAmargo2-7715.png)' }}>

                                </div>
                                <div className='imagen' style={{ backgroundImage: 'url(https://www.evok.com.co/wp-content/uploads/2019/10/Fondoblanco3-7717.png)' }}>

                                </div> */}
              </Carousel>
            </div>
            <div className="descripcion">
              <h2 className="text-4xl font-bold">
                {productoActual[0].nombreProducto}
              </h2>
              <hr />
              <h4>{productoActual[0].descripcion}</h4>
              <div className="precio-carrito">
                <p>$ {productoActual[0].precio}</p>
                <p
                  className="carrito"
                  onClick={() => agregarCarrito(productoActual[0])}
                >
                  Añadir al Carrito
                </p>
              </div>
            </div>
          </div>

          <div className="segunda-sesion">
            <div className="nutrifacts-html">
              <table>
                <tr>
                  <td>
                    <strong>Cantidad por Porcion</strong>{" "}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.cantidadPorcion}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Calorias</strong>{" "}
                    {productoActual[0].infoNutricional.calorias}
                  </td>
                  <td className="align-text-right">
                    Calorias de grasa{" "}
                    {productoActual[0].infoNutricional.caloriasGrasa}
                  </td>
                </tr>
                <tr>
                  <td />
                  <td className="align-text-right">
                    % <strong>Valor Diario*</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Grasas Totales</strong>{" "}
                    {productoActual[0].infoNutricional.grasaTotal}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.grasaTotalValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>
                    Grasas Saturadas{" "}
                    {productoActual[0].infoNutricional.grasasSaturadas}
                  </td>
                  <td className="align-text-right">
                    {
                      productoActual[0].infoNutricional
                        .grasasSaturadasValorDiario
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Colesterol</strong>{" "}
                    {productoActual[0].infoNutricional.colesterol}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.colesterolValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Sodio</strong>{" "}
                    {productoActual[0].infoNutricional.sodio}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.sodioValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Carbohidratos Totales</strong>{" "}
                    {productoActual[0].infoNutricional.carbohidratosTotales}
                  </td>
                  <td className="align-text-right">
                    {
                      productoActual[0].infoNutricional
                        .carbohidratosTotalesValorDiario
                    }
                  </td>
                </tr>
                <tr>
                  <td>
                    Fibra Dietaria{" "}
                    {productoActual[0].infoNutricional.fibraDietaria}
                  </td>
                  <td className="align-text-right">
                    {productoActual[0].infoNutricional.fibraDietariaValorDiario}
                  </td>
                </tr>
                <tr>
                  <td>Azucares {productoActual[0].infoNutricional.azucares}</td>
                  <td />
                </tr>
                <tr>
                  <td>
                    <strong>Proteinas</strong>{" "}
                    {productoActual[0].infoNutricional.proteinas}
                  </td>
                  <td />
                </tr>
              </table>
              <div className="separator" />
            </div>

            <div className="informacion-producto">
              <div className="informacion-producto-sesion1">
                <h2 className="text-3xl">Informacion del Producto</h2>
                <hr />
                <li>Beneficio: Bienestar</li>
                <li>Ancho: 2,5cm</li>
                <li>Largo: 3,2cm</li>
                <li>Alto: 21cm</li>
                <li>Peso Neto: 90g</li>
                <li>Peso Bruto: 152g</li>
              </div>
              <div className="informacion-producto-sesion2">
                <li>
                  <strong>Contiene:</strong>
                </li>
                <li>
                  1 barra de {productoActual[0].infoNutricional.cantidadPorcion}{" "}
                  sin agregados.
                </li>
              </div>
            </div>
          </div>
        </div>
      )}
    </Contenedor>
  );
};

export default DetalleProducto;
