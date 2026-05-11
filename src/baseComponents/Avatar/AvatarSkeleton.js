export const AvatarSkeleton = ({ size = "md" }) => {
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-14 h-14",
  };

  return (
    <div
      className={`${sizes[size]} rounded-full bg-gradient-to-br from-gray-700 to-gray-800 animate-pulse`}
    >
      <div className="w-full h-full rounded-full bg-gray-700/50"></div>
    </div>
  );
};
