"use client";

import { FeedContainer } from "@/components/Feed/FeedContainer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-10">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Instagram Feed</h1>
          <a
            href="/design-system"
            className="text-blue-500 text-sm hover:text-blue-400"
          >
            Design System →
          </a>
        </div>
      </div>

      <FeedContainer />
    </div>
  );
}
