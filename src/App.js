import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
//import Documentation from "./pages/Documentation";
//import Login from "./pages/Login";
import "./App.css";

const App = () => {
  return (

    <div className="app">
      <Header />
      <Features />
      <Feedback />
      <Footer />
    </div>
  );
}
/*
   <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Features />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/login" element={<Login />} />
       </Routes>
      </div>
    </Router> 
  );
}*/
export default App;
