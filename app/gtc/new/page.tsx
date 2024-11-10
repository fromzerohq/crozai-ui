"use client";
import React, { useState } from "react";

// app/gtc/new/page.js (if using the App Router)

import { useSearchParams } from "next/navigation";
import ApiComponent from "@/app/gtc/api/page";
import RepoComponent from "@/app/gtc/repo/page";

export default function NewGTC() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div>
      {type === "api" && <ApiComponent />}
      {type === "repo" && <RepoComponent />}
      {!type && <div>Please select a type: API or Blog.</div>}
    </div>
  );
}
