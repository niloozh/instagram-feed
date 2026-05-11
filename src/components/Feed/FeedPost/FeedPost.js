"use client";

import { useState } from "react";
import { Card, Avatar, LazyImage } from "@/baseComponents";
import { PostActions } from "./PostActions";
import { PostHeader } from "./PostHeader";
import { PostCaption } from "./PostCaption";
import { PostComments } from "./PostComments";

export const FeedPost = ({ post, onLike, onComment, onShare, onSave }) => {
  const [isLiked, setIsLiked] = useState(post.hasLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [isSaved, setIsSaved] = useState(post.hasSaved || false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    onLike?.(post.id, !isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.(post.id, !isSaved);
  };

  return (
    <Card variant="feed" className="pb-8">
      <PostHeader
        username={post.username}
        avatar={post.userAvatar}
        isVerified={post.isVerified}
        timestamp={post.createdAt}
      />

      <LazyImage
        src={post.imageUrl}
        alt={`Post by ${post.username}`}
        aspectRatio="square"
      />

      <PostActions
        isLiked={isLiked}
        isSaved={isSaved}
        onLike={handleLike}
        onComment={() => onComment?.(post.id)}
        onShare={() => onShare?.(post.id)}
        onSave={handleSave}
      />

      <PostCaption
        username={post.username}
        caption={post.caption}
        likesCount={likesCount}
      />

      <PostComments commentsCount={post.comments} />
    </Card>
  );
};
