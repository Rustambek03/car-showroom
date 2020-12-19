import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductListInHomePage from "./components/Product/ProductListInHomePage";
import Slider from "./components/Slider/Slider";
import ProductsContextProvider from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Header />
        <Slider />
        <ProductListInHomePage />
        <Footer />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
