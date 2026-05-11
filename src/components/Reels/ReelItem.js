"use client";

import { useState, useRef, useEffect } from "react";
import { Avatar } from "@/baseComponents";
import { ReelActions } from "./ReelActions";

export const ReelItem = ({ reel, onLike, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  // Handle play/pause when active state changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      // Play video when becoming active
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Video play error:", error);
            // Try muted play as fallback
            video.muted = true;
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch((e) => console.log("Muted play also failed:", e));
          });
      }
    } else {
      // Pause video when not active
      if (!video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  // Handle video load completion
  const handleVideoLoad = () => {
    setIsLoading(false);
    if (isActive && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Auto-play error:", e));
    }
  };

  // Toggle play/pause on click
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Play error:", e));
    }
  };

  useEffect(() => {
    console.log(`Reel ${reel.id} - isActive: ${isActive}`);
  }, [isActive, reel.id]);

  return (
    <div className="relative h-full w-full bg-black">
      {/* Loading Spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={reel.videoUrl}
        className="h-full w-full object-contain"
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onClick={togglePlay}
      />

      {/* Play/Pause Overlay Indicator */}
      {!isPlaying && !isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          onClick={togglePlay}
        >
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

      {/* Content Overlay (always visible) */}
      <div className="absolute bottom-20 left-4 right-16 text-white z-10">
        <div className="flex items-center gap-3 mb-3">
          <Avatar src={reel.userAvatar} alt={reel.username} size="md" />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm">{reel.username}</span>
              {reel.isVerified && (
                <span className="text-blue-500 text-xs">✓</span>
              )}
            </div>
            <p className="text-xs text-gray-300">{reel.music} ♪</p>
          </div>
        </div>

        <p className="text-sm mb-2">{reel.description}</p>
      </div>

      {/* Actions Sidebar */}
      <ReelActions
        likes={reel.likes}
        comments={reel.comments}
        hasLiked={reel.hasLiked}
        hasSaved={reel.hasSaved}
        onLike={() => onLike(reel.id, !reel.hasLiked)}
        onSave={() => console.log("Save:", reel.id)}
      />
    </div>
  );
};
