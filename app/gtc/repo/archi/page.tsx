"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DependencyGraph from "./dependencyGraph";

const Archi = () => {
  const router = useRouter();

  const handleSubmit = () => {
    // Navigate to the doc-visualizer route
    router.push("/gtc/api/doc-visualizer");
  };

  return (
    <div className="archi flex h-screen flex-col">
      <h3 className="animate-text-gradient mt-3 bg-gradient-to-r from-indigo-300 to-purple-100 bg-clip-text text-center text-4xl font-extrabold text-transparent">
        Dependency Architecture - MSAL
      </h3>

      {/* DependencyGraph container */}
      <div className="flex-grow overflow-auto">
        <DependencyGraph datasetCode="MSAL" />
      </div>

      {/* Submit Button container */}
      <div className="p-4 text-center">
        <button
          onClick={handleSubmit}
          className="w-1/2 transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-bold text-white shadow-lg transition duration-200 ease-in-out hover:scale-105 hover:from-purple-600 hover:to-blue-500 md:w-1/3 lg:w-1/4"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Archi;
