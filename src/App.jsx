import Main from "./components/Main";
import AuthState from "./context/auth/AuthState";
import UseEnlaces from "./context/enlaces/UseEnlaces";
import IdiomaState from "./context/idioma/idiomaState";
import RoutesComponent from "./routes/RoutesComponent";
import CarritoState from "./context/carritoContext/CarritoContext";

function App() {
  return (
    <>
      <AuthState>
        <IdiomaState>
          <UseEnlaces>
            <CarritoState>
              <Main>
                <RoutesComponent />
              </Main>
            </CarritoState>
          </UseEnlaces>
        </IdiomaState>
      </AuthState>
    </>
  );
}

export default App;
