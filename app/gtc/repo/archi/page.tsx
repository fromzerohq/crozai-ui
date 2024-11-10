"use client";

import React, { useCallback } from "react";
import DependencyGraph from "./dependencyGraph";

const Archi = () => {
  return (
    <div className="archi">
      <h3 className="animate-text-gradient mt-3 bg-gradient-to-r from-indigo-300 to-purple-100 bg-clip-text text-center text-4xl font-extrabold text-transparent">
        {" "}
        Dependency Architecture - MSAL
      </h3>
      <DependencyGraph datasetCode="MSAL" />
    </div>
  );
};

export default Archi;
