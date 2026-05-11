"use client";

import { useState, useEffect, useRef } from "react";

export const Avatar = ({
  src,
  alt = "User avatar",
  size = "md",
  className = "",
  withStory = false,
  isVerified = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  };

  // Instagram story ring gradient
  const storyGradient =
    "p-[2px] bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 rounded-full";

  // Fallback avatar based on name or default
  const getFallbackAvatar = () => {
    const name = alt || "User";
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
    return `https://ui-avatars.com/api/?background=random&color=fff&name=${initials}&size=128`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const avatarContent = (
    <div className={`relative ${sizes[size]} ${className}`}>
      {/* Skeleton loading */}
      {!isLoaded && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse flex items-center justify-center">
          <svg
            className="w-1/2 h-1/2 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      )}

      {/* Avatar image */}
      {isInView && (
        <img
          src={hasError ? getFallbackAvatar() : src}
          alt={alt}
          className={`
            w-full h-full rounded-full object-cover transition-all duration-300
            ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"}
          `}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(true);
          }}
        />
      )}

      {/* Verified badge */}
      {isVerified && (
        <div className="absolute -bottom-0.5 -right-0.5 bg-blue-500 rounded-full p-0.5 border-2 border-black">
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {/* Retry button on error */}
      {hasError && (
        <button
          onClick={handleRetry}
          className="absolute inset-0 rounded-full bg-black/70 hover:bg-black/80 flex items-center justify-center transition"
          title="Retry loading avatar"
        >
          <svg
            className="w-4 h-4 text-white"
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
        </button>
      )}
    </div>
  );

  // Wrap with story ring if needed
  if (withStory) {
    return (
      <div ref={containerRef} className={`${storyGradient}`}>
        {avatarContent}
      </div>
    );
  }

  return <div ref={containerRef}>{avatarContent}</div>;
};
