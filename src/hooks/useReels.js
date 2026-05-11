import { useState, useEffect, useCallback, useRef } from "react";
import { reelsService } from "@/services/reelsService";

export const useReels = (initialPage = 1, limit = 3) => {
  const [reels, setReels] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const isLoadingRef = useRef(false); // Request deduplication

  useEffect(() => {
    loadReels();
  }, [currentPage]);

  const loadReels = async () => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    try {
      const response = await reelsService.getReels(currentPage, limit);
      setReels((prev) => [...prev, ...response.data]);
      setHasMore(response.pagination.hasMore);
    } finally {
      setIsLoading(false);
      isLoadingRef.current = false;
    }
  };

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore && !isLoadingRef.current) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [isLoading, hasMore]);

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
