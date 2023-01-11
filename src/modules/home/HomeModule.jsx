import React from "react";
import { Link } from "react-router-dom";

const HomeModule = ({
  ocultarEnlaces,
  videoCorporativo,
  iconoIndustria,
  iconoServicios,
  data,
}) => {
  return (
    <>
      <div onMouseOver={ocultarEnlaces}>
        <div className="banner">
          <div>{data.banner}</div>
        </div>
        {videoCorporativo}

        <div className="division">
          <div>{data.bannerTwo}</div>
        </div>

        <div className="sesion-productos-servicios">
          <div className="cards">
            <div className="card-icono flex justify-center">
              <img src={iconoIndustria} alt="icono-industria" />
            </div>
            <div className="card-contenido">{data.icono}</div>
          </div>
          <div className="cards">
            <div className="card-icono flex justify-center">
              <img src={iconoServicios} alt="" />
            </div>
            <div className="card-contenido">{data.iconoTwo}</div>
          </div>
        </div>

        <div className="titulo-galeria">
          <Link to="/galeria">
            <h2 className="text-[2.5rem]">Galeria</h2>
          </Link>
          <hr />
        </div>
        <div className="galeria">
          <div className="item-a">
            <img
              src="/images/Elegidas santamarta/DSC_8026.JPG"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div>
            <img
              src="/images/Elegidas santamarta/DSC_5540.JPG"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div className="item-b">
            <img
              src="/images/Elegidas santamarta/DSC_8038.JPG"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div>
            <img
              src="/images/Elegidas maceo/IMG-20190328-WA0077.jpg"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div className="item-c">
            <img
              src="/images/Elegidas santamarta/DSC_5560.JPG"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div>
            <img
              src="/images/Elegidas maceo/IMG-20190328-WA0044.jpg"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div>
            <img
              src="/images/Elegidas maceo/IMG-20190328-WA0078.jpg"
              alt="imagen-galeria-agromyss"
            />
          </div>
          <div className="item-d">
            <img
              src="/images/Elegidas santamarta/DSC_5526.JPG"
              alt="imagen-galeria-agromyss"
            />
          </div>
        </div>
      </div>

      {/* <form style={{ position: "absolute", bottom: "10%", right: 0 }}>
        <script
          src="https://checkout.wompi.co/widget.js"
          data-render="button pago"
          data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
          data-currency="COP"
          data-amount-in-cents="4950000"
          data-reference="4XMPGKWWPKWQ"
          // data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
        ></script>
      </form>

      <form action="https://checkout.wompi.co/p/" method="GET">
        <input
          type="hidden"
          name="public-key"
          value="pub_test_sU0PuSKagjNH0o30MBmDlpVeDsU8yOsw"
        />

        <input type="hidden" name="currency" value="COP" />

        <input type="hidden" name="amount-in-cents" value="5000000" />
        <input type="hidden" name="reference" value="id6" />
        <input
          type="hidden"
          name="redirect-url"
          value="http://localhost:3000"
        />

        <button>holis</button>
      </form> */}

      {/* <button onClick={() => prueba()}>prueba</button> */}
    </>
  );
};

export default HomeModule;
