import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Products, Navbar } from "./components";
import { commerce } from "./lib/commerce";

// function AppRoutes() {
//   const routes = useRoutes([{ path: "/", element: <Home /> }]);
// }

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
    <>
      <Navbar /> 
      <Products />
    </>
  );
}

export default App;
