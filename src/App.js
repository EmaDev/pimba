import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Products } from "./components/Products";
import { Searcher } from "./components/Searcher";
import { SectionsButtons } from "./components/SectionsButtons";

function App() {
  return (
    <>
      <Header />
      <Products/>
      <Footer/>
      <NavBar/>
    </>
  );
}

export default App;
