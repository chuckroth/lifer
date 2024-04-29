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
import SuicideWatch from "./pages/suicidewatch";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cart from "./components/cart";
import ShopProvider from './context/shopContext'
import { useState, useEffect } from "react";
import MobileFooter from "./components/mobileFooter";
import './App.css'; // Import your global styles here


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

  const engine = new Styletron();


function App() {

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <ShopProvider>
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <div>
          <Router>
            <Routes>
              {/* Define routes without Navbar and Cart */}
              <Route
                path="/"
                element={
                  <div className="About-page"

                  >
                    {isWideScreen && <Home />}
                    {!isWideScreen && <SuicideWatch />}
                    <Footer />
                  </div>
                }
              ></Route>
              {/* Add more routes without Navbar and Cart as needed */}
              {/* Define routes with Navbar and Cart */}
              <Route
                path="/*"
                element={
                  <div>
                    <Navbar />
                    <Cart />
                    <Routes>
                      <Route
                        path="gid://shopify/Product/:id"
                        element={<Product />}
                      ></Route>
                      <Route path="/shop" element={<Shop />}></Route>
                      <Route path="/about" element={<About />}></Route>
                      <Route
                        path="/gkys"
                        element={<GoKillYourself />}
                      />
                      <Route path="/test" element={<Test />} />
                      <Route path="/Tshirt" element={<Tshirt />} />
                      <Route path="/Archive" element={<Archive />} />
                      <Route path="/SuicideWatch" element={<SuicideWatch />}/>
                    </Routes>
                    {isWideScreen && <Footer />}
                    {!isWideScreen && <MobileFooter />}
                    
                  </div>
                }
              ></Route>
            </Routes>
          </Router>
        </div>
      </StyletronProvider>
    </ShopProvider>
  );
}

export default App;
