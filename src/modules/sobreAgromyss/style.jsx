import Styled from "@emotion/styled";

export const Component = Styled.div`
  margin: 4rem 1rem;

        @media(min-width: 1200px){
            width: 70%;
            margin: 4rem auto;
        }

        h4{
            font-weight: bold;
            @media(min-width: 1200px){
              font-size: 1.7rem;
              margin-bottom: 1rem;
            }
        }
        

        p{  

            margin-top: 2rem;
            font-size: 1.3rem;

            span{
                font-weight: bold;
            }
        }
  .container {
    margin-bottom: 4rem;

    li{
      font-size: 1.2rem;
    }

    img {
      width: 100%;
      max-height: 35rem;
    }
  }
`;
