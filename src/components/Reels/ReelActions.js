import { Icon } from "@/baseComponents";
import { formatCount } from "@/utils/formatHelpers";

export const ReelActions = ({
  likes,
  comments,
  hasLiked,
  hasSaved,
  onLike,
  onSave,
}) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* Icon handles the button internally when onClick provided */}
      <div className="flex flex-col items-center">
        <Icon name="heart" filled={hasLiked} size={32} onClick={onLike} />
        <span className="text-xs text-white mt-1">{formatCount(likes)}</span>
      </div>

      {/* No onClick - renders just the icon */}
      <div className="flex flex-col items-center">
        <Icon name="comment" size={32} />
        <span className="text-xs text-white mt-1">{formatCount(comments)}</span>
      </div>

      <Icon name="share" size={32} />

      <Icon name="bookmark" filled={hasSaved} size={32} onClick={onSave} />
    </div>
  );
};
