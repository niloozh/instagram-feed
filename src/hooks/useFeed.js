import { useState, useEffect, useCallback } from "react";
import { feedService } from "@/services/feedService";

export const useFeed = (initialPage = 1, limit = 5) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  // Load posts when page changes
  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const response = await feedService.getFeed(currentPage, limit);

      setPosts((prev) => [...prev, ...response.data]);
      setHasMore(response.pagination.hasMore);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [isLoading, hasMore]);

  const handleLike = useCallback(async (postId, isLiked) => {
    // Optimistic update
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

    // API call
    try {
      if (isLiked) {
        await feedService.likePost(postId);
      } else {
        await feedService.unlikePost(postId);
      }
    } catch (error) {
      // Revert on error
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

  const resetFeed = useCallback(() => {
    setPosts([]);
    setCurrentPage(initialPage);
    setIsLoading(true);
    setHasMore(true);
    setError(null);
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
