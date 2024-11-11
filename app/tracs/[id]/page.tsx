"use client";

import React, { useState } from "react";
import RoadmapHeader from "./components/RoadmapHeader";
import RoadmapMilestone from "./components/RoadmapMilestone";

const LearningRoadmapPage = () => {
  // State for topic and editable prompt
  const topic = "Java Mastery";
  const [prompt, setPrompt] = useState("6-months plan for beginners in Java");

  // Data structure for milestones, tickets, and tasks
  const roadmapData = [
    {
      title: "Milestone 1: Java Basics",
      description: "Introduction to Java programming fundamentals.",
      tasks: [
        { id: "milestone-task1", title: "Complete Java Installation" },
        { id: "milestone-task2", title: "Review Java Syntax Basics" },
      ],
      tickets: [
        {
          id: "1",
          title: "Introduction to Java",
          description: "Overview of Java syntax and basic operations.",
          videoUrl: "https://www.youtube.com/embed/exampleVideo1",
          tasks: [
            { id: "task1", title: "Java Syntax Exercise" },
            { id: "task2", title: "Create a Simple Calculator" },
          ],
        },
        {
          id: "2",
          title: "Object-Oriented Programming in Java",
          description: "Learn about classes, objects, and inheritance in Java.",
          videoUrl: "https://www.youtube.com/embed/exampleVideo2",
          tasks: [
            { id: "task3", title: "Define Classes and Objects" },
            { id: "task4", title: "Practice Inheritance" },
          ],
        },
      ],
    },
    {
      title: "Milestone 2: Advanced Java Topics",
      description: "Deep dive into advanced concepts in Java programming.",
      tasks: [
        { id: "milestone-task3", title: "Understand Exception Hierarchy" },
        { id: "milestone-task4", title: "Practice Error Handling" },
      ],
      tickets: [
        {
          id: "3",
          title: "Exception Handling",
          description: "Learn how to manage errors and exceptions in Java.",
          videoUrl: "https://www.youtube.com/embed/exampleVideo3",
          tasks: [
            { id: "task5", title: "Implement Try-Catch Blocks" },
            { id: "task6", title: "Practice Custom Exceptions" },
          ],
        },
      ],
    },
  ];

  // Handle changes to the prompt in the RoadmapHeader component
  const handlePromptChange = (newPrompt: string) => {
    setPrompt(newPrompt);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Roadmap Header with editable prompt */}
      <RoadmapHeader
        topic={topic}
        prompt={prompt}
        onPromptChange={handlePromptChange}
      />

      {/* Render each milestone */}
      <div style={styles.milestonesContainer}>
        {roadmapData.map((milestone, index) => (
          <RoadmapMilestone
            key={index}
            title={milestone.title}
            description={milestone.description}
            tasks={milestone.tasks} // Milestone-level tasks
            tickets={milestone.tickets} // Tickets within the milestone
          />
        ))}
      </div>
    </div>
  );
};

// Inline styles for page layout
const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    width: "60vw", // Responsive width based on viewport width
    maxWidth: "800px", // Limit max width for large screens
    margin: "0 auto",
    padding: "20px",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  milestonesContainer: {
    marginTop: "20px",
  },
};

export default LearningRoadmapPage;
