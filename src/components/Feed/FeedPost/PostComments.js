import { formatCount } from "@/utils/formatHelpers";

export const PostComments = ({ commentsCount }) => {
  if (commentsCount === 0) return null;

  return (
    <div className="px-4 mt-1">
      <span className="text-gray-500 text-xs">
        View all {formatCount(commentsCount)} comments
      </span>
    </div>
  );
};
