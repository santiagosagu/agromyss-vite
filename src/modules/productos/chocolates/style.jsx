import Styled from "@emotion/styled";

export const Contenido = Styled.div`
    @media(min-width: 1200px){
        margin-top: 8%;
        margin-bottom: 2rem;

    }

    h1{
        text-align: center;
        margin: 1rem;
        margin-top: 2rem;
    }

    .carrito{
        :hover{
            background-color:#771D12;
            border: 1px solid #771D12;
            color: #fff;
            cursor: pointer;
        }
    }

    .agregar-carrito {
        font-size: 1.2rem;
        border: 1px solid rgb(13, 130, 121);
        // display: inline-block;
        padding: 0.5rem 1rem;
        color: rgb(13, 130, 121);
    }

`;
