import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Documentation from "./pages/Documentation";
import Login from "./pages/Login";

function App () {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = useNavigate();

  const navigateTo = (page) => {
    setCurrentPage(page);
    navigate(`/${page}`); 
  };

  return (
    <div>
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {currentPage === "home" && (
        <>
          <Features />
          <Feedback />
          <Footer></Footer>
        </>
      )}

      <Routes>
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
