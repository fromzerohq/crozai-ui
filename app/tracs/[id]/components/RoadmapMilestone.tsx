// app/components/RoadmapMilestone.tsx

import React from "react";
import Link from "next/link";

interface TaskItem {
  id: string;
  title: string;
}

interface TicketItem {
  id: string;
  title: string;
}

interface RoadmapMilestoneProps {
  title: string;
  description: string;
  tickets: TicketItem[];
  tasks: TaskItem[];
}

const RoadmapMilestone: React.FC<RoadmapMilestoneProps> = ({
  title,
  description,
  tickets,
  tasks,
}) => {
  return (
    <div style={styles.milestoneContainer}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>

      {/* List of Ticket Titles with Sequence Numbers */}
      <div style={styles.ticketsContainer}>
        <h3>Tickets</h3>
        <ul style={styles.ticketList}>
          {tickets.map((ticket, index) => (
            <li key={ticket.id} style={styles.ticketItem}>
              <div style={styles.sequenceBadge}>{index + 1}</div>
              <Link
                href={`/tracs/tickets/${ticket.id}`}
                style={styles.ticketLink}
              >
                {ticket.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* List of Milestone-Level Task Titles with Sequence Numbers */}
      <div style={styles.tasksContainer}>
        <h3>Milestone Tasks</h3>
        <ul style={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={task.id} style={styles.taskItem}>
              <div style={styles.sequenceBadge}>{index + 1}</div>
              <Link href={`/tracs/tasks/${task.id}`} style={styles.taskLink}>
                {task.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  milestoneContainer: {
    backgroundColor: "rgba(45, 55, 72, 0.8)",
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    color: "#fff",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  description: {
    fontSize: "16px",
    color: "#B0B0B0",
  },
  ticketsContainer: {
    marginTop: "20px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    paddingBottom: "15px",
  },
  ticketList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  ticketItem: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "8px",
    backgroundColor: "rgba(45, 55, 72, 0.9)",
    borderRadius: "5px",
  },
  ticketLink: {
    color: "#0070f3",
    textDecoration: "none",
    fontSize: "16px",
    marginLeft: "8px",
  },
  tasksContainer: {
    marginTop: "20px",
  },
  taskList: {
    listStyleType: "none",
    padding: "0",
    margin: "0",
  },
  taskItem: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    padding: "8px",
    backgroundColor: "rgba(45, 55, 72, 0.9)",
    borderRadius: "5px",
  },
  taskLink: {
    color: "#0070f3",
    textDecoration: "none",
    fontSize: "16px",
    marginLeft: "8px",
  },
  sequenceBadge: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    backgroundColor: "#0070f3",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default RoadmapMilestone;
