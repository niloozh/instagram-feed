import { Avatar } from "@/baseComponents/Avatar/Avatar";

export const PostHeader = ({ username, avatar, isVerified, timestamp }) => {
  return (
    <div className="flex items-center px-4 py-3">
      <Avatar src={avatar} alt={username} size="md" />
      <div className="ml-3 flex-1">
        <div className="flex items-center gap-1">
          <span className="text-white font-semibold text-sm">{username}</span>
          {isVerified && <span className="text-blue-500 text-xs">✓</span>}
        </div>
        <span className="text-gray-500 text-xs">{timestamp}</span>
      </div>
      <button className="text-white text-xl">⋯</button>
    </div>
  );
};
