import React, { useState, useEffect } from "react";
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function Landing() {
  const [height] = useState(window.innerHeight);
  const [darkMode, setDarkMode] = useState(false);

  // Check if there's a saved theme in localStorage and apply it
  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setDarkMode(storedMode === 'dark'); // Convert the string to a boolean
    } else {
      setDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Toggle between dark and light mode
  const toggleMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", newMode ? 'dark' : 'light'); // Store as a string
      return newMode;
    });
  };

  // Apply dark mode by adding/removing the 'dark' class to the body or html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToNextSection = () => {
    // Scroll to the next section (Timeline)
    window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-8 dark:bg-gray-900" style={{ height: `${height}px` }}>
      <div className="">
        <div className="flex justify-end">
          <label className="inline-flex items-center cursor-pointer ml-auto">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleMode} // Change the mode when toggled
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-gradient-to-r from-purple-600 to-blue-500"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white">
              <Brightness4Icon />
            </span>
          </label>
        </div>
        <h1 className="pt-40 mb-4 font-extralight text-gray-900 dark:text-white text-8xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
            Ng
          </span>
          <span className="dark:text-white">
            C
          </span>
        </h1>
        <div className="pt-4">
          <h4 className="text-4xl font-normal dark:text-white">
            Next-generation
          </h4>
          <h4 className="text-4xl font-normal dark:text-white">
            Consultants
          </h4>
          <h6 className="mt-3 text-2xl font-normal text-gray-500">
            Bring out the most of your past, succeed in a bright future.
          </h6>
        </div>
      </div>
      <button
        type="button"
        className="mt-20 text-white bg-gradient-to-br from-purple-600 to-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          transition-all duration-300 ease-in-out
          focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:focus:ring-blue-800 group" // Add 'group' here to target child on hover
        onClick={scrollToNextSection}
      >
        Discover
        <span className="ml-1 arrow inline-block transition-transform duration-300 ease-in-out group-hover:rotate-90">
          <EastRoundedIcon />
        </span>
      </button>
    </div>
  );
}

export default Landing;
