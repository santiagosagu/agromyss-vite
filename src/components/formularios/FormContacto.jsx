import React, { useContext } from 'react'
import idiomaContext from '../../context/idioma/idiomaContext'
import Styled from '@emotion/styled'


const Contenedor = Styled.div`
    margin: 0 auto;
    width: 90%;

    @media(min-width:1200px){
        width: 60rem;
    }
    

    form{
        width: 100%;

        h2{
            margin-bottom: 6rem;
            text-transform: capitalize;
        }

        .seccion{
            
            justify-content: space-between;
            margin-bottom: 1rem;

            @media(min-width:768px){
                display: flex;
            }

            div{
                flex: 1;
            }

            label{
                font-size: 1.2rem;
                font-weight: bold;
            }

            input{
                width: 90%;
                flex:1;
                background-color: rgba(0, 0, 0, 0);
                border: none;
                border-bottom: 1px solid #fff;
                color: #fff;
                font-size: 1.1rem;
                margin-bottom: 1rem;
            }

            textarea{
                
                flex:1;
                width: 90%;
                height: 8rem;
                background-color: rgba(0, 0, 0, 0.2);
                border: none;
                border-bottom: 1px solid #fff; 
                color: #fff;

                @media(min-width:1200px){
                    width: 90%;
                    height: 10rem;
                }
            }
        }
    }
`

const FormContacto = ({ tipoForm }) => {

    const { idioma } = useContext(idiomaContext)

    return (
        <Contenedor>
            {idioma === 'español' &&
                <>
                    <form action="">
                        <h2>{tipoForm}</h2>
                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Nombres</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Apellidos</label><br />
                                <input type="text" />
                            </div>

                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Telefono</label><br />
                                <input type="number" />
                            </div>
                            <div>
                                <label htmlFor="">Correo Electronico</label><br />
                                <input type="email" />
                            </div>

                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Empresa</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Sitio Web</label><br />
                                <input type="text" />
                            </div>
                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Asunto</label><br />
                                <input type="text" />
                            </div>

                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Mensaje</label><br />
                                <textarea name="" id=""></textarea>
                            </div>

                        </div>

                        <button className='btn btn-primary my-2' style={{ backgroundColor: 'rgb(13,130,121)', border: 'none', padding: '0.5rem 1rem' }}>Enviar</button>
                    </form>
                </>
            }
            {idioma === 'ingles' &&
                <>
                    <form action="">
                        <h2>{tipoForm}</h2>
                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Names</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Surnames</label><br />
                                <input type="text" />
                            </div>

                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Phone</label><br />
                                <input type="number" />
                            </div>
                            <div>
                                <label htmlFor="">Email</label><br />
                                <input type="email" />
                            </div>

                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Business</label><br />
                                <input type="text" />
                            </div>
                            <div>
                                <label htmlFor="">Website</label><br />
                                <input type="text" />
                            </div>
                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Affair</label><br />
                                <input type="text" />
                            </div>

                        </div>

                        <div className='seccion'>
                            <div>
                                <label htmlFor="">Message</label><br />
                                <textarea name="" id=""></textarea>
                            </div>

                        </div>

                        <button className='btn btn-primary my-2' style={{ backgroundColor: 'rgb(13,130,121)', border: 'none', padding: '0.5rem 1rem' }}>{idioma === 'español' ? 'enviar' : 'Send' }</button>
                    </form>
                </>

            }

        </Contenedor>
    )
}

export default FormContacto
