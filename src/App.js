
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Products from "./components/Products/Products";



// function AppRoutes() {
//   const routes = useRoutes([{ path: "/", element: <Home /> }]);
// }

function App() {
  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>
    <>
    <Products />

    </>
  );
}

export default App;
