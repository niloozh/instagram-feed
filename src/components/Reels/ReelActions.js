import { Icon } from "@/baseComponents";

export const ReelActions = ({
  likes,
  comments,
  hasLiked,
  hasSaved,
  onLike,
  onSave,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center">
        <Icon name="heart" filled={hasLiked} size={32} onClick={onLike} />
        <span className="text-xs text-white mt-1">
          {likes.toLocaleString()}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <Icon name="comment" size={32} />
        <span className="text-xs text-white mt-1">
          {comments.toLocaleString()}
        </span>
      </div>

      <Icon name="share" size={32} />

      <Icon name="bookmark" filled={hasSaved} size={32} onClick={onSave} />
    </div>
  );
};
