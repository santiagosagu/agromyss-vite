import React from "react";
import Styled from "@emotion/styled";

const Contenedor = Styled.div`
    

    .contenedor-video{
        margin: 8% 0;
        width: 100vw;
        height: 100vh;

        @media(min-width: 1200px){
            margin: 8% 1rem;
            width: 96.5vw;
        }


        h2{
            text-align: center;
        }

        iframe{
            width: 100%;
            height: 300px;

            @media(min-width: 1200px){
                height: 80%;
            }
        }
    }
`;

const VideoCorporativoPagina = () => {
  return (
    <Contenedor>
      <div className="contenedor-video">
        <h2 className="text-[2.5rem]">Video Corporativo</h2>
        <iframe
          src="https://www.youtube.com/embed/s5O-0a_mDaI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        />
      </div>
    </Contenedor>
  );
};

export default VideoCorporativoPagina;
