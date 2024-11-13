import React from "react";
import Button from "./button";
import Tabs from "./tabs";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./card";
import CardContent from "./cardcontent";
import Image from "next/image";

const RecommendedTemplates = ({ activeTab, setActiveTab }: any) => {
  // Sample templates data with image URLs
  const templates = [
    {
      title: "Payment Integration",
      category: "API Template",
      users: "2.1k users",
      image: "/images/thumb.png"
    },
    {
      title: "Authentication Flow",
      category: "Codebase Template",
      users: "1.8k users",
      image: "/images/thumb.png"
    },
    {
      title: "Database Schema",
      category: "API Template",
      users: "1.5k users",
      image: "/images/thumb.png"
    },
    {
      title: "User Management",
      category: "Others",
      users: "1.2k users",
      image: "/images/thumb.png"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-bold text-gray-100">
            RECOMMENDED TEMPLATES
          </h2>
          <Sparkles size={20} className="text-blue-400" />
        </div>
        <div className="flex gap-2">
          <Button className="hover:bg-gray-800">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button className="hover:bg-gray-800">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Tabs>
        <TabsList>
          <TabsTrigger
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
          >
            API
          </TabsTrigger>
          <TabsTrigger
            active={activeTab === "popular"}
            onClick={() => setActiveTab("popular")}
          >
            Codebase
          </TabsTrigger>
          <TabsTrigger
            active={activeTab === "recent"}
            onClick={() => setActiveTab("recent")}
          >
            Others
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <Card
            key={index}
            className="group cursor-pointer transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={template.image}
                alt={template.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <CardContent>
              <h3 className="font-medium text-gray-200 transition-colors group-hover:text-blue-400">
                {template.title}
              </h3>
              <p className="mt-1 text-sm text-gray-400">{template.category}</p>
              <p className="mt-2 text-xs text-gray-500">{template.users}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TabsList = ({ children }) => (
  <div className="flex space-x-4 rounded-lg border border-gray-800 bg-gray-900 p-2">
    {children}
  </div>
);

const TabsTrigger = ({ children, active, onClick }) => (
  <button
    className={`rounded-md px-4 py-2 transition-colors duration-300 ${
      active ? "bg-gray-800 text-white" : "text-gray-400"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default RecommendedTemplates;
