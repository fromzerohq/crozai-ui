import React, { ReactNode } from "react";

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <div style={styles.container}>
      {/* <h1 style={styles.title}>Craft Your Learning Journey!</h1> */}
      {children}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "rgba(45, 55, 72, 0.9)",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
    maxWidth: "400px",
    width: "100%",
  },
  // title: {
  //   fontSize: "32px",
  //   fontWeight: "bold",
  //   marginBottom: "40px",
  // },
};

export default FormContainer;
