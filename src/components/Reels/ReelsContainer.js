"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useReels } from "@/hooks/useReels";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { ReelItem } from "./ReelItem";
import { ReelSkeleton } from "./ReelSkeleton";

export const ReelsContainer = () => {
  const { reels, isLoading, hasMore, loadMore, handleLike } = useReels();
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const lastReelRef = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMore,
    options: { threshold: 0.5 },
  });

  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      const index = Math.round(scrollTop / window.innerHeight);
      if (index !== activeIndex && index >= 0 && index < reels.length) {
        setActiveIndex(index);
      }
    }
  }, [activeIndex, reels.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  if (isLoading && reels.length === 0) {
    return <ReelSkeleton />;
  }

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {reels.map((reel, index) => (
        <div
          key={reel.id}
          ref={index === reels.length - 1 ? lastReelRef : null}
          className="h-screen w-full snap-start"
        >
          <ReelItem
            reel={reel}
            onLike={handleLike}
            isActive={index === activeIndex}
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
