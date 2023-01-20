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
    

    .contenido{

        margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 80%;
            margin: 4rem auto;
        }

        .card{

          margin-bottom: 2rem;
          border: none;
          
          @media(min-width: 1200px){
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            padding: 4rem 0;
          }

          

          .contenido-imagen{
            width: 100%;

            @media(min-width: 1200px){
              width: 50%;
            }

            img{
            width:4rem;
            margin-bottom: 2rem;
            width: 100%;
            
              @media(min-width: 1200px){
                height: 25rem;
              }
            }
          }

          p{
            font-size: 1.3rem;
          }

          li{
            font-size: 1.3rem;
          }
        }

        .card-reverse{
            @media(min-width: 1200px){
              flex-direction: row-reverse;
            }

            .contenido-texto{
            @media(min-width: 1200px){
              width: 50%;
              margin-right: 2rem;
            }
          }
          }

          .card-no-reverse{
            @media(min-width: 1200px){
              flex-direction: row;
            }

            .contenido-texto{
            @media(min-width: 1200px){
              width: 50%;

              margin-left: 2rem;
            }
          }
          }
    }

`;
