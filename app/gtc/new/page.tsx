"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ApiComponent from "@/app/gtc/api/page";
import RepoComponent from "@/app/gtc/repo/page";
import LoadingIndicator from "@/app/components/loader";

function GtcNewContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div>
      {type === "api" && <ApiComponent />}
      {type === "repo" && <RepoComponent />}
      {!type && <div>Please select a type: API or Repo.</div>}
    </div>
  );
}

export default function NewGTC() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <GtcNewContent />
    </Suspense>
  );
}
