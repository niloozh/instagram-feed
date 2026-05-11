"use client";

import { useState, useEffect } from "react";
import { Button } from "@/baseComponents";

export default function VideoConfigPage() {
  const [currentSource, setCurrentSource] = useState("local");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("videoSource");
    setCurrentSource(saved === "external" ? "external" : "local");
  }, []);

  const toggleSource = () => {
    setIsLoading(true);
    const newSource = currentSource === "local" ? "external" : "local";
    localStorage.setItem("videoSource", newSource);
    alert(`Switched to ${newSource} videos! Page will reload.`);
    window.location.href = "/reels";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full">
        <h1 className="text-white text-2xl font-bold mb-4">
          ⚙️ Video Configuration
        </h1>

        <div className="mb-6">
          <p className="text-gray-300 mb-2">Current Source:</p>
          <p
            className={`text-xl font-semibold ${currentSource === "local" ? "text-blue-500" : "text-green-500"}`}
          >
            {currentSource === "local"
              ? "📁 Local Videos"
              : "🌍 External Videos"}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            {currentSource === "local"
              ? "Using videos from /public/videos/ folder"
              : "Using online video URLs (requires internet)"}
          </p>
        </div>

        <Button
          variant="primary"
          onClick={toggleSource}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading
            ? "Switching..."
            : `Switch to ${currentSource === "local" ? "External" : "Local"} Videos`}
        </Button>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-400 text-sm">
            💡 After switching, you'll be redirected to the Reels page.
          </p>
        </div>
      </div>
    </div>
  );
}
