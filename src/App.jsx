import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container elements-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
