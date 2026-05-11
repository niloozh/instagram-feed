"use client";

import { forwardRef } from "react";

export const ReelVideo = forwardRef(
  ({ src, onCanPlay, onClick, isActive }, ref) => {
    return (
      <video
        ref={ref}
        src={src}
        className="h-full w-full object-cover"
        loop
        muted
        playsInline
        preload={isActive ? "auto" : "metadata"}
        onCanPlay={onCanPlay}
        onClick={onClick}
      />
    );
  },
);

ReelVideo.displayName = "ReelVideo";
