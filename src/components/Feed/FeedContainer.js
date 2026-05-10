"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { FeedPost } from "./FeedPost/FeedPost";
import { FeedSkeleton } from "./FeedSkeleton";

export const FeedContainer = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef();

  const loadPosts = useCallback(async (pageNum) => {
    // Mock API call
    const mockPosts = Array.from({ length: 5 }, (_, i) => ({
      id: `post_${pageNum}_${i}`,
      username: `user_${Math.floor(Math.random() * 1000)}`,
      userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      imageUrl: `https://picsum.photos/400/500?random=${pageNum}${i}`,
      caption: "Amazing content! 🔥",
      likes: Math.floor(Math.random() * 10000),
      comments: Math.floor(Math.random() * 500),
      hasLiked: false,
      isVerified: Math.random() > 0.8,
      createdAt: "2 hours ago",
    }));

    return mockPosts;
  }, []);

  useEffect(() => {
    loadPosts(page).then((newPosts) => {
      setPosts((prev) => [...prev, ...newPosts]);
      setLoading(false);
      setHasMore(page < 5);
    });
  }, [page]);

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();
      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore],
  );

  const handleLike = (postId, isLiked) => {
    console.log(`Post ${postId} ${isLiked ? "liked" : "unliked"}`);
  };

  if (loading && posts.length === 0) {
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

      {loading && <FeedSkeleton />}
    </div>
  );
};
