import { Icon } from "@/baseComponents";

export const PostActions = ({
  isLiked,
  onLike,
  onComment,
  onShare,
  isSaved,
  onSave,
}) => {
  return (
    <div className="px-4 pt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Icon
            name="heart"
            filled={isLiked}
            size={26}
            onClick={onLike}
            className="transition-all duration-200"
          />

          <Icon name="comment" size={26} onClick={onComment} />

          <Icon name="share" size={26} onClick={onShare} />
        </div>

        <Icon name="bookmark" filled={isSaved} size={26} onClick={onSave} />
      </div>
    </div>
  );
};
