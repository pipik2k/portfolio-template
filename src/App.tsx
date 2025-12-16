import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";
import MainPage from "./Pages/MainPage";
import ContactPage from "./Pages/ContactPage";
import SelfSummary from "./Components/SelfSummary";
import Technique from "./Pages/Technique";
import { Column } from "./Styles/StyledComponents";
import Footer from "./Components/Footer";
import GameDetail from "./Pages/GameDetail";

// Global styles cho fullscreen background
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  body {
    background-size: cover !important;
    background-attachment: fixed !important;
    background-repeat: repeat-y !important;
    background-position: center center !important;
  }

  #root {
    min-height: 100vh;
    width: 100%;
  }
`;

const AppContainer = styled(Column)`
  min-height: 90vh;
  padding: 60px;
  gap: 30px;
  background: transparent;
  
  @media (max-width: 768px) {
    gap: 0;
    padding: 30px 10px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;
  padding: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
    gap: 12px;
    padding: 15px 10px;
    flex-wrap: wrap;
  }
`;

const NavbarLink = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: #00ff00;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 12px;
  
  /* Enhanced button style */
  background: linear-gradient(135deg, rgba(0, 255, 0, 0.1) 0%, rgba(0, 200, 0, 0.15) 100%);
  border: 2px solid #00ff00;
  border-radius: 12px;
  padding: 16px 32px;
  box-shadow: 
    0 0 20px rgba(0, 255, 0, 0.3),
    inset 0 0 10px rgba(0, 255, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  /* Glow effect */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 255, 0, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    color: #ffffff;
    background: linear-gradient(135deg, rgba(0, 255, 0, 0.25) 0%, rgba(0, 200, 0, 0.3) 100%);
    border-color: #00ff88;
    box-shadow: 
      0 0 30px rgba(0, 255, 0, 0.6),
      0 0 60px rgba(0, 255, 0, 0.3),
      inset 0 0 20px rgba(0, 255, 0, 0.2);
    transform: translateY(-3px) scale(1.05);
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-1px) scale(1.02);
    box-shadow: 
      0 0 15px rgba(0, 255, 0, 0.5),
      inset 0 0 15px rgba(0, 255, 0, 0.15);
  }
  
  /* Icon styling */
  span {
    font-size: 2.5rem;
    filter: drop-shadow(0 0 8px rgba(0, 255, 0, 0.6));
    transition: transform 0.3s ease;
  }
  
  &:hover span {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 0 15px rgba(0, 255, 0, 0.9));
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 12px 20px;
    gap: 8px;
    border-width: 1.5px;
    
    span {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 10px 16px;
    
    span {
      font-size: 1.3rem;
    }
  }
`;

const App: React.FC = () => {
  useEffect(() => {
    // Set initial background properties
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'repeat-y';
    
    // Scroll animation
    const handleScroll = () => {
      document.body.style.backgroundPosition = `${window.scrollY * 0.05}px ${window.scrollY * 0.8}px`;
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <SelfSummary />
        <Navbar>
          <NavbarLink to="/">Games 🎮🕹️</NavbarLink>
          <NavbarLink to="/about-me">Technical 💻</NavbarLink>
          <NavbarLink to="/contact">Contact 💬</NavbarLink>
        </Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/game/:index" element={<GameDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-me" element={<Technique />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;