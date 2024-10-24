"use client";
import React, { useState } from "react";
import { FileCode, GitBranch, WrenchIcon, PlaySquare, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./card";
import CardContent from "./cardcontent";
import Button from "./button";
import Tabs from "./tabs";
import LastCheckpoint from "./lastcheckpoint";
import RecommendedTemplates from "./recommendedtemplates";
import IconGrid from "./icongrid";
import Typewriter from 'typewriter-effect';

// Main GTCCreator Component
const GTCCreator = () => {
  const templates = [
    { title: "Payment Integration", category: "API Template", users: "2.3k users" },
    { title: "Auth Flow", category: "Security Template", users: "1.8k users" },
    { title: "Data Pipeline", category: "ETL Template", users: "1.5k users" },
    { title: "User Management", category: "Admin Template", users: "3.1k users" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Create New GTC Section */}
        <div className="bg-gradient-to-br from-blue-950 to-indigo-900 p-10 rounded-2xl shadow-2xl">
          {/* Static Text */}
          <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            CREATE NEW
          </h1>
          {/* Animated Text */}
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            <Typewriter
              options={{
                strings: ["GTC : GenAI Tech Content"], // Added prefix for clarity
                autoStart: true, // Start automatically
                loop: true, // Loop the typing effect
                deleteSpeed: 50, // Speed at which text is deleted
                pauseFor: 1000, // Pause before starting the next string
              }}
            />
          </h2>
          <IconGrid />
        </div>

        {/* Last Checkpoint Section */}
        <LastCheckpoint />

        {/* Recommended Templates Section */}
        <RecommendedTemplates templates={templates} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default GTCCreator;
