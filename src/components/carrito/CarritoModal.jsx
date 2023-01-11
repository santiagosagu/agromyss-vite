import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth > 1000 ? "50%" : "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "80%",
  overflowY: "scroll",
  padding: "0",
};

const Card = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding: 0;

  .content-img-description {
    display: flex;
    @media (min-width: 1000px) {
      width: 28rem;
    }

    .content-img {
      width: 120px;
      @media (min-width: 1000px) {
        width: 200px;
      }

      img {
        margin-top: 3rem;
        width: 200px;
      }
    }

    .content-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 2rem;
      padding: 1rem;
      width: 6rem;

      @media (min-width: 1000px) {
        width: 40%;
      }
      h3 {
        margin-top: 1rem;
        font-size: 1rem;

        @media (min-width: 1000px) {
          font-size: 1.5rem;
        }
      }
    }

    .update-qty {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  }

  .content-close {
    margin-top: 2rem;
  }
`;

export default function CarritoModal({ open, handleClose }) {
  const {
    carritoUsuario,
    aumentarCantidad,
    eliminarProductoCarrito,
    disminuirCantidad,
    totalPagar,
  } = useContext(CarritoContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ textAlign: "center" }}
          >
            Carrito de Compras
          </Typography>
          <Link to="/mi-carrito" className="text-white no-underline">
            <div className="flex justify-center md:justify-start">
              <div className="w-52 bg-slate-400 text-white py-7 mx-4 px-4 hover:bg-slate-700">
                <p>Total Pagar: $ {totalPagar}</p>
                Completar Orden
              </div>
            </div>
          </Link>
          <div id="modal-modal-description" sx={{ mt: 2 }}>
            {carritoUsuario?.map((item) => (
              <Card>
                <div className="content-img-description">
                  <div className="content-img">
                    <img
                      src={item.producto?.imagenes[0]}
                      alt="producto-carrito"
                    />
                  </div>
                  <div className="content-description">
                    <h3>{item.producto.nombreProducto}</h3>
                    <h3>$ {item.producto.precioSumado}</h3>
                  </div>
                </div>

                <div className="update-qty">
                  <button
                    className="bg-slate-700 text-white px-4 py-2 rounded-full"
                    onClick={() => aumentarCantidad(item.id)}
                  >
                    <ArrowCircleUpIcon />
                  </button>
                  <h4 className="text-center mt-3">{item.producto.cantidad}</h4>
                  <button
                    className="bg-red-700 text-white px-4 py-2 rounded-full"
                    onClick={() => disminuirCantidad(item.id)}
                  >
                    <ArrowCircleDownIcon />
                  </button>
                </div>
                <div className="content-close">
                  <CloseIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => eliminarProductoCarrito(item.id)}
                  />
                </div>
              </Card>
            ))}
          </div>

          {carritoUsuario?.length === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "80%",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  color: "rgba(0, 0, 0, 0.26)",
                }}
              >
                Aun no has agregado productos
              </h2>
              <div>
                <RemoveShoppingCartIcon
                  color="disabled"
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "8rem",
                  }}
                />
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
