/* eslint-disable no-undef */
import React, { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { db } from "../../FirebaseConfig";
import authContext from "../auth/authContext";

export const CarritoContext = React.createContext();

const CarritoState = (props) => {
  const [datosCarrito, setDatosCarrito] = React.useState([]);
  const [carritoUsuario, setcarritoUsuario] = React.useState([]);
  const [totalPagar, setTotalPagar] = React.useState(0);

  const { autenticado } = useContext(authContext);

  React.useEffect(() => {
    const guardarDatos = async () => {
      await db.collection("carrito").onSnapshot((doc) => {
        const result = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setDatosCarrito(result);
      });
    };

    guardarDatos();
  }, [autenticado]);

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

    if (autenticado) {
      const pedido = { producto: product, usuarioPedido: autenticado?.uid };

      db.collection("carrito").add(pedido);
    }
  };

  const eliminarProductoCarrito = async (id) => {
    console.log(id);

    const result = carritoUsuario.filter((item) => item.id !== id);

    console.log(result);
    localStorage.setItem("carrito", JSON.stringify(result));

    updateStorageCarrito();
  };

  const aumentarCantidad = async (id) => {
    const productoModificar = await datosCarrito.find((item) => item.id === id);

    const productoModificarCantidad = productoModificar.producto.cantidad + 1;

    productoModificar.producto.cantidad = productoModificarCantidad;

    const productoModificarPrecio =
      productoModificar.producto.precio * productoModificarCantidad;

    productoModificar.producto.precioSumado = productoModificarPrecio;

    const productoModificarCantidadDB = await db.collection("carrito").doc(id);

    return productoModificarCantidadDB.update({
      producto: productoModificar.producto,
    });
  };

  const disminuirCantidad = async (id) => {
    const productoModificar = await datosCarrito.find((item) => item.id === id);

    if (productoModificar.producto.cantidad > 1) {
      const productoModificarCantidad = productoModificar.producto.cantidad - 1;

      productoModificar.producto.cantidad = productoModificarCantidad;

      const productoModificarPrecio =
        productoModificar.producto.precio * productoModificarCantidad;

      productoModificar.producto.precioSumado = productoModificarPrecio;

      const productoModificarCantidadDB = await db
        .collection("carrito")
        .doc(id);

      return productoModificarCantidadDB.update({
        producto: productoModificar.producto,
      });
    }
  };

  useEffect(() => {
    let totalPagar = 0;

    const arregloTotalPagar = [];

    if (autenticado && carritoUsuario.length > 0) {
      carritoUsuario.forEach((item) => {
        arregloTotalPagar.push(Number(item.producto.precioSumado));
      });

      for (let i = 0; i < arregloTotalPagar.length; i++) {
        totalPagar += arregloTotalPagar[i];
      }
      setTotalPagar(totalPagar);
    }

    if (carritoUsuario.length === 0) {
      setTotalPagar(0);
    }
  }, [carritoUsuario, autenticado]);

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
