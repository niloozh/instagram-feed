import { useState, useEffect, useCallback } from "react";
import { reelsService } from "@/services/reelsService";

export const useReels = (initialPage = 1, limit = 3) => {
  const [reels, setReels] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadReels();
  }, [currentPage]);

  const loadReels = async () => {
    try {
      setIsLoading(true);
      const response = await reelsService.getReels(currentPage, limit);
      setReels((prev) => [...prev, ...response.data]);
      setHasMore(response.pagination.hasMore);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      console.log("Loading more reels, current page:", currentPage);
      setCurrentPage((prev) => prev + 1);
    }
  }, [isLoading, hasMore, currentPage]);

  const handleLike = useCallback(async (reelId, isLiked) => {
    setReels((prev) =>
      prev.map((reel) =>
        reel.id === reelId
          ? {
              ...reel,
              hasLiked: isLiked,
              likes: isLiked ? reel.likes + 1 : reel.likes - 1,
            }
          : reel,
      ),
    );

    await reelsService.likeReel(reelId);
  }, []);

  return { reels, isLoading, hasMore, loadMore, handleLike };
};
