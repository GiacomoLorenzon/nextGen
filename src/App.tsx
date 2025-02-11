import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

import { Landing, Info, Plans, Reviews, Form, Footer } from "./components"; // Import components from the "components" folder
import './index.scss'; // Import the global SCSS file for styling
import './App.scss'; // Import SCSS of main-container

// The Main App component
function App() {
  // Define state for the theme mode (light or dark)
  const [mode, setMode] = useState<string>('dark'); // Default mode is 'dark'

  // Define state for Back to Top button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the mode between 'light' and 'dark'
  const handleModeChange = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark';
      localStorage.setItem("mode", newMode); // Store the mode in localStorage
      return newMode;
    });
  };

  // Toggle visibility of Back to Top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll smoothly to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Apply the stored mode from localStorage on page load
  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  // JSX returned by the component
  return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      {/* Main content */}
      <Landing />
      <Info />
      <Plans />
      <Reviews />
      <Form />
      <Footer />

      {/* Back to Top Button */}
      {isVisible && (
        <Fab
          onClick={scrollToTop}
          size="medium"
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-purple-600 to-blue-500 text-white"
          style={{
            color: "white",
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 1000,
          }}
          aria-label="add"
        >
          <span className="inline-block hover:translate-y-[-10px] transition-all ease-in-out duration-300">
            <ArrowUpwardRoundedIcon />
          </span>
        </Fab>
      )}
    </div>
  );
}

export default App;
