// app/components/TicketHeader.tsx

import React from "react";

interface TicketHeaderProps {
  title: string;
  description: string;
}

const TicketHeader: React.FC<TicketHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#0070f3",
  },
  description: {
    fontSize: "16px",
    color: "#B0B0B0",
    marginBottom: "10px",
  },
};

export default TicketHeader;
