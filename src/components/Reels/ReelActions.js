import { Button } from "@/baseComponents";

export const ReelActions = ({ likes, comments, hasLiked, onLike }) => {
  return (
    <div className="absolute bottom-20 right-4 flex flex-col items-center gap-6">
      <button onClick={onLike} className="flex flex-col items-center">
        <span className="text-3xl">{hasLiked ? "❤️" : "🤍"}</span>
        <span className="text-xs mt-1">{likes.toLocaleString()}</span>
      </button>

      <button className="flex flex-col items-center">
        <span className="text-3xl">💬</span>
        <span className="text-xs mt-1">{comments.toLocaleString()}</span>
      </button>

      <button className="flex flex-col items-center">
        <span className="text-3xl">📤</span>
      </button>
    </div>
  );
};
