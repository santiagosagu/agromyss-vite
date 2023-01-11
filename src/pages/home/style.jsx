import Styled from "@emotion/styled";

export const Contenedor = Styled.div`

    .banner{
        background-image: url('/images/contactenos.jpg');
        width: 100%;
        height: 500px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;

        @media(min-width: 1200px){
          margin-top: 4rem;
        }

        div{
          background-color: rgba(0, 0, 0, 0.5);
          width: 100%;
          height: 100%;
          padding: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media(min-width: 768px){
              height: 500px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                font-size: 2rem;
            }

            h4{
              font-size: 1.4rem;
              font-weight: bold;

              @media(min-width: 768px){
                  font-size: 2rem

                }
            }
        }
    }

    .slogan{
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;

        margin: 0 1rem;

        @media(min-width: 768px){
            margin: 1rem 4.5rem;
            display: grid;
            grid-template-columns: 50% 55%;
            grid-gap: 1rem;
            padding: 0.5rem;
        }

        img{
            height: 250px;

            @media(min-width: 768px){
                width: 100%;
                height: 200px;

            }

            @media(min-width: 1200px){
                width: 100%;
                height: 300px;

            }
        }

        p{
            @media(min-width: 768px){
                font-size: 1.1rem;
            }

            span{
                font-size: 2rem;
                font-weight: bold;

            }

        }
    }

    .division{
        background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6zmyS5IFVwpj4LKfuCRsnDdrVGQTUYo1ktw&usqp=CAU');
        width: 100%;
        height: 400px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 2rem;
        color: #fff;

        font-size: 1.2rem;
        font-weight: bold;

        div{
            background-color: rgba(0, 0, 0, 0.5);
            width: 100%;
            height: 100%;
            padding: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            @media(min-width: 768px){
                height: 400px;
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
                font-size: 1.8rem;
            }
        }
    }

    .sesion-productos-servicios{
        align-items: center;
        margin: 1rem auto;
        width: 80%;

        @media(min-width: 768px){
            display: grid;
            grid-template-columns: 50% 50%;
            grid-gap: 1rem;
        }

        .cards{
            align-items: center;
            text-align: center;
            padding: 0.5rem;
            height: 400px;
            margin-bottom: 1rem;
            z-index: 0;

            img{
                max-width: 10rem;
            }

            .card-contenido{
                margin-top: 1rem;
                padding: 0 2rem;
            }

        }
    }

    .titulo-galeria{
        h2{
            text-align: center;
            cursor: pointer;
        }

        a{
          text-decoration: none;
          color: #000;
        }

        hr{
            margin: 0 auto 3rem;
            max-width: 200px;

            @media(min-width: 1200px){
                margin: 0 auto 6rem;
                max-width: 400px;
            }
        }
    }

    .galeria{
        width: 100%;
        padding: 1rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 200px 200px 200px 200px 160px;
        grid-gap: 0.5rem;

        @media(min-width: 1024px){
            max-width: 1024px;
            display: grid;
            grid-gap: 1rem;
            grid-template-columns: 256px 256px 256px 256px;
            grid-template-rows: 200px 200px 200px 200px;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 10px;
        }

        .item-a {
            grid-row: 1 / 2;

            @media(min-width: 1024px){
                grid-row: 1 / 3;
            }
        }

        .item-b {
            grid-column: 2 / 3;

            @media(min-width: 1024px){
                grid-column: 3 / 5;
            }
        }

        .item-c {
            grid-row: 2 / 4;

            @media(min-width: 1024px){
                grid-row: 2 / 4;
            }
        }

        .item-d {
            grid-column: 1 / 3;

            @media(min-width: 1024px){
                grid-column: 3 / 5;
            }
        }

    }
`;
