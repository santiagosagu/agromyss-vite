import Styled from "@emotion/styled";
import imagenPrincipal from "../../imagenes/imagen-principal-sustentabilidad.jpg";

export const Contenedor = Styled.div`
    @media(min-width: 1200px){
        margin-top: 11%;

    }

    h1{
        text-align: center;
        font-size: 2.5rem;
    }

    .contenido{

        margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 70%;
            margin: 4rem auto;
        }

        h4{
            font-weight: bold;
            font-size: 1.4rem;
        }
        

        p{  

            margin-top: 2rem;
            font-size: 1.2rem;

            span{
                font-weight: bold;
            }
        }

        img{
            width: 100%;
        }

        h4{
            margin-top: 2rem;
        }

        ul{
            margin: 1rem 0;

            li{
                margin: 1.5rem 0;
            }
        }
    }

    .contenedor-imagen{
        background-image: url(${imagenPrincipal});
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 300px;

        @media(min-width: 1200px){
            height: 450px;
            background-attachment: fixed;
        }

    }
`;
