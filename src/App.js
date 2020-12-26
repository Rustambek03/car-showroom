import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductListInHomePage from "./components/Product/ProductListInHomePage";
import ProductType from "./components/ProductType/ProductType";
import Slider from "./components/Slider/Slider";
import ProductsContextProvider from "./context/ProductContext";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Routes />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
