"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar } from "@/baseComponents";
import { ReelActions } from "./ReelActions";

export const ReelItem = ({ reel, onLike, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          video.muted = true;
          video.play().then(() => setIsPlaying(true));
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const handleLoadedData = () => {
    setIsLoading(false);
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="relative w-full h-full bg-black">
      {/* Video - full width and height */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        onLoadedData={handleLoadedData}
        onClick={togglePlay}
      />

      {/* Loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Play/Pause Overlay */}
      {!isPlaying && !isLoading && isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/50 rounded-full p-4">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Content - absolutely positioned OVER the video */}
      <div className="absolute bottom-0 left-0 right-0 top-0 pointer-events-none">
        {/* User info - bottom left */}
        <div className="absolute bottom-24 left-4 pointer-events-auto">
          <div className="flex items-center gap-3 mb-3 pointer-events-auto">
            <Avatar
              src={reel.userAvatar}
              alt={reel.username}
              size="md"
              withStory={true}
              isVerified={reel.isVerified}
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-sm text-white">
                  {reel.username}
                </span>
                {reel.isVerified && (
                  <span className="text-blue-500 text-xs">✓</span>
                )}
              </div>
              <p className="text-xs text-gray-300">{reel.music} ♪</p>
            </div>
          </div>
          <p className="text-sm text-white mt-2">{reel.description}</p>
        </div>

        {/* Actions - bottom right */}
        <div className="absolute bottom-24 right-4 pointer-events-auto">
          <ReelActions
            likes={reel.likes}
            comments={reel.comments}
            hasLiked={reel.hasLiked}
            hasSaved={reel.hasSaved}
            onLike={() => onLike(reel.id, !reel.hasLiked)}
            onSave={() => {}}
          />
        </div>
      </div>
    </div>
  );
};
