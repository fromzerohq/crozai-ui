// Header.js
import React, { useState, useEffect } from "react";

const Header = () => {
  const [displayedText, setDisplayedText] = useState("");
  const text = "GTC : GenAI Tech Content";
  const speed = 100;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <h1 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
      {displayedText}
    </h1>
  );
};

export default Header;
