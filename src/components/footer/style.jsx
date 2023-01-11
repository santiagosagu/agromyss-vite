import Styled from "@emotion/styled";

export const Contenedor = Styled.div`
 width: 100%;
 background-color: #8b9022;
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 color: #fff;

 @media(min-width: 1200px){
   height: auto;
   justify-content: flex-start;
   margin-top: 2rem;
 }

 a {
   text-decoration: none;
   color: #fff;
 }

 .grid-column{
    width: 100%; 
    text-align: center;
    
    @media(min-width: 768px){
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      text-align: start;
    }
    
    @media(min-width: 1200px){
      grid-template-columns: repeat(4, 1fr);

    }

    .redes-sociales{
      @media(min-width: 768px){
        width: 30rem;
      }
    }

    .ubicacion {
      text-align: center;

      @media(min-width: 768px){
        text-align: start;
      }
    }
    
 }

`;
