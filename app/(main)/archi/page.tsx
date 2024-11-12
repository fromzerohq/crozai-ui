"use client";

import React, { useCallback } from "react";
import DependencyGraph from "./dependencyGraph";

const Archi = () => {
  return (
    <div className="archi">
      <DependencyGraph datasetCode="MSAL" />
    </div>
  );
};

export default Archi;
