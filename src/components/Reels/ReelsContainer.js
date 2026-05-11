"use client";
import { useState } from "react";
import { useReels } from "@/hooks/useReels";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ReelItem } from "./ReelItem";
import { ReelSkeleton } from "./ReelSkeleton";

export const ReelsContainer = () => {
  const { reels, isLoading, hasMore, loadMore, handleLike } = useReels();

  const lastReelRef = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMore,
    options: { threshold: 0.5, rootMargin: "100px" },
  });

  // Track which reel is currently visible
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  if (isLoading && reels.length === 0) {
    return <ReelSkeleton />;
  }

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
      {reels.map((reel, index) => (
        <div
          key={reel.id}
          ref={index === reels.length - 1 ? lastReelRef : null}
          className="snap-start"
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
          <p className="text-gray-500">You've seen all reels! 🎬</p>
        </div>
      )}
    </div>
  );
};
