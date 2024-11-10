"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // for Next.js navigation
import "./api.css";

const DocsImportPage = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isExiting, setIsExiting] = useState(false); // For exit animation
  const router = useRouter(); // initialize router for navigation
  const scrollContainerRef = React.useRef(null);

  const previousDocs = [
    {
      id: 1,
      title: "Payment API Documentation",
      importDate: "2024-02-15",
      url: "https://docs.example.com/payment-api",
      status: "completed",
      endpoints: 24,
    },
    {
      id: 2,
      title: "User Management API",
      importDate: "2024-02-10",
      url: "https://docs.example.com/user-api",
      status: "completed",
      endpoints: 18,
    },
    {
      id: 3,
      title: "Analytics API",
      importDate: "2024-02-05",
      url: "https://docs.example.com/analytics-api",
      status: "processing",
      endpoints: 15,
    },
    {
      id: 4,
      title: "Notification API",
      importDate: "2024-02-01",
      url: "https://docs.example.com/notification-api",
      status: "completed",
      endpoints: 12,
    },
    {
      id: 5,
      title: "Authentication API",
      importDate: "2024-01-28",
      url: "https://docs.example.com/auth-api",
      status: "completed",
      endpoints: 8,
    },
  ];

  const handleNavigation = async () => {
    setIsExiting(true);
    setTimeout(() => router.push("/gtc/api/doc-visualizer"), 500); // Redirect after animation completes
  };

  const handleImport = async () => {
    if (!url) return;
    setLoading(true);
    setError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      handleNavigation(); // Start the exit animation and redirect
    } catch (err) {
      setError("Failed to import documentation. Please try again.");
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
            Choose API Docs
          </h1>
          <p className="animate-fade-in text-lg text-gray-400">
            Import or select documentation to convert into videos
          </p>
        </div>

        {/* Import Section */}
        <div className="rounded-lg bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 shadow-md transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-white">
            Import New Documentation
          </h2>
          <p className="mt-1 text-gray-400">
            Enter a Google Docs URL with API documentation to import
          </p>
          <div className="mt-4 flex gap-4">
            <input
              type="url"
              placeholder="https://docs.google.com/..."
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

        {/* Previously Imported Docs Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">
              Previously Imported Docs
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
            {previousDocs.map((doc) => (
              <div
                key={doc.id}
                className="min-w-[340px] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-700 p-6 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <h3 className="mb-2 text-lg font-bold text-white">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-400">
                  Imported on {doc.importDate}
                </p>
                <p className="mt-2 truncate text-sm text-gray-400">{doc.url}</p>
                <div className="mt-4 w-fit rounded-full bg-zinc-600 px-3 py-1">
                  <p className="text-sm text-gray-300">
                    {doc.endpoints} endpoints
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-sm ${doc.status === "completed" ? "text-green-500" : "text-yellow-500"}`}
                  >
                    {doc.status}
                  </span>
                  <button
                    onClick={handleNavigation}
                    className="text-sm text-blue-400 hover:underline"
                  >
                    Select Doc
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

export default DocsImportPage;
