import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./components/Products";
import Header from "./components/Header";


function App() {
  return (
    <>
      
      <Header/>
      <Products/>
      <ToastContainer />
    </>
  );
}

export default App;
