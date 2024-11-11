// app/tickets/[ids]/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TicketHeader from "../[ids]/components/TicketHeader";
import ResourcesSection from "../[ids]/components/ResourcesSection";
import VideoGrid from "../[ids]/components/VideoGrid";
import CommentsSection from "../[ids]/components/CommentsSection";
import { margin } from "polished";

const sampleTicketData = {
  id: "1",
  title: "Introduction to Java",
  description: "Overview of Java syntax and basic operations.",
  videoUrl: "https://www.youtube.com/embed/exampleVideo1",
  tasks: [
    { id: "task1", title: "Java Syntax Exercise" },
    { id: "task2", title: "Create a Simple Calculator" },
  ],
  resources: [
    {
      id: "res1",
      title: "Java Basics Video",
      type: "video",
      url: "https://www.youtube.com/embed/exampleResourceVideo1",
    },
    {
      id: "res2",
      title: "Inheritance in Java",
      type: "video",
      url: "https://www.youtube.com/embed/exampleResourceVideo2",
    },
    {
      id: "res3",
      title: "Java Documentation",
      type: "external",
      url: "https://docs.oracle.com/javase/8/docs/",
    },
    {
      id: "res4",
      title: "Java Tutorial on W3Schools",
      type: "external",
      url: "https://www.w3schools.com/java/",
    },
  ],
  comments: [
    {
      id: "comment1",
      text: "This video was really helpful!",
      author: "Alice",
      date: "2023-01-15",
    },
    {
      id: "comment2",
      text: "I had trouble with inheritance, but this cleared things up.",
      author: "Bob",
      date: "2023-01-20",
    },
  ],
};

const TicketPage: React.FC = () => {
  const params = useParams();
  const ticketId = params?.ids;
  const [ticket, setTicket] = useState<TicketProps | null>(null);

  useEffect(() => {
    if (ticketId) {
      setTicket(sampleTicketData); // Replace with real data fetching
    }
  }, [ticketId]);

  if (!ticket) {
    return <p style={styles.loading}>Loading...</p>;
  }

  const videoResources =
    ticket.resources?.filter((res) => res.type === "video") || [];
  const externalResources =
    ticket.resources?.filter((res) => res.type === "external") || [];

  return (
    <div style={styles.container}>
      <TicketHeader title={ticket.title} description={ticket.description} />
      <div style={styles.section}>
        <h3 style={styles.subHeading}>Tasks</h3>
        {/* <TaskList tasks={ticket.tasks} /> */}
      </div>
      <div style={styles.section}>
        <ResourcesSection resources={externalResources} />
      </div>
      <div style={styles.section}>
        <VideoGrid videos={videoResources} />
      </div>
      <div style={styles.section}>
        <CommentsSection comments={ticket.comments} />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#1c1f2b",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    color: "#ffffff",
    width: "60vw", // Responsive width based on viewport width
    maxWidth: "800px", // Limit max width for large screens
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  loading: {
    textAlign: "center",
    fontSize: "18px",
    color: "#888",
  },
  section: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#262a38",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  subHeading: {
    fontSize: "20px",
    color: "#00aaff",
    marginBottom: "12px",
  },
};

export default TicketPage;
