import React from "react";

interface SubmitButtonProps {
  text: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  text,
  disabled = false,
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      style={disabled ? styles.buttonLoading : styles.button}
    >
      {disabled ? "Creating..." : "Create"}
    </button>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  button: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "linear-gradient(115deg, #000000, #005bb9)", // Blue gradient
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  },
  buttonLoading: {
    padding: "12px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ffffff",
    background: "linear-gradient(145deg, #9aa0ac, #7b8088)", // Gray gradient for loading
    border: "none",
    borderRadius: "6px",
    cursor: "not-allowed",
  },
};

export default SubmitButton;
