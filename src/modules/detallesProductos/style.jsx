import Styled from "@emotion/styled";

export const Contenedor = Styled.div`
    .primera-sesion{

        @media(min-width: 768px){
            margin: 10% 0 0 0;
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 1rem;
             height: 610px;
            padding: 3rem 6rem;
        }

        .imagen{
            padding: 2rem 1rem;
            margin-bottom: 2rem;
            width: 100%;
            height: 370px;
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;

            @media(min-width: 1200px){
              // height: 450px;
                padding: 2rem 5rem;
            }
        }

        hr{
            width: 40%;
            height: 2px;
            margin-bottom: 1rem;
        }

        .descripcion{
            margin: 1rem;
            color: #313131;

            .precio-carrito{
                display: flex;
                margin-top: 3rem;

                @media(min-height: 768px){
                    margin-top: 4rem;
                }

                p{
                    font-size: 1.2rem;
                    border: 1px solid rgb(13, 130, 121);
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    /* margin-right: 1rem; */
                    color: rgb(13, 130, 121);
                }

                .carrito{
                    :hover{
                        background-color:#771D12;
                        border: 1px solid #771D12;
                        color: #fff;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    

    .segunda-sesion{

        margin: 1rem;
            color: #313131;

        @media(min-width: 768px){
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 7rem;
            height: 450px;
            padding: 3rem 6rem;
        }


        .informacion-producto{
            hr{
                width: 50%;
                margin-bottom: 1rem;
            }

            li{
                list-style: none;
                font-size: 1.2rem;
                margin-bottom: 0.5rem;
            }

            .informacion-producto-sesion1{
                margin-bottom: 2rem;
            }
        }
    }

    

  
`;
