import React from "react";
import Button from "./button";
import Tabs from "./tabs";
import {FileCode, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./card";
import CardContent from "./cardcontent";

const RecommendedTemplates = ({ templates, activeTab, setActiveTab }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <h2 className="text-2xl font-bold text-gray-100">RECOMMENDED TEMPLATES</h2>
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
          <TabsTrigger active={activeTab === "all"} onClick={() => setActiveTab("all")}>
            API
          </TabsTrigger>
          <TabsTrigger active={activeTab === "popular"} onClick={() => setActiveTab("popular")}>
            Codebase
          </TabsTrigger>
          <TabsTrigger active={activeTab === "recent"} onClick={() => setActiveTab("recent")}>
            Others
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <Card key={index} className="group hover:border-blue-500/50 transition-all duration-300">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
              <FileCode size={40} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
            </div>
            <CardContent>
              <h3 className="font-medium text-gray-200 group-hover:text-blue-400 transition-colors">
                {template.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{template.category}</p>
              <p className="text-xs text-gray-500 mt-2">{template.users}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const TabsList = ({ children }) => (
  <div className="flex space-x-4 bg-gray-900 border border-gray-800 rounded-lg p-2">
    {children}
  </div>
);

const TabsTrigger = ({ children, active, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors duration-300 ${
      active ? "bg-gray-800 text-white" : "text-gray-400"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default RecommendedTemplates;
