import React from "react";
import { FileCode, GitBranch, WrenchIcon, PlaySquare } from "lucide-react";

const IconGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8 max-w-3xl mx-auto">
      {[
        { icon: <FileCode size={24} />, label: "API" },
        { icon: <GitBranch size={24} />, label: "Repo" },
        { icon: <WrenchIcon size={24} />, label: "Tools" },
        { icon: <PlaySquare size={24} />, label: "C2C" },
      ].map((item, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="flex flex-col items-center space-y-3">
            <div
              className="p-6 bg-gray-900 rounded-xl border border-gray-800 transition-all duration-300 
                            group-hover:bg-gray-800 group-hover:border-blue-500 group-hover:shadow-lg 
                            group-hover:shadow-blue-500/20"
            >
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
  );
};

export default IconGrid;
