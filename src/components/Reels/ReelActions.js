import { Icon, Button } from "@/baseComponents";
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
      <Button
        variant="icon"
        onClick={onLike}
        className="flex flex-col items-center"
      >
        <Icon name="heart" filled={hasLiked} size={32} />
        <span className="text-xs text-white mt-1">{formatCount(likes)}</span>
      </Button>

      <Button variant="icon" className="flex flex-col items-center">
        <Icon name="comment" size={32} />
        <span className="text-xs text-white mt-1">{formatCount(comments)}</span>
      </Button>

      <Button variant="icon" className="flex flex-col items-center">
        <Icon name="share" size={32} />
      </Button>

      <Button
        variant="icon"
        onClick={onSave}
        className="flex flex-col items-center"
      >
        <Icon name="bookmark" filled={hasSaved} size={32} />
      </Button>
    </div>
  );
};
