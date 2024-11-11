// app/components/HistorySidebar.tsx

import React from "react";

interface HistoryItem {
  id: string;
  topic: string;
  prompt: string;
  dateGroup: "Today" | "Yesterday" | "Previous 7 Days" | "Previous 30 Days";
}

interface HistorySidebarProps {
  history: HistoryItem[];
}

const HistorySidebar: React.FC<HistorySidebarProps> = ({ history }) => {
  // Group history by `dateGroup`
  const groupedHistory = history.reduce(
    (acc, item) => {
      (acc[item.dateGroup] = acc[item.dateGroup] || []).push(item);
      return acc;
    },
    {} as Record<string, HistoryItem[]>,
  );

  return (
    <div style={styles.sidebar}>
      {Object.entries(groupedHistory).map(([group, items]) => (
        <div key={group} style={styles.group}>
          <h3 style={styles.groupTitle}>{group}</h3>
          {items.map((item) => (
            <div
              key={item.id}
              style={styles.historyItem}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#3A3F58")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#2B2E3B")
              }
            >
              <a href={`/tracs/${item.id}`} style={styles.historyLink}>
                <strong>{item.topic}</strong> <br />
                <span style={styles.prompt}>{item.prompt}</span>
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sidebar: {
    width: "280px",
    background: "linear-gradient(145deg, #1B1D29, #1C1F36)",
    padding: "20px",
    borderRight: "1px solid rgba(255, 255, 255, 0.1)",
    overflowY: "auto",
    height: "100vh",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
  },
  group: {
    marginBottom: "30px",
  },
  groupTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#A8B3D1",
    marginBottom: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    paddingBottom: "4px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  historyItem: {
    padding: "10px 12px",
    lineHeight: "1.4",
    backgroundColor: "#2B2E3B", // Dark background for each item
    borderRadius: "8px",
    marginBottom: "8px",
    transition: "background 0.3s ease, transform 0.2s ease",
    cursor: "pointer",
  },
  historyLink: {
    color: "#5DA3FA", // Accent color for links
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "500",
    transition: "color 0.3s",
  },
  prompt: {
    color: "#B0B8D4", // Softer color for prompt
    fontSize: "13px",
    fontStyle: "italic",
  },
};

export default HistorySidebar;
