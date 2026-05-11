import { useState, useEffect, useCallback, useRef } from "react";
import { feedService } from "@/services/feedService";

export const useFeed = (initialPage = 1, limit = 5) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const isLoadingRef = useRef(false); // Request deduplication

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  const loadPosts = async () => {
    // Prevent duplicate requests
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    setIsLoading(true);

    try {
      const response = await feedService.getFeed(currentPage, limit);
      setPosts((prev) => [...prev, ...response.data]);
      setHasMore(response.pagination.hasMore);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      isLoadingRef.current = false;
    }
  };

  const handleLike = useCallback(async (postId, isLiked) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              hasLiked: isLiked,
              likes: isLiked ? post.likes + 1 : post.likes - 1,
            }
          : post,
      ),
    );

    try {
      if (isLiked) {
        await feedService.likePost(postId);
      } else {
        await feedService.unlikePost(postId);
      }
    } catch (error) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? {
                ...post,
                hasLiked: !isLiked,
                likes: isLiked ? post.likes - 1 : post.likes + 1,
              }
            : post,
        ),
      );
      console.error("Failed to update like:", error);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore && !isLoadingRef.current) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [isLoading, hasMore]);

  const resetFeed = useCallback(() => {
    setPosts([]);
    setCurrentPage(initialPage);
    setIsLoading(true);
    setHasMore(true);
    setError(null);
    isLoadingRef.current = false;
  }, [initialPage]);

  return {
    posts,
    isLoading,
    hasMore,
    error,
    loadMore,
    handleLike,
    resetFeed,
  };
};
