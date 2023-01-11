import React, { useContext } from 'react'
import idiomaContext from '../context/idioma/idiomaContext'
import Styled from '@emotion/styled'

const Contenedor = Styled.div`
    border-radius: 10px;
    margin: 1rem;
    padding: 0.5rem;

    @media(min-width: 768px){
        display: grid;
        grid-template-columns: 55% 45%;
        margin: 2rem;
        padding: 2rem;
    }

    iframe{
        width: 100%;
        height: 200px;

        @media(min-width: 1200px){
            width: 500px;
            height: 315px;
        }

    }

    p{
        @media(min-width: 768px){
            margin-right: 0.5rem;
            font-size: 1.1rem;
        }
    }

    span{
        font-weight: bold;
    }
`


const VideoCorporativo = () => {

    /* context para el idioma */
    const { idioma } = useContext(idiomaContext)

    return (
        <Contenedor>
            {idioma === 'español' &&
                <>
                    <div>
                        <h2>Mira <span>Nuestro Video</span> </h2>
                        <p>
                            Video grabado en El Cañón del Alicante, Maceo, Antioquia, Colombia. Aquí mostramos la grandeza de nuestra tierra y la diversidad de la fauna y flora. Somos una empresa que fundamenta sus procesos en el cuidado y responsabilidad con el medio ambiente. Cultivamos y cuidamos cada proceso para extraer frutos de excelencia y  generar los productos de calidad que solamente pueden entregar los suelos de nuestro país. Contamos con reservas naturales y un paraíso abierto a ustedes para explorar de manera consciente.
                        </p>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/s5O-0a_mDaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                </>

            }
            {idioma === 'ingles' &&
                <>
                    <div>
                        <h2>Watch  <span>Our Video</span> </h2>
                        <p>
                            Video recorded in El Cañón del Alicante, Maceo, Antioquia, Colombia. Here we show the greatness of our land and the diversity of the fauna and flora. We are a company that bases its processes on care and responsibility with the environment. We cultivate and take care of each process to extract fruits of excellence and generate quality products that only the soils of our country can deliver. We have nature reserves and a paradise open to you to explore consciously.
                        </p>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/s5O-0a_mDaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
                    </div>
                </>
            }

        </Contenedor>
    )
}

export default VideoCorporativo
