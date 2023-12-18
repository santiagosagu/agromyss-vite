/* eslint-disable no-undef */
import React, { useEffect } from "react";
import Swal from "sweetalert2";

export const CarritoContext = React.createContext();

const CarritoState = (props) => {
  const [carritoUsuario, setcarritoUsuario] = React.useState([]);
  const [totalPagar, setTotalPagar] = React.useState(0);

  const updateStorageCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito"));
    if (carrito) {
      setcarritoUsuario(carrito);
    }
  };

  React.useEffect(() => {
    updateStorageCarrito();
  }, []);

  const agregarCarrito = (product) => {
    product.cantidad = 1;
    product.precioSumado = product.precio;

    // eslint-disable-next-line no-undef
    const data = JSON.parse(localStorage.getItem("carrito"));

    if (data) {
      localStorage.setItem("carrito", JSON.stringify([...data, product]));
    } else {
      localStorage.setItem("carrito", JSON.stringify([product]));
    }

    updateStorageCarrito();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Producto agregado al carrito!",
    });
  };

  const eliminarProductoCarrito = async (id) => {
    console.log(id);

    const result = carritoUsuario.filter((item) => item.id !== id);

    localStorage.setItem("carrito", JSON.stringify(result));

    updateStorageCarrito();
  };

  const aumentarCantidad = async (id) => {
    const productoModificar = await carritoUsuario.find(
      (item) => item.id === id
    );

    const productoModificarCantidad = productoModificar.cantidad + 1;

    productoModificar.cantidad = productoModificarCantidad;

    const productoModificarPrecio =
      productoModificar.precio * productoModificarCantidad;

    productoModificar.precioSumado = productoModificarPrecio;

    const data = await JSON.parse(localStorage.getItem("carrito"));

    const otrosItems = data?.filter((item) => item.id !== id);

    localStorage.setItem(
      "carrito",
      JSON.stringify([productoModificar, ...otrosItems])
    );

    updateStorageCarrito();
  };

  const disminuirCantidad = async (id) => {
    const productoModificar = await carritoUsuario.find(
      (item) => item.id === id
    );

    const productoModificarCantidad = productoModificar.cantidad - 1;

    productoModificar.cantidad = productoModificarCantidad;

    const productoModificarPrecio =
      productoModificar.precio * productoModificarCantidad;

    productoModificar.precioSumado = productoModificarPrecio;

    const data = await JSON.parse(localStorage.getItem("carrito"));

    const otrosItems = data?.filter((item) => item.id !== id);

    localStorage.setItem(
      "carrito",
      JSON.stringify([productoModificar, ...otrosItems])
    );

    updateStorageCarrito();
  };

  useEffect(() => {
    let totalPagar = 0;

    const arregloTotalPagar = [];

    if (carritoUsuario.length > 0) {
      carritoUsuario.forEach((item) => {
        arregloTotalPagar.push(Number(item.precioSumado));
      });

      for (let i = 0; i < arregloTotalPagar.length; i++) {
        totalPagar += arregloTotalPagar[i];
      }
      setTotalPagar(totalPagar);
    }

    if (carritoUsuario.length === 0) {
      setTotalPagar(0);
    }
  }, [carritoUsuario]);

  return (
    <CarritoContext.Provider
      value={{
        carritoUsuario,
        totalPagar,

        agregarCarrito,
        eliminarProductoCarrito,
        aumentarCantidad,
        disminuirCantidad,
      }}
    >
      {props.children}
    </CarritoContext.Provider>
  );
};

export default CarritoState;
