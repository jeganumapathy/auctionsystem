import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Auctions from "./pages/Auctions";

import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import ItemDetails from './pages/ItemDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <p>
        Welcome to bidding system
      </p>
      <div>
        <div>
          <Routes>
            <Route path="Auctions" element={<Auctions />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="Pricing" element={<Pricing />} />
            <Route path="ItemDetails" element={<ItemDetails />} />
          </Routes>
        </div>
      </div>
      <footer className="App-footer" />
    </div>



  );
}

export default App;
