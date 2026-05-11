"use client";

import { Avatar } from "@/baseComponents";

export const ReelInfo = ({
  username,
  userAvatar,
  isVerified,
  music,
  description,
}) => {
  return (
    <div className="absolute bottom-24 left-4 right-16 z-10">
      <div className="flex items-center gap-3 mb-3">
        <Avatar src={userAvatar} alt={username} size="md" />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-sm text-white">{username}</span>
            {isVerified && <span className="text-blue-500 text-xs">✓</span>}
          </div>
          <p className="text-xs text-gray-300">{music} ♪</p>
        </div>
      </div>
      <p className="text-sm text-white mb-2">{description}</p>
    </div>
  );
};
