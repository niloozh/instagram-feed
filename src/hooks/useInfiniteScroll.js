import { useEffect, useRef, useCallback } from "react";

export const useInfiniteScroll = ({
  hasMore,
  isLoading,
  onLoadMore,
  options = {},
}) => {
  const observerRef = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observerRef.current) observerRef.current.disconnect();

      const defaultOptions = {
        threshold: 0.2,
        rootMargin: "200px",
        ...options,
      };

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          onLoadMore();
        }
      }, defaultOptions);

      if (node) observerRef.current.observe(node);
    },
    [isLoading, hasMore, onLoadMore, options],
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return lastElementRef;
};
