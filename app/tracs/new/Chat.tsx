"use client";

import React, { useState, useEffect } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "system";
  isStreaming?: boolean; // Indicates if the message is currently streaming
}

const Chat: React.FC<{ initialTopic: string; examplePrompt: string }> = ({
  initialTopic,
  examplePrompt,
}) => {
  const [topic, setTopic] = useState(initialTopic);
  const [isEditingTopic, setIsEditingTopic] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: `Let's get started with: ${examplePrompt}`,
      sender: "system",
      isStreaming: false,
    },
  ]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [loading, setLoading] = useState(false);
  const [finalSubmitEnabled, setFinalSubmitEnabled] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: input,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
      triggerStreamingResponse("Here's a response for your topic...");
    }
  };

  const triggerStreamingResponse = (fullText: string) => {
    setIsStreaming(true);
    const messageId = Date.now().toString();
    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index];
        index++;
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          const streamingMessageIndex = updatedMessages.findIndex(
            (msg) => msg.id === messageId,
          );

          if (streamingMessageIndex > -1) {
            updatedMessages[streamingMessageIndex].text = currentText;
          } else {
            updatedMessages.push({
              id: messageId,
              text: currentText,
              sender: "system",
              isStreaming: true,
            });
          }
          return updatedMessages;
        });
      } else {
        clearInterval(interval);
        setIsStreaming(false);
        setFinalSubmitEnabled(true); // Enable final submit once streaming is complete
      }
    }, 50); // Adjust delay as needed for streaming speed
  };

  const handleFinalSubmit = () => {
    setLoading(true);
    // Simulate final submission (e.g., API call or navigation)
    setTimeout(() => {
      console.log("Final submission complete.");
      setLoading(false);
      // Optionally redirect or close chat
    }, 1000);
  };

  const toggleEditTopic = () => {
    setIsEditingTopic(!isEditingTopic);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  return (
    <div style={styles.chatContainer}>
      {/* Chat Header with Editable Topic */}
      <div style={styles.header}>
        {isEditingTopic ? (
          <input
            type="text"
            value={topic}
            onChange={handleTopicChange}
            onBlur={toggleEditTopic}
            autoFocus
            style={styles.topicInput}
          />
        ) : (
          <h1 style={styles.topic} onClick={toggleEditTopic}>
            Topic: {topic}
          </h1>
        )}
      </div>

      {/* Messages Section */}
      <div style={styles.messagesContainer}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.message,
              backgroundColor: msg.sender === "user" ? "#2c3440" : "#3b4252",
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section aligned to the right */}
      <form onSubmit={handleSend} style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={styles.input}
          disabled={isStreaming}
        />
        <button type="submit" style={styles.button} disabled={isStreaming}>
          Send
        </button>
      </form>

      {/* Final Submit Button */}
      {finalSubmitEnabled && (
        <button
          onClick={handleFinalSubmit}
          style={{
            ...styles.finalSubmitButton,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Final Submit"}
        </button>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  chatContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1e293b",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 112, 243, 0.3)",
  },
  header: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "10px",
    marginBottom: "20px",
    textAlign: "center",
  },
  topic: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
    cursor: "pointer",
  },
  topicInput: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#2c3440",
    border: "none",
    outline: "none",
    textAlign: "center",
    borderRadius: "6px",
    padding: "4px",
  },
  messagesContainer: {
    flex: 1,
    width: "100%",
    maxWidth: "400px",
    overflowY: "auto",
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  message: {
    padding: "12px",
    borderRadius: "8px",
    color: "#ffffff",
    maxWidth: "75%",
    fontSize: "14px",
    lineHeight: "1.4",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: "#2c3440",
    borderRadius: "8px",
    padding: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  },
  input: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    backgroundColor: "#3b4252",
    color: "#ffffff",
    border: "none",
    outline: "none",
    marginRight: "8px",
  },
  button: {
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "linear-gradient(90deg, #007bff, #0056d2)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  finalSubmitButton: {
    marginTop: "20px",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "linear-gradient(90deg, #28a745, #218838)",
    border: "none",
    borderRadius: "6px",
    alignSelf: "center",
    width: "100%",
    maxWidth: "400px",
  },
};

export default Chat;
