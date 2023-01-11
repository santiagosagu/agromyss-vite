import React from 'react'
import Styled from '@emotion/styled'
import UseAutenticacion from '../../hooks/autenticacion/UseAntenticacion'

const Contenedor = Styled.div`
    /* border: 1px solid rgb(13, 130, 121); */
    /* background-color: rgba(13, 130, 121, 0.1); */
    /* border-radius: 1rem; */
    width: 100%;
    height: 100%;
    padding: 2rem 0;

    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin: 0;

        h3{
            margin-bottom: 2rem;
            color: rgb(13, 130, 121);
        }

        label{
            margin-bottom: 1rem;
            color: rgb(13, 130, 121);
            font-weight: bold;
        }

        input{
            border: none;
            border-bottom: 1px solid rgb(13, 130, 121);
            width: 60%;
            margin-bottom: 1rem;
            background-color: #fff;
            text-align: center;
        }

        button{
            background-color: #fff;
            border: 1px solid rgb(13, 130, 121);
            color: rgb(13, 130, 121);
            padding: 0.4rem 1rem;
            margin-top: 1rem;
            font-weight: bold;

            :hover{
                background-color: rgb(13, 130, 121);
                color: #fff;
            }
        }
    }

`

const FormIngreso = () => {

    const { usuarioExistente, setUsuarioExistente, iniciarSesion } = UseAutenticacion()


    return (
        <Contenedor>

            <form
                onSubmit={iniciarSesion}
            >
                <h3>Iniciar Sesion</h3>
                <label>Email</label>
                <input
                    type="email"
                    name='email'
                    onChange={e => setUsuarioExistente({ ...usuarioExistente, [e.target.name]: e.target.value })}
                />

                <label>Password</label>
                <input
                    type="password"
                    name='contraseña'
                    onChange={e => setUsuarioExistente({ ...usuarioExistente, [e.target.name]: e.target.value })}
                />

                <button>Ingresar</button>
            </form>

        </Contenedor>
    )
}

export default FormIngreso
