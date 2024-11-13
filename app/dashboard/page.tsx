"use client";
import React, { useState } from "react";
import {
  FileCode,
  GitBranch,
  WrenchIcon,
  PlaySquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Card from "./card";
import CardContent from "./cardcontent";
import Button from "./button";
import Tabs from "./tabs";
import LastCheckpoint from "./lastcheckpoint";
import RecommendedTemplates from "./recommendedtemplates";
import IconGrid from "./icongrid";
import Typewriter from "typewriter-effect";

// Main GTCCreator Component
const GTCCreator = () => {
  const templates = [
    {
      title: "Payment Integration",
      category: "API Template",
      users: "2.3k users",
    },
    { title: "Auth Flow", category: "Security Template", users: "1.8k users" },
    { title: "Data Pipeline", category: "ETL Template", users: "1.5k users" },
    {
      title: "User Management",
      category: "Admin Template",
      users: "3.1k users",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gray-950 p-8 text-gray-100">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Create New GTC Section */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-950 to-indigo-900 p-10 shadow-2xl">
          {/* Static Text */}
          <h1 className="mb-6 bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-center text-3xl font-bold text-transparent">
            CREATE NEW
          </h1>
          {/* Animated Text */}
          <IconGrid />
        </div>

        {/* Last Checkpoint Section */}
        <LastCheckpoint />

        {/* Recommended Templates Section */}
        <RecommendedTemplates
          templates={templates}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default GTCCreator;
