"use client";

import { useState } from "react";
import { Card } from "@/baseComponents/Card/Card";
import { Avatar } from "@/baseComponents/Avatar/Avatar";
import { Button } from "@/baseComponents/Button/Button";
import { PostActions } from "./PostActions";
import { PostHeader } from "./PostHeader";
import { PostCaption } from "./PostCaption";
import { PostComments } from "./PostComments";

export const FeedPost = ({ post, onLike, onComment, onShare }) => {
  const [isLiked, setIsLiked] = useState(post.hasLiked || false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    onLike?.(post.id, !isLiked);
  };

  return (
    <Card variant="feed" className="pb-8">
      <PostHeader
        username={post.username}
        avatar={post.userAvatar}
        isVerified={post.isVerified}
        timestamp={post.createdAt}
      />

      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full aspect-square object-cover"
      />

      <PostActions
        isLiked={isLiked}
        onLike={handleLike}
        onComment={() => onComment?.(post.id)}
        onShare={() => onShare?.(post.id)}
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
