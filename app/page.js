"use client";

import { FeedContainer } from "@/components/Feed/FeedContainer";
import { Icon } from "@/baseComponents";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-10">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          {/* Instagram Logo */}
          <h1 className="text-white text-2xl font-semibold font-['Instagram Sans']">
            Instagram
          </h1>

          {/* Right side icons */}
          <div className="flex gap-4">
            <Icon name="heart" size={24} />
            <Icon name="share" size={24} />
            <a
              href="/design-system"
              className="text-blue-500 text-sm hover:text-blue-400"
            >
              DS
            </a>
          </div>
        </div>
      </div>

      <FeedContainer />
    </div>
  );
}
