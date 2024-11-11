"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FormContainer from "./FormContainer";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import HistorySidebar from "./HistorySidebar";
import historyData from "./historyData.js";
import Chat from "./Chat";
const LearningFormPage = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [topic] = useState("Java Mastery");
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Welcome to your Java learning journey!",
      sender: "system",
    },
  ]);

  const handleSend = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: message, sender: "user" },
      {
        id: (Date.now() + 1).toString(),
        text: "Let's dive into Java!",
        sender: "system",
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Submitted:", { topic, prompt });
      setLoading(false);

      const newTracId = "123"; // Replace with actual ID from API response

      router.push(`/tracs/${newTracId}`);
    }, 1000);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Left Sidebar: History */}
      <HistorySidebar history={historyData} />
      <Chat
        initialTopic="Java Mastery"
        examplePrompt="2 weeks plan for beginners"
      />
      {/* Right Content: Form */}
      {/* <div style={styles.formSection}>
        <h1 style={styles.heading}>Craft Your Learning Journey!</h1>
        <p style={styles.subHeader}>
          Personalize your learning path with just a few details.
        </p>
        <FormContainer>
          <form onSubmit={handleSubmit} style={styles.form}>
            <InputField
              id="topic"
              label="Topic"
              icon="📘"
              value={topic}
              placeholder="e.g., Java"
              required
              onChange={(e) => setTopic(e.target.value)}
            />
            <InputField
              id="prompt"
              label="Prompt (Optional)"
              icon="💡"
              tooltip="Examples: '2 weeks plan for freshers', 'Advanced concepts only'"
              value={prompt}
              placeholder="e.g., 2 Weeks plan for beginners in Java"
              onChange={(e) => setPrompt(e.target.value)}
            />
            <SubmitButton
              text={loading ? "Generating..." : "Generate"}
              disabled={loading}
            />
          </form>
        </FormContainer>
        <div style={styles.examples}>
          <p>
            Need inspiration? Check out some{" "}
            <a href="#templates" style={styles.link}>
              Example Templates
            </a>
            .
          </p>
        </div>
      </div> */}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    display: "flex",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #131929, #000000)",
    color: "#ffffff",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  },
  formSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#ffffff",
  },
  subHeader: {
    fontSize: "16px",
    color: "#b0b0b0",
    marginBottom: "24px",
    textAlign: "center",
    maxWidth: "400px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "40px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    background:
      "linear-gradient(145deg, rgba(45, 55, 72, 0.9), rgba(26, 32, 44, 0.9))",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 112, 243, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  examples: {
    marginTop: "20px",
    textAlign: "center",
  },
  link: {
    color: "#00aaff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default LearningFormPage;
