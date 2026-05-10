export const Avatar = ({ src, alt, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover ${className}`}
    />
  );
};
