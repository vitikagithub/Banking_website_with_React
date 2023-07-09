import "./App.css";
import HeaderOne from "./Components/HeaderOne";
import HeaderTwo from "./Components/HeaderTwo";
import Middle from "./Components/Middle";
import BankProducts from "./Components/BankProducts";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderOne />
      <HeaderTwo />
      <Middle />
      <BankProducts />
      <Footer />
    </div>
  );
}

export default App;
