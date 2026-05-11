"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideoConfigPage() {
  const router = useRouter();
  const [currentSource, setCurrentSource] = useState("local");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load current setting
    const saved = localStorage.getItem("videoSource");
    setCurrentSource(saved === "external" ? "external" : "local");
  }, []);

  const toggleSource = () => {
    setIsLoading(true);
    const newSource = currentSource === "local" ? "external" : "local";

    // Save to localStorage
    localStorage.setItem("videoSource", newSource);

    // Show feedback
    alert(
      `Switched to ${newSource} videos! Page will reload to apply changes.`,
    );

    // Reload to re-fetch data with new source
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
              ? "Using videos from /public/videos/ folder (offline mode)"
              : "Using online video URLs (requires internet access)"}
          </p>
        </div>

        <button
          onClick={toggleSource}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition disabled:opacity-50"
        >
          {isLoading
            ? "Switching..."
            : `Switch to ${currentSource === "local" ? "External" : "Local"} Videos`}
        </button>

        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-400 text-sm">
            💡 <span className="font-semibold text-white">Note:</span> After
            switching, you'll be redirected to the Reels page to see the
            changes.
          </p>
        </div>
      </div>
    </div>
  );
}
