"use client";

import { forwardRef } from "react";

export const ReelVideo = forwardRef(({ src, onLoadedData, onClick }, ref) => {
  return (
    <video
      ref={ref}
      src={src}
      className="h-full w-full object-cover"
      loop
      muted
      playsInline
      onLoadedData={onLoadedData}
      onClick={onClick}
    />
  );
});

ReelVideo.displayName = "ReelVideo";
