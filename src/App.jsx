import { useContext } from "react";
import Likes from "./components/Likes/Likes";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";
import ProducContext from "./context/produc-context";
import Home from "./pages/home/Home";

function App() {
  const ctx = useContext(ProducContext);
  return (
    <>
      <Navbar/>
      {ctx.route === "home" &&  <Home/>}
      {ctx.route === "orders" && <Orders/>}
      {ctx.route === "likes" && <Likes/>}
    </>
  );
};

export default App;
