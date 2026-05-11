"use client";

import { useState, useCallback } from "react";
import { useReels } from "@/hooks/useReels";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ReelItem } from "./ReelItem";
import { ReelSkeleton } from "./ReelSkeleton";

export const ReelsContainer = () => {
  const { reels, isLoading, hasMore, loadMore, handleLike } = useReels();
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const lastReelRef = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMore,
    options: { threshold: 0.5, rootMargin: "100px" },
  });

  // Handle scroll to detect active reel
  const handleScroll = useCallback(
    (e) => {
      const container = e.target;
      const scrollTop = container.scrollTop;
      const reelHeight = window.innerHeight;
      const newActiveIndex = Math.round(scrollTop / reelHeight);

      if (
        newActiveIndex !== activeReelIndex &&
        newActiveIndex >= 0 &&
        newActiveIndex < reels.length
      ) {
        setActiveReelIndex(newActiveIndex);
      }
    },
    [activeReelIndex, reels.length],
  );

  if (isLoading && reels.length === 0) {
    return <ReelSkeleton />;
  }

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      onScroll={handleScroll}
    >
      {reels.map((reel, index) => (
        <div
          key={reel.id}
          ref={index === reels.length - 1 ? lastReelRef : null}
          className="snap-start h-screen"
        >
          <ReelItem
            reel={reel}
            onLike={handleLike}
            isActive={index === activeReelIndex}
          />
        </div>
      ))}

      {isLoading && <ReelSkeleton />}

      {!hasMore && !isLoading && (
        <div className="h-screen flex items-center justify-center bg-black">
          <p className="text-gray-500 text-center">You've seen all reels! 🎬</p>
        </div>
      )}
    </div>
  );
};
