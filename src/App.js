import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Brands from "./pages/Brands/Brands";
import Contact from "./pages/Contact/Contact";
import WhyChoose from "./pages/WhyChoose/WhyChoose";
import Lunch from "./pages/Lunch/Lunch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/brands" element={<Layout><Brands/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        <Route path="/why" element={<Layout><WhyChoose/></Layout>}/>
        <Route path="/lunch" element={<Layout><Lunch/></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
