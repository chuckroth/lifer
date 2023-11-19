import React from "react";
import {Provider as StyletronProvider,DebugEngine} from "styletron-react"
import {Client as Styletron} from "styletron-engine-atomic"
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import GoKillYourself from "./pages/GoKillYourself"
import Test from "./pages/Test"
import Product from "./pages/product";
import Tshirt from "./pages/Tshirt";
import Archive from "./pages/Archive";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cart from "./components/cart";
import ShopProvider from './context/shopContext'
import './App.css'; // Import your global styles here


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();


function App() {
  return (
    <ShopProvider>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <div >
      <Router >
      <Navbar />
      <Cart />
        <Routes>
          <Route path="gid://shopify/Product/:id" element={<Product />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/gkys" element={<GoKillYourself />} />
          <Route path="/test" element={<Test />} />
          <Route path='/Tshirt' element={<Tshirt />} />
          <Route path='/Archive' element={<Archive />} />
        </Routes>
       <Footer />
      </Router>
      </div>
    </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
