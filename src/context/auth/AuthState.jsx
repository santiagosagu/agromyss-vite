import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import authContext from "./authContext";
import { auth, db } from "../../FirebaseConfig";

const AuthState = (props) => {
  //ver modal
  const [miPerfil, setMiPerfil] = useState(false);

  //state todos los usuarios
  const [usuarios, setUsuarios] = useState([]);

  //state usuario actual
  const [autenticado, setAutenticado] = useState(null);

  const [rolUsuarioActual, setRolUsuarioActual] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    //con esta funcion verificamos si hay un usuario autenticado
    const unSuscribe = auth.onAuthStateChanged((usuario) => {
      if (usuario) {
        setAutenticado(usuario);
      } else {
        setAutenticado(null);
      }
    });

    return () => unSuscribe();
  }, []);

  /* trae los datos de la db */
  useEffect(() => {
    const guardarDatos = async () => {
      await db.collection("usuarios").onSnapshot((doc) => {
        const resultado = doc.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });

        setUsuarios(resultado);
      });
    };

    guardarDatos();
  }, []);

  //cerrar sesion
  const cerrarSesion = () => {
    auth.signOut();

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
      title: "Sesion finalizada, Vuelve Pronto!",
    });
    /* setUsuarioActual(null) */
  };

  useEffect(() => {
    const verificarTipoUsuario = () => {
      if (autenticado) {
        const [resultado] = usuarios.filter(
          (usuario) => usuario.uid === autenticado.uid
        );

        setRolUsuarioActual(resultado?.rol);

        if (resultado?.rol === "admin") {
          setIsAdmin(true);
        }
      } else {
        setRolUsuarioActual("");
        setIsAdmin(false);
      }
    };

    verificarTipoUsuario();
  }, [usuarios, autenticado]);

  return (
    <authContext.Provider
      value={{
        miPerfil,
        usuarios,
        autenticado,
        rolUsuarioActual,
        isAdmin,
        setMiPerfil,
        cerrarSesion,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
