
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Products, Navbar } from "./components";



// function AppRoutes() {
//   const routes = useRoutes([{ path: "/", element: <Home /> }]);
// }

function App() {
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
