import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from "./components/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
