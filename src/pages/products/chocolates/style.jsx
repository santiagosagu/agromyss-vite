import Styled from "@emotion/styled";

export const Contenido = Styled.div`
    @media(min-width: 1200px){
        margin-top: 12%;

    }

    h1{
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }
    
    .contenedor-imagen{
        background-image: url('/images/Productos.png');
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 300px;

        @media(min-width: 1200px){
            height: 450px;
            // background-attachment: fixed;
        }

    }


`;
