import Navbar from "./components/Navbar";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import ProductDetail from "./Pages/ProductDetail";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer,Bounce } from "react-toastify";
const App = () => {
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className="min-h-screen bg-gray-950 font-sans text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
