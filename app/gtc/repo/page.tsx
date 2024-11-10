"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // for Next.js navigation
import "./repo.css";

const RepoImportPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isExiting, setIsExiting] = useState(false); // For exit animation
  const router = useRouter(); // initialize router for navigation
  const scrollContainerRef = React.useRef(null);

  const previousRepos = [
    {
      id: 1,
      name: "Payment Service Repo",
      importDate: "2024-02-15",
      url: "https://github.com/example/payment-service",
      status: "completed",
      commits: 128,
    },
    {
      id: 2,
      name: "User Management Repo",
      importDate: "2024-02-10",
      url: "https://github.com/example/user-management",
      status: "completed",
      commits: 90,
    },
    {
      id: 3,
      name: "Analytics Service Repo",
      importDate: "2024-02-05",
      url: "https://github.com/example/analytics",
      status: "processing",
      commits: 67,
    },
    {
      id: 4,
      name: "Notification Service Repo",
      importDate: "2024-02-01",
      url: "https://github.com/example/notification",
      status: "completed",
      commits: 45,
    },
    {
      id: 5,
      name: "Authentication Service Repo",
      importDate: "2024-01-28",
      url: "https://github.com/example/auth-service",
      status: "completed",
      commits: 78,
    },
  ];

  const handleNavigation = async () => {
    setIsExiting(true);
    setTimeout(() => router.push("/gtc/repo/archi"), 500); // Redirect after animation completes
  };

  const handleImport = async () => {
    if (!url) return;
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      handleNavigation(); // Start the exit animation and redirect
    } catch (err) {
      setError("Failed to import repository. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header Section with Enter and Exit Animation */}
        <div
          className={`space-y-2 text-center ${isExiting ? "animate-slide-up" : "animate-slide-down"}`}
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Choose Repository
          </h1>
          <p className="animate-fade-in text-lg text-gray-400">
            Import or select a repository to analyze commits
          </p>
        </div>

        {/* Import Section */}
        <div className="rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 shadow-md transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-white">
            Import New Repository
          </h2>
          <p className="mt-1 text-gray-400">Enter a GitHub URL to import</p>
          <div className="mt-4 flex gap-4">
            <input
              type="url"
              placeholder="https://github.com/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 rounded-md bg-zinc-700 p-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleImport}
              disabled={loading || !url}
              className={`rounded-md bg-blue-600 p-3 font-medium text-white transition-all hover:bg-blue-700 ${
                loading || !url ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              {loading ? (
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              ) : (
                "Import"
              )}
            </button>
          </div>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>

        {/* Previously Imported Repos Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Previously Imported Repos
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="rounded-full bg-zinc-800 p-2 text-white hover:bg-blue-500"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="rounded-full bg-zinc-800 p-2 text-white hover:bg-blue-500"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex space-x-6 overflow-x-auto pb-4 transition-opacity duration-300 ease-out"
          >
            {previousRepos.map((repo) => (
              <div
                key={repo.id}
                className="min-w-[340px] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-white">
                  {repo.name}
                </h3>
                <p className="text-sm text-gray-400">
                  Imported on {repo.importDate}
                </p>
                <p className="mt-2 truncate text-sm text-gray-400">
                  {repo.url}
                </p>
                <div className="mt-4 w-fit rounded-full bg-zinc-600 px-3 py-1">
                  <p className="text-sm text-gray-300">
                    {repo.commits} commits
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-sm ${repo.status === "completed" ? "text-green-500" : "text-yellow-500"}`}
                  >
                    {repo.status}
                  </span>
                  <button
                    onClick={handleNavigation}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Select Repo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoImportPage;
