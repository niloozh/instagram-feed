"use client";

import { useFeed } from "@/hooks/useFeed";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { FeedPost } from "./FeedPost/FeedPost";
import { FeedSkeleton } from "./FeedSkeleton";
import { FeedEndMessage } from "./FeedEndMessage";

export const FeedContainer = () => {
  const { posts, isLoading, hasMore, loadMore, handleLike } = useFeed();

  const lastPostRef = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore: loadMore,
  });

  if (isLoading && posts.length === 0) {
    return <FeedSkeleton />;
  }

  return (
    <div className="max-w-md mx-auto pt-16 pb-20">
      {posts.map((post, index) => (
        <div
          key={post.id}
          ref={index === posts.length - 1 ? lastPostRef : null}
        >
          <FeedPost
            post={post}
            onLike={handleLike}
            onComment={(id) => console.log("Comment on:", id)}
            onShare={(id) => console.log("Share:", id)}
          />
        </div>
      ))}

      {isLoading && <FeedSkeleton />}

      {!hasMore && !isLoading && <FeedEndMessage />}
    </div>
  );
};
