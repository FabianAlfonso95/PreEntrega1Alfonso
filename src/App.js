import { NavBar } from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
      </div>
      <div style={{ marginTop: "60px", position: "absolute" }}>
        <ItemListContainer greeting={"Bienvenidos"} />
      </div>
    </>
  );
}

export default App;
