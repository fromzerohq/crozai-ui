'use client';

import React from 'react';
import { Play, Edit, Eye, MoreVertical, Clock, Calendar, Settings, Tags, ChevronRight, MessageCircle, Share2, GitBranch, Code, Terminal, Palette, ChevronLeft } from 'lucide-react';

const CompactVideoCard = ({ title, thumbnail, duration, branch }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden w-[380px] h-[300px] shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative w-full h-48">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover rounded-t-lg"
        />
        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-md flex items-center gap-1 text-white">
          <Clock className="w-3 h-3" />
          <span className="text-xs">{duration}</span>
        </div>
        {/* Branch Badge */}
        <div className="absolute top-3 left-3 bg-black/70 px-2 py-1 rounded-md flex items-center gap-1 text-white">
          <GitBranch className="w-3 h-3" />
          <span className="text-xs">{branch}</span>
        </div>
      </div>
  
      {/* Content Section */}
      <div className="p-4 flex flex-col space-y-2">
        <h3 className="font-semibold text-base text-gray-100 mb-2 line-clamp-2">{title}</h3>
  
        {/* Buttons Section */}
        <div className="flex gap-2 mt-2">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-md text-sm hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
            <Eye className="w-4 h-4" />
            Preview
          </button>
          <button className="flex items-center gap-4 ml-3 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium rounded-md text-sm hover:from-purple-600 hover:to-purple-800 transition-all duration-300">
            <Palette className="w-4 h-4" />
            Select Theme
          </button>
        </div>
      </div>
    </div>
  );
  
  
  const DetailedVideoCard = ({ title, thumbnail, duration, status, description, tags, lastModified, branch, commits, dependencies, fileSize, version }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="border-b border-gray-700 px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
        <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <GitBranch className="w-4 h-4" />
            {branch}
          </span>
          <span className="flex items-center gap-1">
            <Code className="w-4 h-4" />
            {commits} commits
          </span>
        </div>
      </div>
  
      <div className="flex gap-6 p-6">
        <div className="relative w-96">
          <div className="relative w-full h-56">
            <img 
              src={thumbnail} 
              alt={title} 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-md flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{duration}</span>
            </div>
          </div>
  
          {/* Slide Indicator Section */}
          <div className="mt-3 text-center">
            {/* <span className="text-xs text-gray-400">Slide 1 of 5</span> */}
            <div className="flex justify-center gap-1 mt-1 ">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 hover:bg-purple-700 hover:cursor-pointer rounded-full ${
                    index === 0 ? "bg-purple-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
  
        <div className="flex-1">
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Last updated: {lastModified}
                </span>
              </div>
  
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
  
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
  
          <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
  
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-700/50 rounded-lg p-3">
              <h4 className="text-sm font-medium mb-2">Files Included</h4>
              <div className="text-sm text-gray-300 space-y-1">
                {dependencies.map((dep, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    <span>{dep}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
  
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                <Terminal className="w-4 h-4" />
                Code Editor
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                <Play className="w-4 h-4" />
                Generate
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Eye className="w-4 h-4" />
                Preview
              </button>
            </div>
            
            <span className={`px-3 py-1.5 rounded-full text-sm ${
              status === 'Generated' ? 'bg-green-500/20 text-green-400' :
              status === 'Processing' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-blue-500/20 text-blue-400'
            }`}>
              {status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
   

const VideosDashboard = () => {
  const exampleVideos = [
    {
      title: "API Integration Walkthrough - Auth Flow",
      thumbnail: "/images/thumb.png",
      duration: "1:00",
      status: "Complete",
      branch: "main"
    },
    {
      title: "Database Schema Migration Tutorial",
      thumbnail: "/images/web3_thumbnail.jpg",
      duration: "1:00",
      status: "Complete",
      branch: "feature/db-migration"
    }
  ];

  const previewVideos = [
    {
      title: "React Components Refactoring - Performance Optimization Guide",
      thumbnail: "/images/thumb.png",
      duration: "8:45",
      status: "Generated",
      description: "Comprehensive guide to refactoring React components for better performance. Covers memo, useCallback, and advanced optimization techniques.",
      tags: ["React", "Performance", "Advanced"],
      lastModified: "2 hours ago",
      branch: "feature/react-perf",
      commits: 15,
      dependencies: ["react@18.2.0", "redux@4.2.1", "typescript@4.9.5"],
      fileSize: "245MB",
      version: "2.1.0"
    },
    {
      title: "Microservices Architecture Implementation",
      thumbnail: "/images/web3_thumbnail.jpg",
      duration: "12:20",
      status: "Processing",
      description: "Step-by-step implementation of service discovery and load balancing in a microservices architecture.",
      tags: ["Microservices", "DevOps", "AWS"],
      lastModified: "5 hours ago",
      branch: "feature/microservices",
      commits: 23,
      dependencies: ["docker@20.10.21", "kubernetes@1.25.0"],
      fileSize: "386MB",
      version: "1.5.0"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">Codebase Videos</h1>
            <p className="text-gray-400">Technical documentation and tutorials</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Generate All
          </button>
        </div>

        {/* <section className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Example Implementations</h2>
              <p className="text-sm text-gray-400 mt-1">Reference code videos</p>
            </div>
            <button className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors text-sm">
              View library
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {exampleVideos.map((video, index) => (
              <CompactVideoCard key={index} {...video} />
            ))}
          </div>
        </section> */}

        <section>
          <div className="flex justify-between items-center mb-6">
            {/* <div>
              <h2 className="text-xl font-semibold mb-1">Generated Technical Guides</h2>
              <p className="text-gray-400 text-sm">Auto-generated codebase tutorials</p>
            </div> */}
            <div className="flex gap-4 items-center">
              <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Tags className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {previewVideos.map((video, index) => (
              <DetailedVideoCard key={index} {...video} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideosDashboard;