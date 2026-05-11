import { useState, useEffect, useCallback, useRef } from "react";
import { feedService } from "@/services/feedService";

export const useFeed = (initialPage = 1, limit = 5) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const isLoadingRef = useRef(false);
  const abortControllerRef = useRef(null); // For cancelling requests

  useEffect(() => {
    loadPosts();
  }, [currentPage]);

  const loadPosts = async () => {
    if (isLoadingRef.current) return;

    // Cancel previous in-flight request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    isLoadingRef.current = true;
    setIsLoading(true);

    // Create new abort controller
    abortControllerRef.current = new AbortController();

    try {
      const response = await feedService.getFeed(currentPage, limit, {
        signal: abortControllerRef.current.signal,
      });
      setPosts((prev) => [...prev, ...response.data]);
      setHasMore(response.pagination.hasMore);
      setError(null);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
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
    // Abort any ongoing request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
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
