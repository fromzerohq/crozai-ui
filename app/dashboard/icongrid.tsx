import React from "react";
import { useRouter } from "next/navigation";
import { FileCode, GitBranch, WrenchIcon, PlaySquare } from "lucide-react";

const IconGrid = () => {
  const router = useRouter();

  // Define a function to handle navigation
  const handleClick = (type) => {
    router.push(`/gtc/new?type=${type}`);
  };

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-4 gap-8">
      {[
        { icon: <FileCode size={24} />, label: "API", type: "api" },
        { icon: <GitBranch size={24} />, label: "Repo", type: "repo" },
        { icon: <WrenchIcon size={24} />, label: "Tools", type: "tools" },
        { icon: <PlaySquare size={24} />, label: "C2C", type: "c2c" },
      ].map((item, index) => (
        <div
          key={index}
          onClick={() => handleClick(item.type)} // Call handleClick with the type
          className="group cursor-pointer"
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-gray-800 group-hover:shadow-lg group-hover:shadow-blue-500/20">
              <div className="text-blue-400 transition-colors group-hover:text-blue-300">
                {item.icon}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-blue-400">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;
