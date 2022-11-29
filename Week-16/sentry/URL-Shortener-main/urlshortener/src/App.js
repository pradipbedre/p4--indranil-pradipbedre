import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contant";
import About from "./pages/About";
import "./styles.css";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
