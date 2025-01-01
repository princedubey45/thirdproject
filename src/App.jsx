import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; // Import your custom styles if needed

function App() {
  const [isWished, setIsWished] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWish = () => {
    setIsWished(true);
  };

  // Update window size for Confetti animation
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App d-flex justify-content-center align-items-center vh-100 bg-warning position-relative">
      {/* Confetti component */}
      {isWished && <Confetti width={windowWidth} height={windowHeight} />}
      
      {/* Content Container */}
      <div className="text-center p-4 bg-white shadow rounded position-relative z-index-10 w-75 w-md-50">
        {/* Heading */}
        <h1 className="display-3 mb-4">{isWished ? "Happy New Year sanjana!" : "Wishing You a Happy New Year!"}</h1>
        
        {/* Subheading */}
        <p className="lead mb-4">
          {isWished
            ? "May this year bring you joy, peace, and endless blessings."
            : "May all your dreams and goals come true in this fresh new year!"}
        </p>

        {/* Button */}
        <button
          className="btn btn-danger btn-lg"
          onClick={handleWish}
        >
          {isWished ? "🎉 Celebrate Again" : "Send New Year Wishes 🎆"}
        </button>
      </div>
    </div>
  );
}

export default App;
