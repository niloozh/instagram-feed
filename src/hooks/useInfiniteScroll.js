import { useEffect, useRef, useCallback } from "react";
import { throttle } from "lodash";

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
  options = {},
  throttleMs = 500,
}) => {
  const observerRef = useRef(null);

  // Throttled version of onLoadMore
  const throttledLoadMore = useCallback(
    throttle(() => {
      if (hasMore && !isLoading) {
        onLoadMore();
      }
    }, throttleMs),
    [hasMore, isLoading, onLoadMore, throttleMs],
  );

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !isLoading) {
            throttledLoadMore();
          }
        },
        {
          threshold: 0.2,
          rootMargin: "200px",
          ...options,
        },
      );

      if (node) {
        observerRef.current.observe(node);
      }
    },
    [isLoading, hasMore, throttledLoadMore, options],
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      throttledLoadMore.cancel();
    };
  }, [throttledLoadMore]);

  return lastElementRef;
};
