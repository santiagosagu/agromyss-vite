import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CarritoContext } from "../../context/carritoContext/CarritoContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    margin: "0 2rem",
    backgroundColor: "#0d8279",
  },
}));

export default function CarritoIcon({ handleOpen }) {
  const { carritoUsuario } = React.useContext(CarritoContext);

  return (
    <IconButton aria-label="cart" onClick={handleOpen}>
      <StyledBadge badgeContent={carritoUsuario?.length} color="secondary">
        <ShoppingCartIcon style={{ color: "#3a1414" }} />
      </StyledBadge>
    </IconButton>
  );
}
