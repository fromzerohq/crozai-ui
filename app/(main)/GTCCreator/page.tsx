"use client"
import React, { useState } from 'react';
import { FileCode, GitBranch, WrenchIcon, PlaySquare, Search, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

// Card Component
const Card = ({ children, className }) => (
  <div className={`rounded-xl shadow-lg bg-gray-900 border border-gray-800 overflow-hidden ${className}`}>
    {children}
  </div>
);

// CardContent Component
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

// Button Component
const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition duration-300 text-white ${className}`}
  >
    {children}
  </button>
);

// Tabs Components
const Tabs = ({ children }) => (
  <div className="mt-6">{children}</div>
);

const TabsList = ({ children }) => (
  <div className="flex space-x-4 bg-gray-900 border border-gray-800 rounded-lg p-2">
    {children}
  </div>
);

const TabsTrigger = ({ children, active, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors duration-300 ${active ? 'bg-gray-800 text-white' : 'text-gray-400'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Input Component
const Input = ({ placeholder, className }) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`w-full bg-gray-900 border border-gray-800 text-gray-200 py-2 px-4 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ${className}`}
  />
);

const GTCCreator = () => {
  const templates = [
    { title: "Payment Integration", category: "API Template", users: "2.3k users" },
    { title: "Auth Flow", category: "Security Template", users: "1.8k users" },
    { title: "Data Pipeline", category: "ETL Template", users: "1.5k users" },
    { title: "User Management", category: "Admin Template", users: "3.1k users" }
  ];

  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Create New GTC Section */}
        <div className="bg-gradient-to-br from-blue-950 to-indigo-900 p-10 rounded-2xl shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">
            CREATE CONTENT
          </h1>

          <div className="grid grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { icon: <FileCode size={24} />, label: "API" },
              { icon: <GitBranch size={24} />, label: "Repo" },
              { icon: <WrenchIcon size={24} />, label: "Tools" },
              { icon: <PlaySquare size={24} />, label: "C2C" }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-6 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 
                                  group-hover:bg-gray-800 group-hover:border-blue-500 group-hover:shadow-lg 
                                  group-hover:shadow-blue-500/20">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-colors">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Last Checkpoint Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-2xl font-bold text-gray-100">LAST CHECKPOINT</h2>
            <div className="h-1 w-1 rounded-full bg-blue-400"></div>
          </div>

          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="group hover:border-blue-500/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <PlaySquare size={30} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <CardContent>
                  <h3 className="font-medium text-gray-200">{item === 1 ? 'CreatePayment.mp4' : 'Title'}</h3>
                  <p className="text-sm text-gray-400">{item === 1 ? '2 mins ago' : 'huidhaid'}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recommended Templates Section */}
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
              <TabsTrigger active={activeTab === 'all'} onClick={() => setActiveTab('all')}>API</TabsTrigger>
              <TabsTrigger active={activeTab === 'popular'} onClick={() => setActiveTab('popular')}>Codebase</TabsTrigger>
              <TabsTrigger active={activeTab === 'recent'} onClick={() => setActiveTab('recent')}>Others</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="group hover:border-blue-500/50 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <FileCode size={40} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                </div>
                <CardContent>
                  <h3 className="font-medium text-gray-200 group-hover:text-blue-400 transition-colors">{template.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{template.category}</p>
                  <p className="text-xs text-gray-500 mt-2">{template.users}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        
        </div>

       
      </div>
    </div>
  );
};

export default GTCCreator;
