"use client";

import { useState, useRef } from "react";
import { Avatar } from "@/baseComponents";
import { ReelActions } from "./ReelActions";

export const ReelItem = ({ reel, onLike, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Auto-play/pause based on visibility
  if (isActive && videoRef.current && !isPlaying) {
    videoRef.current.play();
    setIsPlaying(true);
  } else if (!isActive && videoRef.current && isPlaying) {
    videoRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <div className="relative h-screen w-full snap-start bg-black">
      {/* Video */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        autoPlay={isActive}
      />

      {/* Overlay Content */}
      <div className="absolute bottom-20 left-4 right-16 text-white">
        {/* User Info */}
        <div className="flex items-center gap-3 mb-3">
          <Avatar src={reel.userAvatar} alt={reel.username} size="md" />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{reel.username}</span>
              {reel.isVerified && (
                <span className="text-blue-500 text-xs">✓</span>
              )}
            </div>
            <p className="text-xs text-gray-300">{reel.music} ♪</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mb-2">{reel.description}</p>
      </div>

      {/* Actions Sidebar */}
      <ReelActions
        likes={reel.likes}
        comments={reel.comments}
        hasLiked={reel.hasLiked}
        onLike={() => onLike(reel.id, !reel.hasLiked)}
      />
    </div>
  );
};
