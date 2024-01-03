import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const HomeModule = ({
  ocultarEnlaces,
  videoCorporativo,
  iconoIndustria,
  iconoServicios,
  data,
}) => {
  const dataBanner = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/agromyss.appspot.com/o/362679521_655114549835398_4057088859359443818_n.jpg?alt=media&token=a078c375-76fb-4aab-b397-49bfeab2658b",
      title: "cafe la 13",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat aspernatur consequatur quia totam perferendis impedit accusamus eum facere, est dicta fuga deleniti quidem voluptatibus excepturi provident iure! Sunt,exercitationem",
      url: "https://www.instagram.com/cafewaikaodelatrece/",
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/agromyss.appspot.com/o/industria.jpg?alt=media&token=2fee6022-a54e-40de-96aa-00a1f2a22152",
      title: "Productos",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugiat aspernatur consequatur quia totam perferendis impedit accusamus eum facere, est dicta fuga deleniti quidem voluptatibus excepturi provident iure! Sunt,exercitationem",
      url: "productos-servicios/productos",
    },
  ];

  return (
    <>
      <div onMouseOver={ocultarEnlaces}>
        {/* <div className="banner">
          <div>{data.banner}</div>

        </div> */}

        <Carousel
          axis="horizontal"
          autoPlay
          infiniteLoop
          centerSlidePercentage={10}
          width="100%"
          thumbWidth={30}
          dynamicHeight
          emulateTouch
          showThumbs={false}
        >
          {dataBanner.map((item, index) => (
            <div
              key={index}
              className="bg-cover object-center h-[60rem] bg-no-repeat overflow-hidden w-full bg-fixed flex flex-col justify-center"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center center",
              }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-white w-2/4">
                    <h2 className="mb-12 text-4xl font-semibold uppercase">
                      {item.title}
                    </h2>
                    <h4 className="mb-6 text-xl font-semibold text-center">
                      {item.text}
                    </h4>
                    <a href={item.url} rel="noopener noreferrer">
                      <button
                        type="button"
                        className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Conocenos
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

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
