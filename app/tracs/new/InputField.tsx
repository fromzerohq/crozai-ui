// app/components/InputField.tsx

import React from "react";

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  icon?: string; // Emoji or icon for the label
  tooltip?: string; // Tooltip text (optional)
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  placeholder,
  icon,
  tooltip,
  required = false,
  onChange,
}) => {
  return (
    <div style={styles.formGroup}>
      <label htmlFor={id} style={styles.label}>
        {icon && <span style={styles.icon}>{icon}</span>} {label}
        {tooltip && (
          <span style={styles.tooltip} title={tooltip}>
            {" "}
            ⓘ
          </span>
        )}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={styles.input}
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#B0B0B0",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  icon: {
    fontSize: "18px",
  },
  tooltip: {
    fontSize: "12px",
    color: "#888",
    cursor: "help",
    marginLeft: "4px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#1A1A1A",
    color: "#ffffff",
  },
};

export default InputField;
