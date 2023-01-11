import React, { useContext, useState } from 'react'
import Styled from '@emotion/styled'
import authContext from '../context/auth/authContext'
import FormIngreso from './formularios/FormIngreso'
import FormRegistro from './formularios/FormRegistro'
import iconoCerrar from '../imagenes/cerrar.png'
import iconoVolver from '../imagenes/volver.png'

const Contenedor = Styled.div`
    background-color: #fff;
    color: #000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    border-left: 1px solid rgb(13, 130, 121);
    top: 0;
    right: 0;
    z-index: 30;
    padding: 2rem; 

    @media(min-width: 1200px){
        width: 400px;
    }

    .icono-cerrar{
        width: 2rem;
    }

    .cerrar{
        display: flex;
        justify-content: flex-end;
    }

    .contenedor-botones{
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        margin-top: 1rem;
        

        p{
            border-radius: 1rem;
            border: 1px solid rgb(13, 130, 121);
            color: rgb(13, 130, 121);
            font-weight: bold;
            font-size: 1rem;
            width: 100%;
            padding: 0.7rem 0;
            background-color: rgba(13, 130, 121, 0.1);

            :hover{
                background-color: rgb(13, 130, 121);
                color: #fff;
            }
        }
    }

`


const Registro = () => {

    
    const [tipoVista, setTipoVista] = useState(false)

    const { setMiPerfil } = useContext(authContext)


    const QueVer = () => {
        if (tipoVista === false) {
            return (
                <>
                    <p onClick={() => setTipoVista('ingresar')}>Ingresar</p>
                    <p onClick={() => setTipoVista('registro')}>Registrarse</p>
                </>
            )
        } else if (tipoVista === 'ingresar') {

            return (
                <>
                    <FormIngreso />
                    <img
                        src={iconoVolver}
                        alt="icono-volver"
                        className='icono-cerrar'
                        onClick={() => setTipoVista(false)}
                    />
                </>
            )
        } else if (tipoVista === 'registro') {

            return (
                <>
                    <FormRegistro />
                    <img
                        src={iconoVolver}
                        alt="icono-volver"
                        className='icono-cerrar'
                        onClick={() => setTipoVista(false)}
                    />
                </>
            )
        }


    }

    return (
        <Contenedor>
            <div className='cerrar'>
                <img
                    src={iconoCerrar}
                    alt="icono-cerrar"
                    className='icono-cerrar'
                    onClick={() => setMiPerfil(false)}
                />
            </div>
            <div className='contenedor-botones'>
                <QueVer />
            </div>
        </Contenedor>

    )
}

export default Registro
