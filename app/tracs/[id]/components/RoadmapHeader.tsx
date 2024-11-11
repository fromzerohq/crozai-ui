"use client";

import React, { useEffect, useRef } from "react";

interface RoadmapHeaderProps {
  topic: string;
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
}

const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({
  topic,
  prompt,
  onPromptChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null); // Ref to control the input

  useEffect(() => {
    // Function to set focus and move cursor to end
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    };

    // Set interval to maintain focus periodically
    const intervalId = setInterval(focusInput, 500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div style={styles.headerContainer}>
      <h1 style={styles.topic}>{topic}</h1>
      <input
        type="text"
        value={prompt}
        ref={inputRef}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Enter your prompt..."
        style={styles.promptInput}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  headerContainer: {
    textAlign: "center",
    marginBottom: "40px",
  },
  topic: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#ffffff",
  },
  promptInput: {
    fontSize: "18px",
    marginTop: "10px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "80%",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    outline: "none",
    cursor: "text", // Ensure text cursor appears
    transition: "border-color 0.3s, color 0.3s", // Smooth transition for color changes
  },
};

export default RoadmapHeader;
