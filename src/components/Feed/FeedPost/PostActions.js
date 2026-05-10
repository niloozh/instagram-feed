import { Button } from "@/baseComponents/Button/Button";

export const PostActions = ({ isLiked, onLike, onComment, onShare }) => {
  return (
    <div className="px-4 pt-3">
      <div className="flex items-center space-x-4 mb-2">
        <Button onClick={onLike}>{isLiked ? "❤️" : "🤍"}</Button>
        <Button onClick={onComment}>💬</Button>
        <Button onClick={onShare}>📤</Button>
      </div>
    </div>
  );
};
