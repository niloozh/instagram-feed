"use client";

import { useState, useEffect, useRef } from "react";

export const LazyImage = ({
  src,
  alt = "",
  className = "",
  fallbackSrc = null,
  aspectRatio = "square", // 'square', 'video', 'portrait', 'landscape'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  // Aspect ratio classes
  const aspectRatios = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[4/5]",
    landscape: "aspect-[5/4]",
  };

  // Colorful placeholders for loading state
  const placeholderColors = [
    "from-purple-500 to-pink-500",
    "from-blue-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
    "from-indigo-500 to-purple-500",
    "from-rose-500 to-orange-500",
    "from-cyan-500 to-blue-500",
  ];

  const randomGradient =
    placeholderColors[Math.floor(Math.random() * placeholderColors.length)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fallbackImage =
    fallbackSrc ||
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"%3E%3Crect fill="%23333" width="400" height="500"/%3E%3Ctext fill="%23666" x="200" y="250" text-anchor="middle" font-size="20"%3E📸 Failed to load%3C/text%3E%3C/svg%3E';

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(true);
    };
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectRatios[aspectRatio]} bg-gray-900 overflow-hidden rounded-none ${className}`}
    >
      {/* Skeleton / Placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${randomGradient} animate-pulse flex items-center justify-center`}
        >
          <svg
            className="w-12 h-12 text-white/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}

      {/* Image */}
      {isInView && (
        <img
          src={hasError ? fallbackImage : src}
          alt={alt}
          loading="lazy"
          className={`
            w-full h-full object-cover transition-all duration-500
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      )}

      {/* Retry button on error */}
      {hasError && (
        <button
          onClick={handleRetry}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 hover:bg-black/90 text-white text-xs px-4 py-2 rounded-full transition z-10 flex items-center gap-2"
        >
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Retry
        </button>
      )}
    </div>
  );
};
