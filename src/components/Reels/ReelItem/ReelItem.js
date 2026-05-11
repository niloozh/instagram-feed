"use client";

import { useState, useRef, useEffect } from "react";
import { ReelActions } from "../ReelActions";
import { ReelVideo } from "./ReelVideo";
import { ReelMuteButton } from "./ReelMuteButton";
import { ReelPlayPauseOverlay } from "./ReelPlayPauseOverlay";
import { ReelLoadingSpinner } from "./ReelLoadingSpinner";
import { ReelInfo } from "./ReelInfo";

export const ReelItem = ({ reel, onLike, isActive }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            video.muted = true;
            video.play().then(() => setIsPlaying(true));
          });
      }
    } else {
      if (!video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  const handleVideoLoad = () => {
    setIsLoading(false);
    if (isActive && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
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

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative h-full w-full bg-black">
      <ReelVideo
        ref={videoRef}
        src={reel.videoUrl}
        onLoadedData={handleVideoLoad}
        onClick={togglePlay}
      />

      <ReelLoadingSpinner isLoading={isLoading} />

      <ReelPlayPauseOverlay isVisible={!isPlaying && !isLoading && isActive} />

      <ReelMuteButton isMuted={isMuted} onToggle={toggleMute} />

      <ReelInfo
        username={reel.username}
        userAvatar={reel.userAvatar}
        isVerified={reel.isVerified}
        music={reel.music}
        description={reel.description}
      />

      <div className="absolute bottom-24 right-2 z-10">
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
  );
};
