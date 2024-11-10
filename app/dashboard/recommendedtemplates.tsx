import React from "react";
import Button from "./button";
import Tabs from "./tabs";
import { FileCode, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./card";
import CardContent from "./cardcontent";

const RecommendedTemplates = ({ templates, activeTab, setActiveTab }: any) => {
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
            className="group transition-all duration-300 hover:border-blue-500/50"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <FileCode
                size={40}
                className="text-gray-600 transition-colors group-hover:text-blue-400"
              />
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
