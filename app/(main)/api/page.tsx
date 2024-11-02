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
    { id: 1, title: "Payment API Documentation", importDate: "2024-02-15", url: "https://docs.example.com/payment-api", status: "completed", endpoints: 24 },
    { id: 2, title: "User Management API", importDate: "2024-02-10", url: "https://docs.example.com/user-api", status: "completed", endpoints: 18 },
    { id: 3, title: "Analytics API", importDate: "2024-02-05", url: "https://docs.example.com/analytics-api", status: "processing", endpoints: 15 },
    { id: 4, title: "Notification API", importDate: "2024-02-01", url: "https://docs.example.com/notification-api", status: "completed", endpoints: 12 },
    { id: 5, title: "Authentication API", importDate: "2024-01-28", url: "https://docs.example.com/auth-api", status: "completed", endpoints: 8 },
  ];

  const handleNavigation = async () => {
    setIsExiting(true);
    setTimeout(() => router.push("/archi"), 500); // Redirect after animation completes
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
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section with Enter and Exit Animation */}
        <div className={`space-y-2 text-center ${isExiting ? "animate-slide-up" : "animate-slide-down"}`}>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Choose API Docs
          </h1>
          <p className="text-gray-400 text-lg animate-fade-in">
            Import or select documentation to convert into videos
          </p>
        </div>

        {/* Import Section */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 p-6 rounded-lg shadow-md transition-all hover:shadow-lg">
          <h2 className="text-xl font-semibold text-white">Import New Documentation</h2>
          <p className="text-gray-400 mt-1">Enter a Google Docs URL with API documentation to import</p>
          <div className="flex gap-4 mt-4">
            <input
              type="url"
              placeholder="https://docs.google.com/..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 p-3 rounded-md bg-zinc-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleImport}
              disabled={loading || !url}
              className={`p-3 rounded-md text-white font-medium bg-blue-600 hover:bg-blue-700 transition-all ${
                loading || !url ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <span className="animate-spin inline-block mr-2 border-2 border-t-transparent border-white rounded-full w-4 h-4"></span>
              ) : (
                "Import"
              )}
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Previously Imported Docs Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-white">Previously Imported Docs</h2>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-zinc-800 rounded-full text-white hover:bg-blue-500"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-zinc-800 rounded-full text-white hover:bg-blue-500"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="no-scrollbar flex overflow-x-auto space-x-6 pb-4 transition-opacity duration-300 ease-out"
          >
            {previousDocs.map((doc) => (
              <div
                key={doc.id}
                className="min-w-[340px] p-6 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-700 hover:shadow-lg transition-all hover:scale-105 duration-200"
              >
                <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
                <p className="text-sm text-gray-400">Imported on {doc.importDate}</p>
                <p className="text-sm text-gray-400 truncate mt-2">{doc.url}</p>
                <div className="mt-4 px-3 py-1 bg-zinc-600 rounded-full w-fit">
                  <p className="text-sm text-gray-300">{doc.endpoints} endpoints</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`text-sm ${doc.status === "completed" ? "text-green-500" : "text-yellow-500"}`}>
                    {doc.status}
                  </span>
                  <button onClick={handleNavigation} className="text-blue-400 hover:underline text-sm">
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
