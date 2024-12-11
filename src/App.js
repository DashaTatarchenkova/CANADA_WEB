import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Documentation from "./pages/Documentation";
import Navigation from "./components/Navigation";
import LoginModal from "./components/LoginModal";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRegister, setIsRegister] = useState(false);

  const isModalOpen = location.pathname === "/login" || location.pathname === "/register";

  useEffect(() => {
    if (location.pathname === "/register") {
      setIsRegister(true);
    } else if (location.pathname === "/login") {
      setIsRegister(false);
    }
  }, [location.pathname]);

  const closeModal = () => {
    navigate("/");
  };

  return (
    <div>
      <Navigation currentPage={location.pathname} onNavigate={(page) => navigate(page)} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Features />
              <Feedback />
              <Footer />
            </>
          }
        />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>

      {isModalOpen && (
        <LoginModal
          isRegister={isRegister}
          closeModal={closeModal}
          switchToRegister={() => navigate("/register")}
          switchToLogin={() => navigate("/login")}
        />
      )}
    </div>
  );
}

export default App;

