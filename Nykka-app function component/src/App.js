import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Components/Navbar";
import { Homepage } from "./Components/HomePage/Homepage";
import { ProductForm } from "./Components/Form/ProductForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { ContactUs } from "./Components/Contactus/ContactUs";
import { CardView } from "./Components/CardView";
import ProductContextProvider from "./Components/context/ProductContextProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductContextProvider>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/add-product" element={<ProductForm />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/Product/:id" element={<CardView />} />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </div>
        </ProductContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
