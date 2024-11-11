// app/tasks/[id]/page.tsx

"use client"; // Marks this file as a client component

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use `useParams` instead of `useRouter`

interface TaskProps {
  id: string;
  title: string;
  description: string;
}

// Sample data to simulate fetching task details (replace with real data fetching)
const sampleTaskData: TaskProps = {
  id: "task1",
  title: "Java Syntax Exercise",
  description:
    "Complete exercises on basic Java syntax to strengthen your understanding.",
};

const TaskPage: React.FC = () => {
  const params = useParams(); // Get route parameters
  const taskId = params?.id; // Extract the task `id` from params
  const [task, setTask] = useState<TaskProps | null>(null);

  useEffect(() => {
    if (taskId) {
      // Simulate data fetching (replace with real data fetching)
      setTask(sampleTaskData); // Placeholder task data
    }
  }, [taskId]);

  if (!task) {
    return <p>Loading...</p>; // Render loading state while waiting for data
  }

  return (
    <div style={styles.taskContainer}>
      <h3 style={styles.taskTitle}>{task.title}</h3>
      <p style={styles.taskDescription}>{task.description}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  taskContainer: {
    backgroundColor: "rgba(26, 32, 44, 0.9)",
    padding: "20px",
    borderRadius: "6px",
    margin: "20px 0",
    color: "#fff",
  },
  taskTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#0070f3",
  },
  taskDescription: {
    fontSize: "16px",
    color: "#B0B0B0",
    marginTop: "10px",
  },
};

export default TaskPage;
