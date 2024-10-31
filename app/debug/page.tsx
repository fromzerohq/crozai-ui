import React from "react";

const steps = [
  "Research",
  "UI Concept",
  "Branding",
  "UI/UX Design",
  "Development",
];

const ProcessSteps = () => {
  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <div style={styles.title}>The process</div>
        <div style={styles.tagline}>GALAXY PRODUCT DESIGN</div>
      </div>

      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={{ ...styles.step, ...getStepStyle(index) }}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

const getStepStyle = (index: number) => ({
  backgroundColor: "rgba(93, 112, 226, 0.2)", // Semi-transparent blue background
  color: "rgba(255, 255, 255, 0.9)", // Slightly opaque white text
  border: "1px solid rgba(255, 255, 255, 0.3)", // Faint white border
});

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #283c86 0%, #45a247 100%)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
    padding: "20px",
  },
  titleContainer: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: "8px",
  },
  tagline: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.7)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "4px 12px",
    borderRadius: "20px",
  },
  stepsContainer: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 1,
  },
  step: {
    padding: "12px 30px",
    borderRadius: "30px", // Rounded corners to create pill shape
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    backdropFilter: "blur(10px)", // Adds a frosted glass effect
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default ProcessSteps;
