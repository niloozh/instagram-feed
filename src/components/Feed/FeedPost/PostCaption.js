export const PostCaption = ({ username, caption, likesCount }) => {
  return (
    <div className="px-4">
      <div className="font-semibold text-white text-sm mb-1">
        {likesCount.toLocaleString()} likes
      </div>
      <div className="text-white text-sm">
        <span className="font-semibold mr-2">{username}</span>
        {caption}
      </div>
    </div>
  );
};
